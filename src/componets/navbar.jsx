import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/loloLogo.png';
import cart from '../assets/addcart2.png';
const Navbar = () => {
  return (
    <div className='  flex flex-row w-full justify-between'>

     <div>
        <a href=''>
          <img className=' h-44' src={logo}/> 
        </a>
     </div>

     <div className=' py-20 px-20'>
         <nav className='flex space-x-20'>
              <a href='' className='text-white text-2xl font-semibold '>Sign in</a>
              <a href=''  className='text-white text-2xl font-semibold'>Register</a>
              <a href=''>
              <div className='relative'>
                 <img className='h-10 w-10' src={cart} alt='Cart Icon'/>
               <span className='absolute top-0 right-0 -translate-x-1/2 translate-y-1/2 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                5
               </span>
              </div>
              </a>
         
         </nav>
     </div>

    </div>
  )
}

export default Navbar