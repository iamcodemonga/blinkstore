"use client"

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react'
import React from 'react'

type Props = {}

const Navbtn = (props: Props) => {

    const { connected, publicKey } = useWallet();
    const walletBtnStyle = {
        padding: "5px 30px",
        fontSize: "12px",
        borderRadius: "200px",
        backgroundColor: "#313638"
    }

    return (
        <div className='flex items-center space-x-5'>
            {/* {connected ? <a href="" className='text-sm'>Dashboard</a> : null} */}
            <WalletMultiButton style={walletBtnStyle} >{!connected && "connect wallet"}</WalletMultiButton>
        </div>
    )
}

export default Navbtn