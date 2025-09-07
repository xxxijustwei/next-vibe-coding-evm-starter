"use client";

import "@rainbow-me/rainbowkit/styles.css";
import {
  Locale,
  RainbowKitProvider,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { WagmiProvider } from "wagmi";
import { mainnet } from "wagmi/chains";

const config = getDefaultConfig({
  appName: "My vibe coding evm starter",
  projectId: process.env.WALLET_CONNECT_PROJECT_ID ?? "",
  chains: [mainnet],
  ssr: true,
});

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const locale = useLocale();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact" locale={locale as Locale}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
