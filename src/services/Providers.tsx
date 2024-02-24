import '@rainbow-me/rainbowkit/styles.css';
import '../polyfills';

import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { myCustomTheme } from './RainbowKitTheme';
import { useMemo } from 'react';

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  // projectId: process.env.REACT_PUBLIC_WALLET_CONNECT_ID,
  projectId: '58094706d860ca5b24afd1d430cdae34',
  chains: [mainnet, polygon],
});

const queryClient = new QueryClient();

function Providers({ children }: any) {
  const theme = useMemo(() => myCustomTheme, []);
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={theme} showRecentTransactions={true}>
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}

export default Providers;
