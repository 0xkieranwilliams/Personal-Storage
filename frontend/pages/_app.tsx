import { SessionProvider } from "next-auth/react"
import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultConfig, RainbowKitProvider, } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { filecoinCalibration, } from 'wagmi/chains';
import { QueryClientProvider, QueryClient, } from "@tanstack/react-query";

import "./styles.css"

import type { AppProps } from "next/app"
import type { Session } from "next-auth"

const config = getDefaultConfig({
  appName: 'Human Storage',
  projectId: 'c9353e5f0c7c9fa3e481b04bb9943f8c',
  chains: [filecoinCalibration],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <RainbowKitProvider>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </SessionProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
