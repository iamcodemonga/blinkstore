import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <section className='w-full flex justify-center items-center h-screen'>
        <div className="fixed top-0 left-0 -z-10 h-full w-full">
          <div className="relative h-full w-full bg-transparent">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          </div>
        </div>
        <nav className='fixed top-0 left-0 w-full flex justify-between items-center px-5 py-5'>
            <Link href={"/"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </Link>
            <div className="flex items-center space-x-5 mr-5">
                <Link href={"/login"} className="text-sm hover:underline">Login</Link>
                <Link href={"/signup"} className="px-8 py-3 rounded-full bg-sky-500 text-sm">Signup</Link>
            </div>
        </nav>
        <div>
            <form className='borde py-7 px-5 w-72  space-y-7 rounded-lg'>
                <h1 className='text-center text-2xl text-sky-500'>Signup</h1>
                <div className='space-y-5'>
                    <div>
                        <label htmlFor="brandname" className='block text-xs text-gray-600 mb-1 ml-1'>Brand(Business) Name</label>
                        <input type="text" name="brandname" id="brandname" placeholder='e.g mcdonalds' className='px-2 py-[6px] border-[1.5px] rounded-md border-gray-900 text-sm w-full' />
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-xs text-gray-600 mb-1 ml-1'>Email</label>
                        <input type="email" name="email" id="email" placeholder='e.g mcdonalds@gmail.com' className='px-2 py-[6px] border-[1.5px] rounded-md border-gray-900 text-sm w-full' />
                    </div>
                    <div>
                        <div className='mb-[5px] flex w-full justify-between items-center px-1'>
                            <label htmlFor="password" className='block text-xs text-gray-600'>Password</label>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </button>
                        </div>
                        <input type="password" name="password" id="password" placeholder='xxxxxxxxxxxx' className='px-2 py-[6px] border-[1.5px] rounded-md border-gray-900 text-sm w-full' />
                    </div>
                    <div className="flex items-center space-x-2 ml-1">
                        <input type="checkbox" name="terms" id="terms" checked className='border-2' />
                        <label htmlFor="terms" className='block text-xs text-gray-600'>I agree with all the <Link href={'/'} className='underline'>terms and conditions</Link></label>
                    </div>
                    {/* <small className='block text-gray-500 text-center text-[10px]'>By signing up, you have agreed to all our terms and conditions!</small> */}
                </div>
                <div className='w-full flex justify-center'>
                    <button type='submit' className='py-2 px-10 text-white rounded-lg bg-black text-sm'>submit</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default page