import { useReadContracts, useAccount } from "wagmi"
import {
  web3Addresses2,
  stablesArray,
  platformCoreArray,
  tokenStrategiesArray,
  erc20PlatformArray,
  allowedChains,
} from "../../constants/sideWide"

import {
  formatUnits,
  numberToHex,
  maxUint256,
  erc20Abi,
  parseUnits,
} from "viem"
import { erc20Config } from "../../constants/balancesConfig"

type BalanceProps = {
  address?: `0x${string}`
  abi?: readonly unknown[]
  functionName?: string
  args?: readonly unknown[]
  chainId?: number
  id?: String
}[]

function useGetBalance(readConfig = "erc20Platform", additionalConfig = []) {
  const { address: userAddress, chainId } = useAccount()

  ////////////////////////////////////
  // console.log(web3Addresses2[chainId])
  // console.log(chainId)
  let currentChainId = 1337
  if (!chainId || !allowedChains.includes(chainId)) {
    currentChainId = allowedChains[0]
  } else {
    currentChainId = chainId
  }
  let balancesConfig: BalanceProps = []

  switch (readConfig) {
    case "erc20Platform":
      erc20PlatformArray.map((item) => {
        balancesConfig.push({
          address: web3Addresses2[currentChainId][item.address],
          ...erc20Config,
          args: [userAddress],
          id: item.id,
        })
      })
      break
    case "stables":
      console.log(stablesArray)
      break
    case "platformCore":
      console.log(platformCoreArray)
      break
    case "tokenStrategies":
      console.log(tokenStrategiesArray)
      break
  }

  // const balancesConfig =

  // let balancesToGet = []

  // collateralsAvailable.map((collateral) => {
  //   balancesToGet.push({
  //     address: collateral.address,
  //     ...balancesConfig,
  //   })
  // })

  ///////////////////////////////////

  additionalConfig.map((item) => {
    balancesConfig.push(item)
  })

  let connectedWallet

  let balanceResult = {}
  let balanceMap = []

  balancesConfig.map((token) => {
    balanceResult[token.id] = { result: 0n, status: "failure" }
    balanceMap.push(token.id)
  })

  // console.log(balancesConfig)
  // console.log("balanceConfig", balanceConfig)

  // tConfig[0].functionName = balancesConfig[0].functionName

  const isEnable = !!userAddress && !connectedWallet

  let balances = []

  const { data, refetch } = useReadContracts({
    contracts: balancesConfig,
    query: {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    },
  })

  // console.log(data)

  if (data) {
    balanceMap.map((item, i) => {
      balanceResult[item] = data[i]
    })
  }

  // console.log(balanceResult)

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
