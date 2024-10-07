import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/loloLogo.png';
import cart from '../assets/addcart2.png';

const Navbar = ({ background }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-row w-full justify-between items-center px-4 py-4" style={{ background }}>
      <div className="mb-4 sm:mb-0">
        <a href="/">
          <img className="h-24 sm:h-44" src={logo} alt="Logo" />
        </a>
      </div>

      <div className="flex flex-col sm:flex-row items-center p-4">
        <button
          className="text-white text-2xl md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
        >
          &#9776;
        </button>

        <nav
          id="nav-menu"
          className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mt-4 sm:mt-0 ${
            menuOpen ? 'block' : 'hidden'
          } md:flex`}
        >
          <Link to='/LoginPage' className="text-white text-lg sm:text-xl font-semibold hover:underline transition duration-300">
            Sign In
          </Link>
          <Link to='/RegisterPage' className="text-white text-lg sm:text-xl font-semibold hover:underline transition duration-300">
            Register
          </Link>
          <Link to='/ShopFull' className="text-white text-lg sm:text-xl font-semibold hover:underline transition duration-300">
            Shop Full
          </Link>
          <Link to='/FruitManager' className="text-white text-lg sm:text-xl font-semibold hover:underline transition duration-300">
            Fruit Management
          </Link>
          <Link to='/Issues' className="text-white text-lg sm:text-xl font-semibold hover:underline transition duration-300">
            Customer Issues
          </Link>
          <Link to='/Orders' className="text-white text-lg sm:text-xl font-semibold hover:underline transition duration-300">
             Orders
          </Link>
          <Link to='/Dashboard' className="text-white text-lg sm:text-xl font-semibold hover:underline transition duration-300">
          Analytics dashboard
          </Link>
          <Link to='/Cart' className="relative">
            <img className="h-8 sm:h-10 w-8 sm:w-10" src={cart} alt="Cart Icon" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              5
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
