import { createWeb3Modal } from "@web3modal/wagmi/react"
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config"
import { WagmiProvider } from "wagmi"
import { arbitrum, mainnet, polygon } from "wagmi/chains"
import { defineChain } from "viem"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { web3Addresses } from "../constants/sideWide"

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "58094706d860ca5b24afd1d430cdae34"

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
}

// Test Chain
const testchain = defineChain({
  id: 1337,
  name: "Test Chain",
  nativeCurrency: { name: "Teth", symbol: "TETH", decimals: 18 },

  network: "testchain",
  iconBackground: "#fff",
  // blockExplorers: {
  //   default: { name: 'Etherscan', url: 'https://etherscan.io' },
  // },
  rpcUrls: {
    public: { http: ["http://127.0.0.1:8545"] },
    default: { http: ["http://127.0.0.1:8545"] },
  },

  contracts: {
    multicall3: {
      address: web3Addresses.multicall3Address,
    },
  },
  testnet: true,
})

const chains = [mainnet, testchain, arbitrum, polygon] as const
const config = defaultWagmiConfig({
  chains, // required
  projectId, // required
  metadata, // required
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  themeVariables: {
    "--w3m-color-mix": "#3f3f46",
    "--w3m-color-mix-strength": 40,
    "--w3m-accent": "#1A222C",
  },
})

export function Web3ModalProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </WagmiProvider>
  )
}
