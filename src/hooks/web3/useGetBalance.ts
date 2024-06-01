import { useReadContracts, useAccount } from "wagmi"
import { allowedChains } from "../../constants/sideWide"

type BalanceProps = {
  address?: `0x${string}`
  abi?: readonly unknown[]
  functionName?: string
  args?: readonly unknown[]
  chainId?: number
}[]

function useGetBalance(balanceConfig: BalanceProps) {
  const { address: userAddress, chainId } = useAccount()

  let connectedWallet

  let balanceResult = {}
  let balanceMap = []
  balanceConfig.map((token) => {
    balanceResult[token.id] = { result: 0n, status: "failure" }
    balanceMap.push(token.id)
  })

  const isEnable = !!userAddress && !connectedWallet

  let balances = []

  const { data, refetch } = useReadContracts({
    contracts: balanceConfig,
    query: {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    },
  })
  if (data) {
    balanceMap.map((item, i) => {
      balanceResult[item] = data[i]
    })
  }

  return { balanceResult, refetch }
}

export default useGetBalance

// const getIsSufficientAllowance = (
//   allowanceOwned: bigint | undefined,
//   allowanceRequired: bigint
// ): boolean => {
//   return (
//     allowanceRequired === BigInt(0) ||
//     (!!allowanceOwned && allowanceOwned >= allowanceRequired)
//   );
// };

// export const useIsSufficientTokenBalance = ({
//   balanceRequired,
//   currencyAddress,
//   enabled,
//   watch,
//   contractToApprove,
//   network: propNetwork,
// }: Props) => {
//   const { address } = useAccount();
//   const urlNetwork = useUrlNetwork<EVM_NETWORKS>();
//   const network = propNetwork || urlNetwork || EVM_RESOLVED_NETWORK;
//   const isNativeCurrency =
//     !!currencyAddress && getIsNativeCurrency(currencyAddress);

//   const { tokenInfo } = getTokenInfo(currencyAddress, network);

//   const {
//     allowance,
//     isLoading: isLoadingAllowance,
//     isFetching: isFetchingAllowance,
//     isError: isErrorAllowance,
//     refetch: refetchAllowance,
//   } = useErc20Allowance({
//     enabled: enabled && !isNativeCurrency,
//     watch,
//     network,
//     tokenAddress: currencyAddress,
//     allowedAddress: contractToApprove,
//   });

//   const {
//     tokenBalanceRaw,
//     refetch: refetchTokenBalance,
//     isLoading: isLoadingTokenBalance,
//     isFetching: isFetchingTokenBalance,
//     isError: isErrorTokenBalance,
//   } = useFormattedTokenBalance({
//     tokenAddress: currencyAddress,
//     account: address,
//     network,
//     enabled: enabled && !isNativeCurrency,
//     watch,
//   });

//   const { data: balance, refetch: refetchNativeBalance } =
//     useNativeTokenBalance(
//       { account: address, network },
//       { watch: false, enabled: isNativeCurrency }
//     );

//   const tokenBalance = isNativeCurrency
//     ? balance?.value
//     : tokenBalanceRaw?.value;

//   const isSufficientAllowance = getIsSufficientAllowance(
//     allowance,
//     balanceRequired
//   );
//   const isSufficientBalance = getIsSufficientBalance(
//     tokenBalance,
//     balanceRequired
//   );
//   const parsedBalanceRequired =
//     formatUnitsToNumber(balanceRequired, tokenInfo?.decimals) ?? 0;

//   const isLoading = isLoadingAllowance || isLoadingTokenBalance;
//   // unlike isLoading, isFetching toggles when doing refetch
//   const isFetching = isFetchingAllowance || isFetchingTokenBalance;
//   const isError = isErrorAllowance || isErrorTokenBalance;

//   return {
//     parsedBalanceRequired,
//     isSufficientAllowance,
//     isSufficientBalance,
//     refetchAllowance,
//     refetchTokenBalance,
//     refetchNativeBalance,
//     isLoading,
//     isFetching,
//     isError,
//     tokenSymbol: tokenInfo?.symbol,
//   };
// };
