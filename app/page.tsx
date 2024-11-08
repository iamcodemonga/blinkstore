import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import Homebanner from "@/components/Homebanner";
import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import Navbtn from "@/components/Navbtn";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <>
        <nav className='flex w-full items-center justify-between px-3 md:px-10 py-5 fixed top-0 left-0 bg-transparent z-20'>
            <Link href="/" className='font-black text-black md:text-2xl'>Blinkstore</Link>
            <Navbtn />
        </nav>
        <div className="fixed top-0 left-0 -z-10 h-full w-full">
          <div className="relative h-full w-full bg-transparent">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          </div>
        </div>
        <section className="w-ful">
          <div className="w-full flex justify-center mt-40">
            <div className="w-full lg:w-1/2">
              <h1 className="font-semibold text-3xl lg:text-5xl text-center !leading-[1.2] text-gray-700 capitalize">convert social media followers into paying customers with a <span className="font-semibold text-green-500">single link.</span></h1>
              <div className="w-full flex justify-center">
                <p className="text-center text-gray-500 mt-7 w-[400px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum facilis ut soluta accusamus culpa laudantium, ipsum voluptas omnis nisi a.</p>
              </div>
              <div className="w-full flex justify-center mt-7">
                <button type="button" className="flex justify-between items-center space-x-10 px-10 py-3 text-white bg-gray-800 rounded-full text-[12px]">Get started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>     
            </div>
          </div>
          <div className="w-full flex justify-center mt-10">
            <img src="/blink-shoe.png" alt="" className="lg:w-[1200px] h-full rounded-3xl border-[20px] border-black" />
          </div>
          <div className="w-full flex justify-center mt-10">
            <div className="flex flex-col justify-center items-center">
              <div className="flex mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-400">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-400">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-400">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-400">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-400">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="capitalize text-xl font-bold text-gray-600">Trusted by 1000+ E-commerce merchants</h3>
            </div>
          </div>
        </section>
        <section className="w-full">
        <div className="flex justify-center mt-16">
            <div className="lg:w-3/4">
              <h1 className="font-semibold text-3xl lg:text-5xl text-center !leading-[1.2] text-gray-700 capitalize">Getting <span className="font-semibold text-green-500">started.</span></h1>
              <div className="w-full flex justify-center">
                <p className="text-center text-gray-500 mt-7 w-[600px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum facilis ut soluta accusamus culpa laudantium, ipsum voluptas omnis nisi a.</p>
              </div>
              <div className="grid grid-cols-4 gap-4 my-7">
                <div className="py-10 px-4 rounded-xl bg-slate-100">
                  <div className="w-full flex justify-center">
                    <div className="size-14 bg-gray-700 flex justify-center items-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-50">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                      </svg>
                    </div>
                  </div>
                  <h5 className="text-xl my-4 text-center">Sign up</h5>
                  <p className="text-xs text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum nam, aliquam consectetur sunt repellendus.</p>
                </div>
                <div className="py-10 px-4 rounded-xl bg-slate-100">
                  <div className="w-full flex justify-center">
                    <div className="size-14 bg-slate-700/5 flex justify-center items-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                      </svg>
                    </div>
                  </div>
                  <h5 className="text-xl my-4 text-center">Connect Wallet</h5>
                  <p className="text-xs text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum nam, aliquam consectetur sunt repellendus.</p>
                </div>
                <div className="py-10 px-4 rounded-xl bg-slate-100">
                  <div className="w-full flex justify-center">
                    <div className="size-14 bg-slate-700/5 flex justify-center items-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                    </div>
                  </div>
                  <h5 className="text-xl my-4 text-center">Upload Product</h5>
                  <p className="text-xs text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum nam, aliquam consectetur sunt repellendus.</p>
                </div>
                <div className="py-10 px-4 rounded-xl bg-slate-100">
                  <div className="w-full flex justify-center">
                    <div className="size-14 bg-slate-700/5 flex justify-center items-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                      </svg>
                    </div>
                  </div>
                  <h5 className="text-xl my-4 text-center">Unlimited Sales</h5>
                  <p className="text-xs text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum nam, aliquam consectetur sunt repellendus.</p>
                </div>
              </div>     
            </div>
          </div>
        </section>
        {/* <footer className="w-full flex justify-center items-center py-20 bg-gray-900 mt-5">
            <div className="space-y-2">
              <h4 className="text-sm text-center text-white">Developed by team <a href="https://codemonga.netlify.app" className="text-green-500 text-base font-bold">@codemonga</a></h4>
              <p className="text-center text-xs text-gray-200">blinkstore 2024</p>
            </div>
        </footer> */}
      </>
  );
}
