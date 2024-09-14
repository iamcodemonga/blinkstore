// "use client"

import Navbtn from "./Navbtn"

// import React from 'react'
// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
// import { useWallet } from '@solana/wallet-adapter-react'

type Props = {}

const Navbar = () => {
    return (
        <>
            <nav className='flex w-full items-center justify-between px-3 md:px-10 py-5 fixed top-0 left-0 bg-white z-20'>
                <a href="/" className='font-black text-black md:text-2xl'>Blinkstore</a>
                {/* <div> */}
                    <Navbtn />
                {/* </div> */}
            </nav>
            <hr />
        </>
    )
}

export default Navbar