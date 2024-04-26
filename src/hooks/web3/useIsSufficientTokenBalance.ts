type Props = {
  balanceRequired: bigint;
  currencyAddress?: EthereumAddress;
  enabled?: boolean;
  watch?: boolean;
  network?: EVM_NETWORKS;
  contractToApprove?: EthereumAddress;
};

const getIsSufficientAllowance = (
  allowanceOwned: bigint | undefined,
  allowanceRequired: bigint
): boolean => {
  return (
    allowanceRequired === BigInt(0) ||
    (!!allowanceOwned && allowanceOwned >= allowanceRequired)
  );
};

export const useIsSufficientTokenBalance = ({
  balanceRequired,
  currencyAddress,
  enabled,
  watch,
  contractToApprove,
  network: propNetwork,
}: Props) => {
  const { address } = useAccount();
  const urlNetwork = useUrlNetwork<EVM_NETWORKS>();
  const network = propNetwork || urlNetwork || EVM_RESOLVED_NETWORK;
  const isNativeCurrency =
    !!currencyAddress && getIsNativeCurrency(currencyAddress);

  const { tokenInfo } = getTokenInfo(currencyAddress, network);

  const {
    allowance,
    isLoading: isLoadingAllowance,
    isFetching: isFetchingAllowance,
    isError: isErrorAllowance,
    refetch: refetchAllowance,
  } = useErc20Allowance({
    enabled: enabled && !isNativeCurrency,
    watch,
    network,
    tokenAddress: currencyAddress,
    allowedAddress: contractToApprove,
  });

  const {
    tokenBalanceRaw,
    refetch: refetchTokenBalance,
    isLoading: isLoadingTokenBalance,
    isFetching: isFetchingTokenBalance,
    isError: isErrorTokenBalance,
  } = useFormattedTokenBalance({
    tokenAddress: currencyAddress,
    account: address,
    network,
    enabled: enabled && !isNativeCurrency,
    watch,
  });

  const { data: balance, refetch: refetchNativeBalance } =
    useNativeTokenBalance(
      { account: address, network },
      { watch: false, enabled: isNativeCurrency }
    );

  const tokenBalance = isNativeCurrency
    ? balance?.value
    : tokenBalanceRaw?.value;

  const isSufficientAllowance = getIsSufficientAllowance(
    allowance,
    balanceRequired
  );
  const isSufficientBalance = getIsSufficientBalance(
    tokenBalance,
    balanceRequired
  );
  const parsedBalanceRequired =
    formatUnitsToNumber(balanceRequired, tokenInfo?.decimals) ?? 0;

  const isLoading = isLoadingAllowance || isLoadingTokenBalance;
  // unlike isLoading, isFetching toggles when doing refetch
  const isFetching = isFetchingAllowance || isFetchingTokenBalance;
  const isError = isErrorAllowance || isErrorTokenBalance;

  return {
    parsedBalanceRequired,
    isSufficientAllowance,
    isSufficientBalance,
    refetchAllowance,
    refetchTokenBalance,
    refetchNativeBalance,
    isLoading,
    isFetching,
    isError,
    tokenSymbol: tokenInfo?.symbol,
  };
};
