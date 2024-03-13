import React from 'react'
import googleplay from '../assets/googleplay.png'
import appstore from '../assets/appstore.png'
import mobile from '../assets/mobile.png'

const Mobile = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-between  bg-[url('./assets/bkg.jpg')]">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto ">
          <div className="flex flex-col justify-center md:items-start w-full px-2 pb-6 text-white">
            <h1 className='mt-3 text-3xl'>HotForex App</h1>
            <h2 className='text-xl py-1'>Your Indispensable Tool</h2>
            <p className='text-sm'> - Lorem ipsum dolor sit amet.</p>
            <p className='text-sm'> - Lorem ipsum dolor sit amet.</p>
            <p className='text-sm pb-4'> - Lorem ipsum dolor sit amet.</p>
            <div className="md:flex mr-[90px] my-[-20px]">
              <a className='hover:cursor-pointer' href="https://play.google.com" target="_blank">
                <img className='' src={googleplay} alt="google-play"/>
              </a>
              <a className='hover:cursor-pointer' href="https://www.apple.com/app-store/" target="_blank">
                <img className='' src={appstore} alt="apple-store"/>
              </a>
            </div>
          </div>
          <div className="relative">
            <img className='md:absolute md:bottom-0 md:w-auto w-full z-0 ' src={mobile} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Mobile