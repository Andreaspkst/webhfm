import React from 'react'
import mobilex from '../assets/2mob.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'

const Hero = () => {
  return (
    <div className="w-full flex flex-col-3 justify-between ">
        <div className="grid md:grid-cols-3 max-w-[1240px] m-auto">
          <div className="md:mt-20 md:ml-20">
            <div className="grid justify-center">
                <img className='' src={icon1} alt="" />
                <p>It is a long established <br/> fact that a reader</p>
            </div>
            <div className="grid justify-center">
                <img className='' src={icon2} alt="" />
                <p>It is a long established <br/> fact that a reader</p>
            </div>

          </div>
          <div className="">
            <img className='' src={mobilex} alt="mobilephones" />
          </div>
          <div className="md:mt-20 md:mr-20">
            <div className="grid justify-center">
                <img className='' src={icon3} alt="" />
                <p>The standard chunk <br/> of Lorem Ipsum</p>
            </div>
            <div className="grid justify-center">
                <img className='' src={icon4} alt="" />
                <p>The standard chunk <br/> of Lorem Ipsum</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero