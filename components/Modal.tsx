"use client"

import { useState } from 'react'

type Props = {
    visible: boolean,
    toggleVisible: () => void
    upload: ({ owner, image, title, description, price }: {owner: string, image: string, title: string, description: string, price: number }) => void
    pending: boolean
}

const Modal = ({ visible, toggleVisible, upload, pending }: Props) => {

    const [ image, setImage ] = useState<string>("")
    const [ title, setTitle ] = useState<string>("")
    const [ description, setDescription ] = useState<string>("")
    const [ price, setPrice ] = useState<string>("")

    const handleBgClick = (e: any) => {
        if (e.target.id == "modal") {
            toggleVisible()
        }
        return;
    }

    return (
        <div className={`bg-black/70 z-30 w-full h-full ${visible ? "flex justify-center items-center fixed top-0 left-0" : "hidden"}`} id='modal' onClick={handleBgClick}>
            <div className='w-[500px] rounded-lg bg-white pb-20 pt-10 px-4'>
                <div>
                    <div className='w-full flex justify-end mb-10'>
                        <button type="button" className='flex items-center text-gray-400' onClick={toggleVisible}>
                        close <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <h1 className='mb-7 font-bold text-xl'>Upload Product</h1>
                    <form action="" onSubmit={(e) => {
                            e.preventDefault()
                            upload({ owner: "codemonga", image, title, description, price: Number(price) })
                            setImage("")
                            setTitle("")
                            setDescription("")
                            setPrice("")
                        }}>
                        <div className='mb-3'>
                            <label htmlFor="" className='text-xs ml-1 text-gray-600'>Product url (image)</label>
                            <input type="text" className='w-full py-4 px-3 mt-1 bg-gray-200 outline-none rounded-lg text-sm' name="" id="" placeholder='Add your product image url' value={image} onChange={(e) => setImage(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="" className='text-xs ml-1 text-gray-600'>Title</label>
                            <input type="text" className='w-full py-4 px-3 mt-1 bg-gray-200 outline-none rounded-lg text-sm' name="" id="" placeholder='Add product title' value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="" className='text-xs ml-1 text-gray-600'>Description</label>
                            <textarea name="" id="" className='w-full py-4 px-3 mt-1 bg-gray-200 outline-none rounded-lg text-sm' placeholder='Add product description' rows={4} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className='mb-7'>
                            <label htmlFor="" className='text-xs ml-1 text-gray-600'>Price (SOL)</label>
                            <input type="number" className='w-full py-4 px-3 mt-1 bg-gray-200 outline-none rounded-lg text-sm' name="" id="" placeholder='Add price (in solana)' value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className=''>
                            <button type="submit" className='w-full py-6 bg-black rounded-lg text-white text-sm' disabled={pending}>{pending ? "uploading" : "submit"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal