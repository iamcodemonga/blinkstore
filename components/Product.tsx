"use client"

import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Product = ({ item }: { item: { _id: string, image: string, title: string, description: string, price: number }}) => {
    const [copied, setCopied] = useState(false);
    const actionlink = `${process.env.NEXT_PUBLIC_ROOTURL}/api/actions?id=${item._id}`;
    const link = `${process.env.NEXT_PUBLIC_ROOTURL}/productblink/${item._id}`;

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
        <div className='border p-2'>
            <div className='mb-3'>
                <Link href={`/productblink/${item._id}`}><img src={item.image} className='w-full aspect-[3/4] object-cover' /></Link>
            </div>
            <Link href={`/productblink/${item._id}`} className='font-bold text-base mb-1 block'>{item.title}</Link>
            <p className='text-sm text-gray-500 mb-4'>{item.description}</p>
            <div className='w-full flex justify-between items-center'>
                <span className='text-xs text-green-500 font-semibold'>{item.price}SOL</span>
                <button className='py-2 px-4 bg-green-500 rounded-full text-xs text-gray-800 hover:bg-gray-800 hover:text-white' onClick={async() => await copyToClipboard(actionlink)}>{copied ? "Copied" : "Copy blink"}</button>
            </div>
        </div>
    )
}

export default Product