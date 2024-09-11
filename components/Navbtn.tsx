"use client"

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react'
import React from 'react'

type Props = {}

const Navbtn = (props: Props) => {

    const { connected, publicKey } = useWallet();
    const walletBtnStyle = {
        padding: "0 20px",
        fontSize: "14px",
        borderRadius: "10px"
    }

    return (
        <WalletMultiButton style={walletBtnStyle} ></WalletMultiButton>
    )
}

export default Navbtn