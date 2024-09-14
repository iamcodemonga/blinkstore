"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const ProductLoader = () => {

    return (
        <div className='border p-2 space-y-3'>
            <div>
                <div className='w-full aspect-[3/4] bg-gray-300'></div>
            </div>
            <div className='w-4/5 h-5 bg-gray-300 rounded-full'></div>
            <div className='w-full h-3 bg-gray-300 rounded-full'></div>
            <div className='w-full h-3 bg-gray-300 rounded-full'></div>
            <div className='w-1/2 h-3 bg-gray-300 rounded-full'></div>
            <div className='w-full flex justify-between items-center'>
                <div className='w-20 h-5 bg-gray-300 rounded-full'></div>
                <div className='w-28 h-9 bg-gray-300 rounded-full'></div>
            </div>
        </div>
    )
}

export default ProductLoader