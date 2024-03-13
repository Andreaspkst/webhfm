import React from 'react'
import { FaTrophy, FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaYoutube, FaChartBar     } from "react-icons/fa";

const Social = () => {
  return (
    <div className="w-full h-auto py-3 flex flex-col justify-between  bg-[#222222]">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto ">
         <div className="xl:w-[1000px] block justify-start md:mr-20">
            <div className="flex md:flex md:justify-start sm:justify-center">
                <FaTrophy className='mt-1 mr-2' color='#FF0000' />
                <p className=' text-gray-400'>Winner of 19 Industry Awards</p>
            </div>
         </div>
        
         <div className=" block justify-center">
            <div className="flex w-full md:justify-end sm:justify-center mt-5 md:mt-0">
                <div className="flex text-gray-400">
                    <FaFacebookF size={20} className='mx-2 cursor-pointer' href='/' />
                    <FaTwitter size={20} className='mx-2 cursor-pointer' href='/'/>
                    <FaGooglePlusG size={20} className='mx-2 cursor-pointer' href='/'/>
                    <FaLinkedinIn size={20} className='mx-2 cursor-pointer' href='/'/>
                    <FaYoutube size={20} className='mx-2 cursor-pointer' href='/'/>
                    <FaChartBar size={20} className='mx-2 cursor-pointer' href='/'/>
                </div>
                    
            </div>
         </div>
        </div>
    </div>
  )
}

export default Social