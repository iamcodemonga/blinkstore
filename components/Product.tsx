"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = ({ item }: { item: { id: string, image: string, title: string, description: string, price: number }}) => {

    return (
        <div className='border p-2 space-y-3'>
            <div>
                <img src={item.image} className='w-full aspect-[3/4] object-cover' />
            </div>
            <h1 className='font-bold text-base'>{item.title}</h1>
            <p className='text-sm text-gray-500'>{item.description}</p>
            <div className='w-full flex justify-between items-center'>
                <span className='text-sm text-green-500 font-semibold'>{item.price}SOL</span>
                <button className='py-2 px-4 bg-green-500 rounded-lg text-sm text-gray-800 font-semibold hover:bg-green-700 hover:text-white'>Copy blink</button>
            </div>
        </div>
    )
}

export default Product