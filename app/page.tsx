import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
      <>
        <Navbar />
        <Banner />
        <AllProducts />
        <footer className="w-full flex justify-center items-center py-20 bg-gray-900 mt-5">
            <div className="space-y-2">
              <h4 className="text-sm text-center text-white">Developed by team <a href="https://codemonga.netlify.app" className="text-green-500 text-base font-bold">@codemonga</a></h4>
              <p className="text-center text-xs text-gray-200">blinkstore 2024</p>
            </div>
        </footer>
      </>
  );
}
