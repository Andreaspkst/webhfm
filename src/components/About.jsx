import React from 'react'
import Apps from '../assets/apps.png'

const About = () => {
  return (
    <div className="mt-20 h-auto w-full flex flex-col bg-[url('./assets/purplebkg.jpg')]">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto ">
          <div className="relative">
            <img className=' md:bottom-0 md:w-auto w-full z-0 ' src={Apps} alt="" />
          </div>
          <div className="flex flex-col p-20 md:items-start w-full px-2 pb-6 text-white">
            <h1 className='mt-3 text-3xl'>What is Lorem Ipsum? <br/> Lorem Ipsum is simply dummy</h1>
            <h2 className='text-lg py-1 text-red-500'>Your Indispensable Tool</h2>
            <p className='text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro excepturi nihil similique expedita sapiente quod fuga nesciunt culpa tenetur?</p>
            
            <h2 className='text-lg py-1 text-red-500'>Your Indispensable Tool</h2>
            <p className='text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro excepturi nihil similique expedita sapiente quod fuga nesciunt culpa tenetur?</p>
            
            <h2 className='text-lg py-1 text-red-500'>Your Indispensable Tool</h2>
            <p className='text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro excepturi nihil similique expedita sapiente quod fuga nesciunt culpa tenetur?</p>
            
          </div>
        </div>
    </div>
  )
}

export default About