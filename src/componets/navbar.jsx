import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/loloLogo.png';
const Navbar = () => {
  return (
    <div className='flex flex-row w-full justify-between'>

     <div>
        <a href=''>
          <img className=' h-44' src={logo}/> 
        </a>
       

     </div>
     <div className=' py-20 px-20'>
         <nav className=' space-x-20'>
              <a href='' className='text-white text-2xl font-semibold '>Sign in</a>
              <a href=''  className='text-white text-2xl font-semibold'>Register</a>
              <a href=''  className='text-white text-2xl font-semibold'>My Cart</a>
         </nav>
     </div>

    </div>
  )
}

export default Navbar