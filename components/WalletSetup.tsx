"use client"

import { ReactNode, useMemo } from 'react'
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css';

export default function WalletSetup ({ children }: { children: ReactNode}) {
    const network = WalletAdapterNetwork.Devnet;
    const endPoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = useMemo(() => [], [])

    return (<ConnectionProvider endpoint={endPoint}>
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                {children}
            </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>)
}