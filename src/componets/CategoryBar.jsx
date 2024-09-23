import React from 'react'
import Category from '../assets/cat.jpg'
import background from '../assets/bigzulu.jpg'
import logo from '../assets/loloLogo.png';
import cart from '../assets/addcart2.png';
const CategoryBar = () => {
  return (
<div className='relative flex flex-col sm:flex-row w-full h-full bg-cover bg-center duration-500' style={{ backgroundImage: `url(${Category})` }}>
  
  <div className='flex flex-col items-center sm:items-start py-12 sm:py-24 space-y-8 sm:space-y-10 px-4 sm:px-24'>
    
    <div>
      <a href='#'>
        <img className='h-36 sm:h-60 w-auto sm:w-[600px]' src={logo} alt='Logo' /> 
      </a>
    </div>

    <div className='hover:animate-flash'>
      <a href='#shop' className='text-white text-3xl sm:text-4xl font-semibold font-mono'>Shop</a>
    </div>

    <a href='' className='flex items-center space-x-4 hover:animate-flash'>
      <span className='text-white text-3xl sm:text-4xl font-semibold'>My Cart</span>
      <div className='relative'>
        <img className='h-8 sm:h-10 w-8 sm:w-10' src={cart} alt='Cart Icon'/>
        <span className='absolute top-0 right-0 -translate-x-1/2 translate-y-1/2 bg-blue-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center'>
          5
        </span>
      </div>
    </a>

    <div className='hover:animate-flash'>
      <a href='#about' className='text-white text-3xl sm:text-4xl font-semibold font-mono'>About</a>
    </div>

    <div className='hover:animate-flash'>
      <a href='#about' className='text-white text-3xl sm:text-4xl font-semibold font-mono'>Contact</a>
    </div>
    
  </div>

  <div className='relative flex-col w-full h-[500px] sm:h-[800px] bg-no-repeat bg-cover hidden md:block bg-white' style={{ backgroundImage: `url(${background})` }}>
  
  </div>
</div>

  )
}

export default CategoryBar