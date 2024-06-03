export const allowedChains = [1337]

export const web3Addresses = {
  dnod: "0x8c49AFcEBFEA804d307a8068e4112b25E3a79d05",
  sdnod: "0xb0e77224e214e902dE434b51125a775F6339F6C9",
  boardroomAddress: "0x43F287703Ff12699BfE4916A0C7A072d7759A3EA",
  multicall3Address: "0x354d452E708E8B8fEFafA6504c08402BEaFee775",
  collectionAppAddress: "0x18889258eCA82913042278D1B0Eba9082823Ff7F",
  Swapperaddress: "0x36cEC84AC86195e91FCCe43E3f07751ACaBB1e31",
}

export const web3Addresses2 = {
  1: {
    dnod: "0x8c49AFcEBFEA804d307a8068e4112b25E3a79d05",
    sdnod: "0xb0e77224e214e902dE434b51125a775F6339F6C9",
    usdc: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    usdt: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    dai: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    boardroomAddress: "0x43F287703Ff12699BfE4916A0C7A072d7759A3EA",
    multicall3Address: "0x354d452E708E8B8fEFafA6504c08402BEaFee775",
    collectionAppAddress: "0x18889258eCA82913042278D1B0Eba9082823Ff7F",
    Swapperaddress: "0x36cEC84AC86195e91FCCe43E3f07751ACaBB1e31",
  },
  24: {
    dnod: "0x8c49AFcEBFEA804d307a8068e4112b25E3a79d05",
    sdnod: "0xb0e77224e214e902dE434b51125a775F6339F6C9",
    usdc: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    usdt: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    dai: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    boardroomAddress: "0x43F287703Ff12699BfE4916A0C7A072d7759A3EA",
    multicall3Address: "0x354d452E708E8B8fEFafA6504c08402BEaFee775",
    collectionAppAddress: "0x18889258eCA82913042278D1B0Eba9082823Ff7F",
    Swapperaddress: "0x36cEC84AC86195e91FCCe43E3f07751ACaBB1e31",
  },
  1337: {
    dnod: "0x8c49AFcEBFEA804d307a8068e4112b25E3a79d05",
    sdnod: "0xb0e77224e214e902dE434b51125a775F6339F6C9",
    usdc: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    usdt: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    dai: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    boardroomAddress: "0x43F287703Ff12699BfE4916A0C7A072d7759A3EA",
    multicall3Address: "0x354d452E708E8B8fEFafA6504c08402BEaFee775",
    collectionAppAddress: "0x18889258eCA82913042278D1B0Eba9082823Ff7F",
    Swapperaddress: "0x36cEC84AC86195e91FCCe43E3f07751ACaBB1e31",
  },
}

export const stablesArray = ["usdc", "usdt", "dai"]
export const erc20PlatformArray = [
  { address: "sdnod", id: "sdnod" },
  { address: "dnod", id: "dnod" },
]
export const platformCoreArray = [
  { address: "boardroomAddress", id: "totalDnodBalance" },
]
export const tokenStrategiesArray = ["eth-usdc"]

export const collateralSelection = {
  1: [
    {
      name: "USDC",
      icon: "https://raw.githubusercontent.com/cucuy555/cryptoIcons/main/tokens/usdc.svg",
      address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      numberOfDecimals: 6,
    },
    {
      name: "USDT",
      icon: "https://raw.githubusercontent.com/cucuy555/cryptoIcons/main/tokens/usdc.svg",
      address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      numberOfDecimals: 6,
    },
    {
      name: "DAI",
      icon: "https://raw.githubusercontent.com/cucuy555/cryptoIcons/main/tokens/dai.svg",
      address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
      numberOfDecimals: 18,
    },
  ],
  24: [
    {
      name: "USDC",
      icon: "https://raw.githubusercontent.com/cucuy555/cryptoIcons/main/tokens/usdc.svg",
      address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      numberOfDecimals: 6,
    },
    {
      name: "USDT",
      icon: "https://raw.githubusercontent.com/cucuy555/cryptoIcons/main/tokens/usdc.svg",
      address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      numberOfDecimals: 6,
    },
    {
      name: "DAI",
      icon: "https://raw.githubusercontent.com/cucuy555/cryptoIcons/main/tokens/dai.svg",
      address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
      numberOfDecimals: 18,
    },
  ],

  1337: [
    {
      name: "USDC",
      icon: "https://raw.githubusercontent.com/cucuy555/cryptoIcons/main/tokens/usdc.svg",
      address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      numberOfDecimals: 6,
    },
    {
      name: "USDT",
      icon: "https://raw.githubusercontent.com/cucuy555/cryptoIcons/main/tokens/usdc.svg",
      address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      numberOfDecimals: 6,
    },
    {
      name: "DAI",
      icon: "https://raw.githubusercontent.com/cucuy555/cryptoIcons/main/tokens/dai.svg",
      address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
      numberOfDecimals: 18,
    },
  ],
}

// collatrealList ={
//   1337:['USDC','USDT']
// }
// tokenDealti.item.icon
// tokenDealti.item.numberOf Decimals
export const sDNODAddress = "0xb0e77224e214e902dE434b51125a775F6339F6C9"
