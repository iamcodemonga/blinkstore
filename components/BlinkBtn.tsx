"use client"

import React, { useState } from 'react'
import { toast } from 'react-toastify';

type Props = {
    id: string
}

const BlinkBtn = ({ id }: Props) => {

    const [copied, setCopied] = useState(false);
    const link = `${process.env.NEXT_PUBLIC_ROOTURL}/api/actions/product/${id}`;

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
        <button className=' w-full py-5 bg-gray-900 rounded-full text-sm text-gray-300 hover:bg-gray-800 hover:text-white' onClick={async() => await copyToClipboard(link)}>{copied ? "Copied" : "Copy blink"}</button>
    )
}

export default BlinkBtn