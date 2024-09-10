import React from 'react'
import Navbar from './navbar'
import background from '../assets/f1.jpg'


const Hero = () => {
  return (
    <div className='relative flex flex-col w-full h-[950px] items-center  bg-cover duration-500' style={{backgroundImage: `url(${background})`}}>
    
         <Navbar/>
        <div className=' flex flex-col  py-[150px] space-y-8'>
            <div>
            <h1 className='text-white text-2xl text-center font-serif '>fresh</h1>
            </div>
            <div>
            <h1 className='text-white text-8xl font-bold text-center'>FRUIT & HEALTH</h1>
            </div>
            <div>
            <h1 className='text-white text-2xl font-semibold text-center font-mono'>for the love of your health</h1>
            </div>
                
              
                
        </div>
    </div>
  )
}

export default Hero