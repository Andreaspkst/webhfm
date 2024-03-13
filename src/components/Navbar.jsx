import React, { useState } from 'react'
import HFLogo from '../assets/HFLOGO.png'
import { IoHome, IoCloseOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";


const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="bg-black w-full">
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 bg-black ' >
        
        {/* Logo */}
        <img width={150} src={HFLogo} alt="logo" />

        {/* Desktop Menu */}
        <ul className='lg:flex hidden  uppercase text-white'>
            <li className='p-5'><IoHome className='' /></li>
            <li className='p-4'>About</li>
            <li className='p-4'>Products</li>
            <li className='p-4'>Accounts</li>
            <li className='p-4'>Platforms</li>
            <li className='p-4'>Tools</li>
            <li className='p-4'>Education</li>
        </ul>

        {/* Tablet/Mobile Menu */}
        <div className="block lg:hidden" onClick={handleNav} >
          {nav ? <IoCloseOutline color='white' size={40}/> : <HiOutlineMenuAlt3 color='white' size={35}/> }
        </div>
        <div className={nav ? ' z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-[#000300] text-white ease-in-out duration-500 lg:hidden' : ' fixed left-[-100%]'}>
          <img width={150} className='m-4' src={HFLogo} alt="logo" />
          <ul className='p-4 uppercase'>
            <li className='p-5 border-b border-gray-600'><IoHome className='' /></li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Products</li>
            <li className='p-4 border-b border-gray-600'>Accounts</li>
            <li className='p-4 border-b border-gray-600'>Platforms</li>
            <li className='p-4 border-b border-gray-600'>Tools</li>
            <li className='p-4'>Education</li>
          </ul>
        </div> 
        
      </div>
    </div>
    
  )
}

export default Navbar