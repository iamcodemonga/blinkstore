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
        <div className='borde flex flex-col justify-between'>
            <div className='mb-2'>
                <Link href={`/productblink/${item._id}`} className='hover:zoom-in-150'><img src={item.image} className='w-full aspect-square object-cover rounded-t-lg hover:zoom-in-150' /></Link>
                <Link href={`/productblink/${item._id}`} className='text-xs lg:text-base block mt-3'>{item.title}</Link>
                <span className='text-[10px] lg:text-sm text-green-500'>{item.price}SOL</span>
            </div>
            {/* <p className='text-sm text-gray-500 mb-4'>{item.description}</p> */}
            <div className='w-full lg:fle justify-between items-center space-y-2 lg:space-y-0'>
                <button className='py-3 w-full px-4 bg-slate-900 rounded-md text-xs text-gray-200 hover:bg-gray-800 hover:text-white' onClick={async() => await copyToClipboard(actionlink)}>{copied ? "Copied" : "Copy Blink"}</button>
            </div>
        </div>
    )
}

export default Product