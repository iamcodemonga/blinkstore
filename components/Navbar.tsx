import Link from "next/link"
import Navbtn from "./Navbtn"

type Props = {}

const Navbar = () => {
    return (
        <>
            <nav className='flex w-full items-center justify-end px-3 md:px-10 py-5 fixed top-0 left-0 bg-white z-20'>
                {/* <Link href="/" className='font-black text-black md:text-2xl'>Blinkstore</Link> */}
                <Navbtn />
            </nav>
            <hr />
        </>
    )
}

export default Navbar