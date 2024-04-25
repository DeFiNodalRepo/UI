import { useAccount, useReadContract } from "wagmi";
import { erc20Abi } from "viem";
import { allowedChains } from "../../constants/sideWide";

type AllowanceProps = {
  tokenAddress?: `0x${string}`;
  allowanceAddress?: `0x${string}`;
  enabled?: boolean;
};

export const useErc20Allownce = ({
  tokenAddress,
  allowanceAddress,
  enabled,
}: AllowanceProps) => {
  const { address: userAddress, chainId } = useAccount();
  let notConnectedWallet;
  if (!chainId || !allowedChains.includes(chainId)) {
    notConnectedWallet = true;
  }
  const isEnabled = !!userAddress && !!allowanceAddress && !notConnectedWallet;

  const {
    data: allowance,
    isLoading,
    isFetching,
    isError,
    isSuccess,
    refetch: refetchAllowance,
  } = useReadContract({
    chainId,
    address: tokenAddress ? tokenAddress : undefined,
    args: isEnabled ? [userAddress, allowanceAddress] : undefined,
    abi: erc20Abi,
    functionName: "allowance",
    query: { enabled: isEnabled },
  });

  // enebled basically refetched the allowance (readcontract)

  const refetch = enabled ? refetchAllowance : undefined;

  return {
    isLoading,
    isFetching,
    isSuccess,
    isError,
    allowance,
    refetch,
  };
};
