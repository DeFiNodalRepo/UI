import { useReadContracts } from "wagmi";
import { collateralSelection } from "../constants/sdnod";
import { useAccount } from "wagmi";
import { erc20Abi } from "viem";

interface Collateral {
  name: string;
  icon: string;
  address: string;
}

export default function useGetStableBalances() {
  const { address: userAddress, chainId } = useAccount();

  const balancesConfig = {
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [userAddress],
  };

  let ballancesToGet = [];

  const collBalanceOfConfig = {
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [userAddress],
    chainId: chainId,
  } as const;
  if (chainId) {
    collateralSelection[chainId].map((coll: Collateral) => {
      collBallances.push({ address: coll.address, ...collBalanceOfConfig });
    });

    const result = useReadContracts({
      contracts: collBallances,
    });
    return result;
  } else {
    console.log("no chainId");
  }
}
