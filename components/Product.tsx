"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Product = ({ item }: { item: { _id: string, image: string, title: string, description: string, price: number }}) => {
    const [copied, setCopied] = useState(false);
    const link = `${process.env.NEXT_PUBLIC_ROOT}/api/actions/product?id=${item._id}`;
    const dialtoLink = `https://dial.to/developer?url=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Factions%2Fproduct%3Fid%${item._id}&cluster=devnet`

    const copyToClipboard = async (text: string) => {
        try {
          await navigator.clipboard.writeText(text);
          toast.success("Blink copied successfully!")
          setCopied(true);
          setTimeout(() => {
            setCopied(false)
        }, 2000); // Reset copied state after 2 seconds
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      };

    return (
        <div className='border p-2 space-y-3'>
            <div>
                <img src={item.image} className='w-full aspect-[3/4] object-cover' />
            </div>
            <h1 className='font-bold text-base'>{item.title}</h1>
            <p className='text-sm text-gray-500'>{item.description}</p>
            <div className='w-full flex justify-between items-center'>
                <span className='text-xs text-green-500 font-semibold'>{item.price}SOL</span>
                <button className='py-2 px-4 bg-green-500 rounded-full text-xs text-gray-800 hover:bg-gray-800 hover:text-white' onClick={async() => await copyToClipboard(link)}>{copied ? "Copied" : "Copy blink"}</button>
            </div>
        </div>
    )
}

export default Product