"use client"

import { FormEvent, useEffect, useState } from 'react'
import Product from './Product'
import Modal from './Modal'
import axios from 'axios'
import { toast } from 'react-toastify'
// import { addProduct } from '@/actions'

type TProducts = {
    id: string,
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


    const getProducts = async() => {
        const data = await axios.get("/api/product");
        return data.data
    }

    useEffect(() => {
        getProducts()
        .then(products => {
            setAllProducts(products)
            console.log(products);
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

    return (
        <section className='px-3 md:px-10 py-8 mt-10 overflow-x-hidden'>
            <div className='w-full mb-3 flex items-center justify-between px-1'>
                <h3 className='text-base font-semibold'>Featured Products</h3>
                <button className='rounded-lg py-2 px-4 bg-black text-gray-200 text-sm' onClick={handleShow}>Add Product</button>
            </div>
            <div className='grid md:grid-cols-4 gap-6 py-4'>
                {allProducts ? allProducts.length > 0 ? allProducts.map((item, index) => <Product item={item} key={index} />) : null: null}
            </div>
            <Modal visible={visible} toggleVisible={handleShow} upload={handleSubmit} pending={loading} />
        </section>
    )
}

export default AllProducts