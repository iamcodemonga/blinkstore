import axios from 'axios';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import React from 'react'

const BlinkBtn = dynamic(() => import('@/components/BlinkBtn'));
const Navbar = dynamic(() => import('@/components/Navbar'));

type Pageprops  = {
    params: {
        productid: string;
    }
}

async function fetchProductDetails(productid: string) {
    // const response = await axios(`${process.env.ROOTURL}/api/product/${productid}`);
    const response = await fetch(`${process.env.ROOTURL}/api/product/${productid}`, {
        headers: {
          'Content-Type': 'application/json',
        //   'X-Action-Version': '2.1.3',
          'X-Blockchain-Ids': 'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
        }
    });
    return response.json();
}

export async function generateMetadata({ params }: { params: { productid: string } }): Promise<Metadata> {
    const productDetails = await fetchProductDetails(params.productid);

    if (!productDetails._id) {
        notFound();
    }
  
    return {
      title: `${productDetails.title}`,
      openGraph: {
        title: productDetails.title,
        images: productDetails.image,
        type: 'website',
        description: productDetails.description,
        url: `https://blinkstore.shop/productblink/${productDetails._id}`,
        siteName: 'blinkstore',
      },
    };
  }

const page = async({ params }: Pageprops) => {
    const productDetails = await fetchProductDetails(params.productid);

    if (!productDetails._id) {
        notFound();
    }

    return (
        <>
        <Navbar />
        <section className='w-full px-3 lg:px-10 lg:my-36'>
            <div className='grid lg:grid-cols-2 items-center gap-y-10'>
                <div className='w-full h-fill bg-red-5 flex justify-center'>
                    <img className="w-full lg:w-1/2 aspect-[3/4] object-cover" src={`${productDetails.image}`} alt="product image" />
                    {/* <Image
                        className="w-full lg:w-1/2 aspect-[3/4] object-cover"
                        src={productDetails.image}
                        alt="Product Image"
                        width={300}  // Use appropriate width
                        height={400} // Use appropriate height
                        priority // Optional: Use this if the image is critical
                    /> */}

                </div>
                <div className='w-full h-full bg-blue-5 self-center flex items-center justify-center'>
                    <div>
                        <h1 className='text-3xl font-black mb-3'>{productDetails.title}</h1>
                        <p className='text-green-500 text-sm font-semibold mb-3'>{productDetails.price}SOL</p>
                        <p className='text-gray-700 mb-7'>{productDetails.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur incidunt ullam animi consequatur dolorum, nisi, adipisci molestias quidem a magnam ut quo enim numquam saepe, dolor laborum quibusdam ipsa quaerat.</p>
                        <BlinkBtn id={productDetails._id} />
                    </div>
                </div>
            </div>
        </section>
        <footer className="w-full flex justify-center items-center py-20 bg-gray-900 mt-5">
            <div className="space-y-2">
              <h4 className="text-sm text-center text-white">Developed by team <a href="https://codemonga.netlify.app" className="text-green-500 text-base font-bold">@codemonga</a></h4>
              <p className="text-center text-xs text-gray-200">blinkstore 2024</p>
            </div>
        </footer>
      </>
    )
}

export default page