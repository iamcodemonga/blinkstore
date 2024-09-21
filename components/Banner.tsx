"use client"

import React, { useEffect, useState } from 'react'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useWallet } from '@solana/wallet-adapter-react'
import { toast } from 'react-toastify'
import axios from 'axios'
import Modal from './Modal'

type TProducts = {
    id: string,
    owner: string,
    image: string,
    title: string,
    description: string,
    price: number
}

const Banner = () => {

    const [ visible, setVisible ] = useState<boolean>(false)
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ allProducts, setAllProducts ] = useState<Array<TProducts>>([])

    const { connected } = useWallet();
    const walletBtnStyle = {
        padding: "20px 40px",
        fontSize: "14px",
        borderRadius: "200px",
        backgroundColor: "#e8e9eb",
        color: "black"
        // border: "2px solid indigo",
        // backgroundColor: "transparent"
      }

    const handleShow = () => {
        setVisible(prev => !prev)
        return;
    }

    const getProducts = async() => {
        const data = await axios.get("/api/product");
        return data.data
    }

    useEffect(() => {
        getProducts()
        .then(products => {
            setAllProducts(products)
            // console.log(products);
        })
    }, [])

    const handleSubmit = async({ owner, image, title, description, price }: {owner: string, image: string, title: string, description: string, price: number }) => {

        if (!image || !title || !description || !price) {
            toast.error("Please fill in all fields")
            return;
        }

        setLoading(true)
        try {
            const { data } = await axios.post("/api/product", { image, owner, title, description, price: Number(price) });
            setAllProducts((prev) => {
                return [ data.result, ...prev ]
            })
            toast.success("Product uploaded successfully")
            setVisible(false)
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
        return;
    }

    return (
        <header className='relative w-full h-[75vh] overflow-x-hidden'>
            <img src="https://plus.unsplash.com/premium_photo-1664475347754-f633cb166d13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="payment picture" className='w-full h-full object-cover' />
            <div  className='h-full w-full bg-black/60 absolute top-0 left-0 z-10 flex justify-center items-center'>
                <div className='px-5 md:w-3/5 space-y-7 flex flex-col items-center mt-36'>
                    <h1 className='text-2xl md:text-5xl font-bold text-white leading-[1.15] text-center'>Supercharge your product sales by creating and sharing blinks to your customers on digital platforms.</h1>
                    <div>
                        {connected ? <button className='rounded-full py-4 px-8 bg-[#e8e9eb] text-gray-700 font-bold text-xs' onClick={handleShow}>Add Product</button> : <WalletMultiButton style={walletBtnStyle}>{!connected && "Get started"}</WalletMultiButton>}
                    </div>
                </div>
            </div>
            <Modal visible={visible} toggleVisible={handleShow} upload={handleSubmit} pending={loading} />
        </header>
    )
}

export default Banner