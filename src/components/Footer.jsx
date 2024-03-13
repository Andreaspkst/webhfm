import React from 'react'
import { MdOutlineEmail, MdPhone } from "react-icons/md";
import { PiWechatLogoThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-[#161616] text-gray-300">
        <div className='  max-w-[1240px] mx-auto py-5 px-4 lg:grid-cols-3 gap-8'>
        <div className="lg:col-span-6 grid grid-cols-2 sm:mb-5 md:flex justify-between w-full">
                <div className="mb-5">
                    <h6 className='font-medium text-gray-400 uppercase'>Contact us</h6>
                    <ul>
                        <li className='py-2 text-sm cursor-pointer flex'><MdOutlineEmail color='#FF0000' className='mt-1 mr-2'/><a href="mailto:support@hfeu.com" target='_blank'>support@hfeu.com</a></li>
                        <li className='py-2 text-sm cursor-pointer flex'><MdPhone color='#FF0000' className='mt-1 mr-2'/><a href="tel:+35724400165" target='_blank'>+357-24-400165</a></li>
                        <li className='py-2 text-sm cursor-pointer flex'><PiWechatLogoThin color='#FF0000' className='mt-1 mr-2'/><a href="https://www.facebook.com/HFMarketsEu" target='_blank'>Live Chat</a></li>
                    </ul>
                </div>
                <div className="mb-5">
                    <h6 className='font-medium text-gray-400 uppercase'>About</h6>
                    <ul>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>About HotForex</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Why HotForex</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Regulation and License</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Security of Funds</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Awards</a></li>
                    </ul>
                </div>
                <div className="mb-5">
                    <h6 className='font-medium text-gray-400 uppercase'>Products</h6>
                    <ul>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Forex</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Metals and Oil</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Indices</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Shares</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Commodity CFDs</a></li>
                    </ul>
                </div>
                <div className="mb-5">
                    <h6 className='font-medium text-gray-400 uppercase'>Trading</h6>
                    <ul>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Trading Tools</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Forex Education</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Platforms</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Account Types</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Exclusive Analysis</a></li>
                    </ul>
                </div>
                <div className="mb-5">
                    <h6 className='font-medium text-gray-400 uppercase'>Promotions</h6>
                    <ul>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Loyalty Program</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Bonus Offerings</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Contests & Rewards</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Free Funding</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Deposit</a></li>
                    </ul>
                </div>
                <div className="mb-5">
                    <h6 className='font-medium text-gray-400 uppercase'>Affiliates</h6>
                    <ul>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Affiliates</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>About HF Affiliates</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Affiliate Types</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Marketing Tools</a></li>
                        <li className='py-2 text-sm'><a href="/" target='_blank'>Analytics</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Footer