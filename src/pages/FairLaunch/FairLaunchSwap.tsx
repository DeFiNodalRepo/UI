import { useState } from "react";
import { useWriteContract, useReadContracts } from "wagmi";
import dnodABI from "../../abi/TokenExchange.json";
import { parseUnits, numberToHex, maxUint256, erc20Abi } from "viem";
import { sDNODAddress } from "../../constants/sdnod";

function FairLaunchSwap({ userAddress, chainId }) {
  const [inputValue, setInputValue] = useState("");
  const { data: writeHash, isPending, writeContract } = useWriteContract();
  const maxAllowance = numberToHex(maxUint256);

  const getSDNODBalanceConfiq = {
    address: "0xb0e77224e214e902dE434b51125a775F6339F6C9",
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [userAddress],
  } as const;

  const readResult = useReadContracts({
    contracts: [getSDNODBalanceConfiq],
  });

  console.log(readResult.data);

  const handleGetDNOD = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    writeContract({
      address: "0x8c49AFcEBFEA804d307a8068e4112b25E3a79d05",
      abi: dnodABI,
      functionName: "exchange",
      args: [inputValue],
    });
    console.log(inputValue);
  };

  return (
    <form className="flex justify-center my-5 h-40" onSubmit={handleGetDNOD}>
      <div className="bg-main  py-2 px-4 rounded-md border border-main w-4/5 sm:w-1/3 flex flex-col items-center">
        <input
          type="text"
          name="amount"
          placeholder="0.0"
          className="w-5/6 rounded-md dark:bg-boxdark-2 px-4 py-2 mt-6"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="w-5/6 rounded-md bg-boxdark-2 px-4 py-2 mt-4  text-white text-bold"
          type="submit"
        >
          Get DNOD
        </button>
      </div>
    </form>
  );
}

export default FairLaunchSwap;
