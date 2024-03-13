import React from 'react'
import googleplay from '../assets/googleplay.png'
import appstore from '../assets/appstore.png'

const Download = () => {
  return (
    <div className="mt-10 h-auto w-full flex flex-col ">
        <div className="grid md:grid-cols-1 max-w-[518px] m-auto">
            <p className='flex justify-center w-full text-center '>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            <p className='flex justify-center w-full uppercase font-bold'>download it now!</p>
        </div>
        <div className="flex justify-center pb-10">
              <a className='hover:cursor-pointer' href="https://play.google.com" target="_blank">
                <img className='' src={googleplay} alt="google-play"/>
              </a>
              <a className='hover:cursor-pointer' href="https://www.apple.com/app-store/" target="_blank">
                <img className='' src={appstore} alt="apple-store"/>
              </a>
            </div>
    </div>
  )
}

export default Download