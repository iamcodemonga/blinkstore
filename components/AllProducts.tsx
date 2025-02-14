"use client"

import { FormEvent, useEffect, useState } from 'react'
import Product from './Product'
import Modal from './Modal'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useWallet } from '@solana/wallet-adapter-react'
import ProductLoader from './loader/Product'
import Navbtn from './Navbtn'
// import { addProduct } from '@/actions'

type TProducts = {
    _id: string,
    owner: string,
    image: string,
    title: string,
    description: string,
    price: number
}

const AllProducts = () => {
    const [ visible, setVisible ] = useState<boolean>(false)
    const [ allProducts, setAllProducts ] = useState<Array<TProducts>>([])
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ pending, setPending ] = useState<boolean>(true)
    const [ limit, setLimit ] = useState<number>(12)
    const { connected, publicKey } = useWallet();
    // console.log(publicKey);
    


    const getProducts = async() => {
        setPending(true)
        try {
            const data = await axios.get("/api/product");
            setPending(false)
            return data.data
        } catch (error) {
            console.log(error);
        }
        setPending(false)
    }

    useEffect(() => {
        getProducts()
        .then(products => {
            setAllProducts(products)
        })
    }, [])

    const handleSubmit = async({ owner, image, title, description, price }: {owner: string, image: string, title: string, description: string, price: number }) => {

        if (!publicKey) {
            toast.error("Wallet is not connected!")
            return;
        }

        if (!image || !title || !description || !price) {
            toast.error("Please fill in all fields")
            return;
        }

        setLoading(true)
        try {
            const { data } = await axios.post("/api/product", { image, owner: publicKey, title, description, price: Number(price) });
            setAllProducts((prev) => {
                return [ data.result, ...prev ]
            })
            toast.success("Product uploaded successfully")
            setVisible(false)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
        return;
    }

    const handleShow = () => {
        setVisible(prev => !prev)
        return;
    }

    const handleMore = () => {
        setLimit(prev => prev+4)
        return;
    }

    return (
        <>
            <main className='w-full overflow-x-hidden ml-14 pr-2 lg:pr-1 lg:pl-4 hidde orders'>
                <nav className='flex w-full items-center justify-end lg:pr-2 py-5 absolute top-0 right-2 bg-transparent z-20'>
                    <Navbtn />
                </nav>
                <section className='py-24 allorders-section hidde'>
                    <h3 className='text-xl lg:text-2xl mb-3 lg:mb-6 text-center lg:text-left'>All Products</h3>
                    <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-6 gap-x-2 lg:gap-x-5 lg:gap-y-8 py-4'>
                        {/* {allProducts ? allProducts.length > 0 ? allProducts.map((item, index) => <Product item={item} key={index} />) : null: null} */}
                        {!pending ? allProducts ? allProducts.length > 0 ? allProducts.slice(0, limit).map((item, index) => <Product item={item} key={index} />) : null: null : [1,2,3,4,5,6,7,8].map((item, index) => <ProductLoader key={index} />)}
                        {/* {pending ? } */}
                    </div>
                    <div className='w-full flex justify-center mt-14 lg:mt-24'>
                        {limit <= allProducts.length ? <button type="button" className='rounded-md px-7 py-3 bg-gray-800 text-white' onClick={() => handleMore()}>Load more</button> : null}
                    </div>
                </section>
            </main>
            <section className='px-3 md:px-10 py-8 mt-10 overflow-x-hidden hidden'>
                <div className='w-full mb-1 flex items-center justify-between px-1'>
                    <h3 className='text-base font-semibold'>Featured Products</h3>
                    {connected ? <button className='rounded-full py-3 px-7 bg-black text-gray-200 text-xs' onClick={handleShow}>Add Product</button> : null}
                </div>
                
                
                <Modal visible={visible} toggleVisible={handleShow} upload={handleSubmit} pending={loading} />
            </section>
        </>
    )
}

export default AllProducts