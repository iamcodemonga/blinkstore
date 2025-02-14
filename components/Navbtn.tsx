"use client"

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react'
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';

type Props = {}

const Navbtn = (props: Props) => {

    const { connected, publicKey } = useWallet();
    const walletBtnStyle = {
        padding: "5px 20px",
        fontSize: "12px",
        borderRadius: "5px",
        backgroundColor: "#111827"
    }

    const activeStyle = {
        padding: "0px 20px",
        fontSize: "12px",
        borderRadius: "5px",
        color: "black",
        backgroundColor: "#F1F5F9"
    }

    return (
        <div className='flex items-center space-x-3'>
            {/* {connected ? <a href="" className='text-sm'>Dashboard</a> : null} */}
            {connected ? <Dialog>
                <DialogTrigger asChild>
                    <button type="button" className='bg-[#111827] text-slate-100 py-[15px] lg:py-[13.5px] px-5 rounded-md text-sm flex items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mr-[6px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg><span className='hidden lg:block'>Upload</span></button>
                </DialogTrigger>
                <DialogContent className="max-w-[350px] sm:max-w-[425px] rounded-lg">
                    <DialogHeader>
                    <DialogTitle>Upload</DialogTitle>
                    </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className='w-full flex justify-center mb-5'>
                                <label htmlFor="thumbnail" className='cursor-pointer'>
                                    <div className='w-28 h-28 bg-slate-200 flex items-center rounded-md border border-slate-200'>
                                        <div className='w-full'>
                                            <div className='w-full flex justify-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                                </svg>
                                            </div>
                                            <p className='text-[10px] text-center'>Add thumbnail</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="file" name="thumbnail" id="thumbnail" className='hidden' />
                            </div>
                            <div>
                                <label htmlFor="document" className='text-xs text-slate-700'>Document</label>
                                <Input id='document' type='file' className='border-slate-800' />
                            </div>
                            <div>
                                <label htmlFor="title" className='text-xs text-slate-700'>Title</label>
                                <input type="text" name="" id="" className='border w-full rounded-md py-2 px-2 text-sm placeholder:text-sm border-slate-800' placeholder='Add title' />
                            </div>
                            <div>
                                <label htmlFor="title" className='text-xs text-slate-700'>Price (in SOL)</label>
                                <input type="number" name="" id="" className='border w-full rounded-md py-2 px-2 text-sm placeholder:text-sm border-slate-800' placeholder='Add price in SOL' />
                            </div>
                        </div>
                    <DialogFooter>
                    <button type="button" className='py-3 px-10 bg-gray-900 text-white rounded-md text-sm'>Submit</button>
                    </DialogFooter>
                </DialogContent>
            </Dialog> : null}
            <WalletMultiButton style={connected ? activeStyle : walletBtnStyle} >{!connected && "connect wallet"}</WalletMultiButton>
        </div>
    )
}

export default Navbtn