import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Navbtn from '@/components/Navbtn'
import Card from '@/components/Card'
import { Datatable } from './datatable'
import AllProducts from '@/components/AllProducts'

type Props = {}

const page = (props: Props) => {
    return (
        <section className='w-full flex h-screen'>
            <aside className='fixed top-0 left-0 bg-white border- border-gray-300 h-full w-14 flex flex-col justify-between pb-10'>
                <div className='h-full w-full pb-5 pt-5 space-y-7'>
                    <Link href={"/"} className='flex flex-col justify-center items-center text-sky-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                        <p className='text-[10px]'>Overview</p>
                    </Link>
                    <Link href={""} className='flex flex-col justify-center items-center text-slate-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <p className='text-[10px]'>Products</p>
                    </Link>
                    <Link href={""} className='flex flex-col justify-center items-center text-slate-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                        </svg>
                        <p className='text-[10px]'>Orders</p>
                    </Link>
                    <Link href={""} className='flex flex-col justify-center items-center text-slate-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <p className='text-[10px]'>Settings</p>
                    </Link>
                    <div className='flex flex-col justify-center items-center mt-5 relative'>
                        <Avatar className='flex flex-col justify-center items-center w-8 h-8'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 absolute bottom-0 right-0 text-blue-600">
                            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg> */}
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                        </svg>
                    </button>
                </div>
            </aside>
            <main className='w-full relative overflow-x-hidden ml-14 pr-4 lg:pl-3 hidde overview'>
                <nav className='flex w-full items-center justify-end pr-2 py-5 absolute top-0 right-2 bg-transparent z-20'>
                    <Navbtn />
                </nav>
                <section className='pt-20 hidde recentorders-section'>
                    <div className='grid grid-cols-12 gap-x-3 gap-y-3 lg:gap-y-0 lg:gap-x-3'>
                        <Card label='total sales' value={200} money={true} index={0}>
                            <div className='rounded-2xl p-3 bg-sky-500/10 flex justify-center items-center w-14 h-14'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-sky-500 self-center">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                </svg>
                            </div>
                        </Card>
                        <Card label="today's income" value={15} money={true}>
                            <div className='rounded-2xl p-3 bg-sky-500/10 flex justify-center items-center w-14 h-14'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-sky-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                </svg>
                            </div>
                        </Card>
                        <Card label='total products' value={20} money={false}>
                            <div className='rounded-2xl p-3 bg-sky-500/10 flex justify-center items-center w-14 h-14'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-sky-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </div>
                        </Card>
                        <Card label='total orders' value={200} money={false}>
                            <div className='rounded-2xl p-3 bg-sky-500/10 flex justify-center items-center w-14 h-14'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-sky-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                                </svg>
                            </div>
                        </Card>
                    </div>
                </section>
                <section className='py-10 allorders-section hidde'>
                    <h3 className='text-xl mb-3 text-center lg:text-left'>Recent Orders</h3>
                    <Datatable />
                </section>
            </main>
            <main className='w-full relative overflow-x-hidden ml-14 pr-4 lg:pl-4 hidden orders'>
                <nav className='flex w-full items-center justify-end pr-2 py-5 absolute top-0 right-2 bg-transparent z-20'>
                    <Navbtn />
                </nav>
                <section className='py-24 allorders-section hidde'>
                    <h3 className='text-xl mb-3 text-center lg:text-left'>All  Orders</h3>
                    <Datatable />
                </section>
            </main>
            {/* <AllProducts /> */}
            <main className='w-full relative overflow-x-hidden ml-14 hidden settings'>
                <div className='flex w-full items-center justify-end pr-2 py-5 sticky top-0 bg-gradient-to-b from-white from-70% z-50'>
                    <Navbtn />
                </div>
                <section className='py-0 pr-2 lg:pr-2 lg:pl-2 allorders section hidde'>
                    <div className='grid grid-cols-12 gap-x-5 gap-y-7'>
                        <form className='col-span-12 lg:col-span-5 border rounded-lg py-16 space-y-8' action="" method="post">
                            <h3 className="lg:text-center lg:font-bold text-xl px-3">Business Logo</h3>
                            <div className='w-full flex justify-center'>
                                <Avatar className='flex flex-col justify-center items-center w-28 h-28 lg:w-36 lg:h-36'>
                                    <AvatarImage src="https://images.pexels.com/photos/29761732/pexels-photo-29761732/free-photo-of-traditional-vietnamese-incense-drying-process.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" className='object-cover' />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className='flex items-center justify-center space-x-3 w-full'>
                                <div className=''>
                                    <label htmlFor="logofile" className='bg-slate-100 py-[10px] px-5 rounded-md text-sm'>Select Logo</label>
                                    <input type="file" name="" id="logofile" className='hidden' />
                                </div>
                                <button type="submit" className='bg-slate-900 py-2 px-5 text-slate-100 rounded-md text-sm'>Submit</button>
                            </div>
                            <p className="text-center text-slate-400 text-sm">Allowed JPG, PNG, JPEG. Max size of 1MB</p>
                        </form>
                        <form className='col-span-12 lg:col-span-7 border rounded-lg py-12 lg:py-16 px-4 lg:px-16 space-y-6' action="" method="post">
                            <div className='space-y-2'>
                                <h3 className="lg:font-bold text-xl">Business details</h3>
                                <p className='text-sm text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                            <div>
                                <div className='mb-[5px] flex w-full justify-between items-center px-1'>
                                    <label htmlFor="businessname" className='block text-xs text-gray-600'>Business Name</label>
                                </div>
                                <input type="text" name="businessname" id="businessname" placeholder="what's your business name?" className='px-2 py-[8px] border-[1.5px] rounded-md border-gray-500 text-sm w-full' />
                            </div>
                            <div>
                                <div className='mb-[5px] flex w-full justify-between items-center px-1'>
                                    <label htmlFor="businessemail" className='block text-xs text-gray-600'>Business E-mail</label>
                                </div>
                                <input type="email" name="businessemail" id="businessemail" placeholder="your business email address?" className='px-2 py-[8px] border-[1.5px] rounded-md border-gray-500 text-sm w-full' />
                            </div>
                            <div>
                                <div className='mb-[5px] flex w-full justify-between items-center px-1'>
                                    <label htmlFor="businessregno" className='block text-xs text-gray-600'>Business Registration Number</label>
                                </div>
                                <input type="text" name="businessregno" id="businessregno" placeholder="your business registration number?" className='px-2 py-[8px] border-[1.5px] rounded-md border-gray-500 text-sm w-full' />
                            </div>
                            <button type="submit" className='bg-slate-900 py-2 px-10 text-slate-100 rounded-md text-sm'>Submit</button>
                        </form>
                    </div>
                    <div className='grid grid-cols-12 gap-x-5 gap-y-7 border rounded-lg mt-5 mb-40'>
                        <form className='col-span-12 lg:col-span-6 py-12 lg:py-16 px-4 lg:px-16 space-y-6' action="" method="post">
                            <div className='space-y-2'>
                                <h3 className="lg:font-bold text-xl">Business Owner</h3>
                                <p className='text-sm text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                            <div>
                                <div className='mb-[5px] flex w-full justify-between items-center px-1'>
                                    <label htmlFor="firstname" className='block text-xs text-gray-600'>First Name</label>
                                </div>
                                <input type="text" name="firstname" id="firstname" placeholder="Your first name" className='px-2 py-[8px] border-[1.5px] rounded-md border-gray-500 text-sm w-full' />
                            </div>
                            <div>
                                <div className='mb-[5px] flex w-full justify-between items-center px-1'>
                                    <label htmlFor="lastname" className='block text-xs text-gray-600'>Last Name</label>
                                </div>
                                <input type="text" name="lastname" id="lastname" placeholder="Your last name" className='px-2 py-[8px] border-[1.5px] rounded-md border-gray-500 text-sm w-full' />
                            </div>
                            <div>
                                <div className='mb-[5px] flex w-full justify-between items-center px-1'>
                                    <label htmlFor="email" className='block text-xs text-gray-600'>E-mail</label>
                                </div>
                                <input type="email" name="email" id="email" placeholder="Your email address?" className='px-2 py-[8px] border-[1.5px] rounded-md border-gray-500 text-sm w-full' />
                            </div>
                            <button type="submit" className='bg-slate-900 py-2 px-10 text-slate-100 rounded-md text-sm'>Submit</button>
                        </form>
                        <form className='col-span-12 lg:col-span-6 py-12 lg:py-16 px-4 lg:px-16 space-y-6' action="" method="post">
                            <div className='space-y-2'>
                                <h3 className="lg:font-bold text-xl">Change Password</h3>
                                <p className='text-sm text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                            <div>
                                <div className='mb-[5px] flex w-full justify-between items-center px-1'>
                                    <label htmlFor="currentpassword" className='block text-xs text-gray-600'>Current Password</label>
                                    <button type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </button>
                                </div>
                                <input type="password" name="currentpassword" id="currentpassword" placeholder='xxxxxxxxxxxx' className='px-2 py-[8px] border-[1.5px] rounded-md border-gray-500 text-sm w-full' />
                            </div>
                            <div>
                                <div className='mb-[5px] flex w-full justify-between items-center px-1'>
                                    <label htmlFor="newpassword" className='block text-xs text-gray-600'>New Password</label>
                                    <button type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </button>
                                </div>
                                <input type="password" name="newpassword" id="newpassword" placeholder='xxxxxxxxxxxx' className='px-2 py-[8px] border-[1.5px] rounded-md border-gray-500 text-sm w-full' />
                            </div>
                            <div>
                                <div className='mb-[5px] flex w-full justify-between items-center px-1'>
                                    <label htmlFor="confirmpassword" className='block text-xs text-gray-600'>Confirm Password</label>
                                    <button type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </button>
                                </div>
                                <input type="password" name="confirmpassword" id="confirmpassword" placeholder='xxxxxxxxxxxx' className='px-2 py-[8px] border-[1.5px] rounded-md border-gray-500 text-sm w-full' />
                            </div>
                            <button type="submit" className='bg-slate-900 py-2 px-10 text-slate-100 rounded-md text-sm'>Submit</button>
                        </form>
                    </div>
                </section>
            </main>
        </section>
    )
}

export default page