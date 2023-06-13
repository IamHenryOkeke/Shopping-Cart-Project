import { useState } from "react";
import { Link } from 'react-router-dom'
import {ReactComponent as MenuOpenIcon} from "../assets/svg/menuOpen.svg";
import {ReactComponent as MenuCloseIcon} from "../assets/svg/menuClose.svg";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navTexts = ["Home","Shop","Cart","Contact"]
  return (
    <nav className="mx-3 mb-6 lg:mx-28">
      <div className='bg-[#31dd3f] mt-6 px-3 py-3 lg:mt-8 flex justify-between items-center border rounded-lg md:rounded-3xl md:px-[42px] md:py-[28px]'>
        <a href="/" className='md:text-lg font-medium lg:w-1/4'>
            The MarketPlace
        </a>
        <div className="items-center justify-around hidden md:flex">
          <div className='flex flex-col gap-12 md:flex-row lg:text-2xl'>
            <Link to = "/" className='transition-all ease-in-out delay-150 duration-300 hover:text-[#1971e4] hover:tracking-widest cursor-pointer'>{navTexts[0]}</Link>
            <Link to = "/shop" className='transition-all ease-in-out delay-150 duration-300 hover:text-[#1971e4] hover:tracking-widest cursor-pointer'>{navTexts[1]}</Link>
            <Link to = "/cart" className='transition-all ease-in-out delay-150 duration-300 hover:text-[#1971e4] hover:tracking-widest cursor-pointer'>{navTexts[2]}</Link>
            <Link to = "/contact" className='transition-all ease-in-out delay-150 duration-300 hover:text-[#1971e4] hover:tracking-widest cursor-pointer'>{navTexts[3]}</Link>              
          </div>
        </div>
        <div onClick={() => setNavbar(!navbar)} className='w-6 h-6 cursor-pointer md:hidden md:w-8 md:h-8 '>
          {navbar ? <MenuCloseIcon/> : <MenuOpenIcon/>}
        </div>
      </div>
      <div
        className={`${navbar ? "flex" : "hidden"} md:hidden py-4 flex-col items-center gap-4 bg-slate-200 mt-3 rounded-xl`}
      >
          <div className='flex flex-col items-center gap-5'>
            <Link to = "/" className='hover:text-[#1971e4] cursor-pointer'>{navTexts[0]}</Link>
            <Link to = "/shop" className='hover:text-[#1971e4] cursor-pointer'>{navTexts[1]}</Link>
            <Link to = "/cart" className='hover:text-[#1971e4] cursor-pointer'>{navTexts[2]}</Link>
            <Link to = "/contact" className='hover:text-[#1971e4] cursor-pointer'>{navTexts[3]}</Link>
          </div>
      </div>
    </nav>
  )
}

export default Navbar