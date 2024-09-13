import React from 'react'
import Navbar from './navbar'
import background from '../assets/f1.jpg'
import icon from '../assets/main.png'

const Hero = () => {
  return (
<div className='relative flex flex-col w-full min-h-screen items-center bg-cover duration-500' style={{ backgroundImage: `url(${background})` }}>
    
    <Navbar />
    
    <div className='flex flex-col items-center space-y-4 px-4'>
        <div className='flex justify-center'>
            <img src={icon} className='h-[200px] w-[200px] sm:h-[250px] sm:w-[250px]' alt="Icon" />    
        </div>
        
        <div className='text-center'>
            <h1 className='text-white text-4xl sm:text-6xl font-bold'>FRUIT & HEALTH</h1>
        </div>
        
        <div className='text-center'>
            <h1 className='text-white text-lg sm:text-xl font-semibold font-mono'>for the love of your health</h1>
        </div>
    </div>
</div>

  )
}

export default Hero