import React from 'react'
import background from '../assets/foot.jpg'
const Footer = () => {
  return (
    <div  className='relative flex flex-row w-full items-center justify-center  py-5   pl-[100px]  bg-cover duration-500' style={{backgroundImage: `url(${background})`}}>
          
          <footer  className='text-black text-2xl font-semibold '>&copy; Copyright 2024 Duncan Ramuhashi</footer>
    </div>
  )
}

export default Footer