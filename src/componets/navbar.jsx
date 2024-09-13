import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/loloLogo.png';
import cart from '../assets/addcart2.png';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
  return (
<div className='flex  flex-row sm:flex-row w-full justify-between items-center px-4 py-4 '>
  
  <div className='mb-4 sm:mb-0'>
    <a href=''>
      <img className='h-24 sm:h-44' src={logo} alt="Logo" /> 
    </a>
  </div>

  <div className='flex flex-col sm:flex-row items-center p-4 '>
 
  <button 
    className="text-white text-2xl md:hidden focus:outline-none"
    onClick={toggleMenu}
    aria-expanded={menuOpen}
    aria-controls="nav-menu"
  >
    &#9776;
  </button>
  
  
  <nav id="nav-menu" className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mt-4 sm:mt-0 ${menuOpen ? 'block' : 'hidden'}`}>
    <a href='#' className='text-white text-lg sm:text-xl font-semibold hover:underline transition duration-300'>Sign In</a>
    <a href='#' className='text-white text-lg sm:text-xl font-semibold hover:underline transition duration-300'>Register</a>
    
 
    <a href='#' className='relative'>
      <img className='h-8 sm:h-10 w-8 sm:w-10' src={cart} alt='Cart Icon'/>
      <span className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
        5
      </span>
    </a>
  </nav>
</div>

  
</div>

  )
}

export default Navbar