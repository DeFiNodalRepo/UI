import { useEffect, useState } from "react";
import {
  useWriteContract,
  useReadContracts,
  useAccount,
  useReadContract,
} from "wagmi";
import dnodABI from "../../abi/TokenExchange.json";
import { platformAddress } from "../../constants/sideWide";
import { allowedChains } from "../../constants/sideWide";
import {
  formatUnits,
  numberToHex,
  maxUint256,
  erc20Abi,
  parseUnits,
} from "viem";
import useGetBalance from "../../hooks/web3/useGetBalance";
import BouncingBalls from "../../ui/bouncingBalls";

function FairLaunchSwap() {
  const [inputValue, setInputValue] = useState("");

  const maxAllowance = numberToHex(maxUint256);
  const { address: userAddress, chainId } = useAccount();

  const balanceConfig = [
    {
      address: platformAddress.sdnod,
      abi: erc20Abi,
      functionName: "balanceOf",
      args: [userAddress],
    },
    {
      address: platformAddress.dnod,
      abi: erc20Abi,
      functionName: "balanceOf",
      args: [userAddress],
    },
  ] as const;

  const { data: writeHash, isPending, writeContract } = useWriteContract();

  const { balances, refetch } = useGetBalance(balanceConfig);

  useEffect(() => {
    refetch();
  }, [writeHash]);

  console.log(maxAllowance);

  const mintAllowance = useReadContract({
    abi: erc20Abi,
    address: "0xb0e77224e214e902dE434b51125a775F6339F6C9",
    functionName: "allowance",
    args: [userAddress, platformAddress.dnod],
    account: userAddress,
  });

  console.log("mint allow", mintAllowance.data);

  const DNODAmmount = inputValue / 0.1;

  async function handleGetDNOD(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log(mintAllowance.data);
    // console.log(parseUnits(inputValue.toString(), 18));

    if (mintAllowance.data < parseUnits(inputValue.toString(), 18)) {
      const txAllowance = await writeContract({
        abi: erc20Abi,
        address: "0xb0e77224e214e902dE434b51125a775F6339F6C9",
        functionName: "approve",
        args: [platformAddress.dnod, maxAllowance],
      });
    }
    const writeTx = await writeContract({
      abi: dnodABI,
      address: platformAddress.dnod,
      functionName: "exchange",
      args: [parseUnits(inputValue.toString(), 18)],
    });
  }

  return (
    <form
      className="flex justify-center my-5 h-78 pt-10"
      onSubmit={handleGetDNOD}
    >
      <div className="bg-main  py-2 px-4 rounded-xl border border-main w-4/5 sm:w-1/3 flex flex-col items-center">
        <input
          type="text"
          name="amount"
          placeholder="0.0"
          className="w-5/6 rounded-xl dark:bg-boxdark-2 px-4 py-4 mt-6"
          onChange={(e) =>
            setTimeout(() => setInputValue(e.target.value), 2000)
          }
        />
        <p className="pt-4 text-sm">You will receive {DNODAmmount} $DNOD</p>
        <button
          className="w-5/6 rounded-xl bg-boxdark-2 px-4 py-4 mt-4  text-white text-bold"
          type="submit"
        >
          Get DNOD
        </button>
        <div className="flex items-center py-6 gap-6">
          <div className="flex items-center">
            <p className="mr-1">$sDNOD: </p>
            <div>
              {balances[0] ? (
                Number(formatUnits(balances[0].result, 18)).toFixed(2)
              ) : (
                <BouncingBalls />
              )}
            </div>
          </div>
          <div className="flex items-center">
            <p className="mr-1">$DNOD:</p>
            <div>
              {balances[0] ? (
                Number(formatUnits(balances[1].result, 18)).toFixed(2)
              ) : (
                <BouncingBalls />
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FairLaunchSwap;
