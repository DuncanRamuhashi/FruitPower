import React from 'react'
import Navbar from './navbar'
import background from '../assets/f1.jpg'
import icon from '../assets/main.png'

const Hero = () => {
  return (
    <div className='relative flex flex-col w-full h-[950px] items-center  bg-cover duration-500' style={{backgroundImage: `url(${background})`}}>
    
         <Navbar/>
        <div className=' flex flex-col   space-y-8'>
            <div className='flex justify-center'>
            <img src={icon}  className='h-[300px] w-[300px]'/>    
            </div>
            <div className=''>
            <h1 className='text-white text-9xl font-bold text-center'>FRUIT & HEALTH</h1>
           
            </div>
            <div>
            <h1 className='text-white text-2xl font-semibold text-center font-mono'>for the love of your health</h1>
            </div>
                
              
                
        </div>
    </div>
  )
}

export default Hero