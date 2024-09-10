import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/loloLogo.png';
import cart from '../assets/addcart2.png';
const Navbar = () => {
  return (
    <div className='flex flex-row w-full justify-between'>

     <div>
        <a href=''>
          <img className=' h-44' src={logo}/> 
        </a>
       

     </div>
     <div className=' py-20 px-20'>
         <nav className='flex space-x-20'>
              <a href='' className='text-white text-2xl font-semibold '>Sign in</a>
              <a href=''  className='text-white text-2xl font-semibold'>Register</a>
              <div className='flex flex-row justify-items-center space-x-4'  >
              <a href='' className='text-white text-2xl font-semibold'>My Cart</a>
              <img className='h-10 w-10' src={cart}/>
              </div>
              
         </nav>
     </div>

    </div>
  )
}

export default Navbar