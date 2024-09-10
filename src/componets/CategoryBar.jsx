import React from 'react'
import Category from '../assets/cat.jpg'
import background from '../assets/bigzulu.jpg'
import logo from '../assets/loloLogo.png';
import cart from '../assets/addcart2.png';
const CategoryBar = () => {
  return (
    <div  className='relative flex flex-row w-full  h-full  pl-[100px]  bg-cover duration-500' style={{backgroundImage: `url(${Category})`}}>
          
          <div className=' flex flex-col  py-[150px] space-y-10 '>
       
          <div>
             <a >
                 <img className=' h-60 w-[600px]' src={logo}/> 
             </a>
       

          </div>
            <div class="hover:animate-flash">
           
            <a href='' className='text-white text-4xl font-semibold  font-mono  '> Shop </a>
         
           
            </div>
            <div class="hover:animate-flash">
            <div className='flex flex-row justify-items-center space-x-4'  >
              <a href='' className='text-white text-4xl font-semibold'>My Cart</a>
              <img className='h-10 w-10' src={cart}/>
              </div>
            </div>
            
            <a href=''>
            <div class="hover:animate-flash">
            <a  className='text-white text-4xl font-semibold  font-mono'> About   </a>
            </div>
            </a>
            
            <div class="hover:animate-flash">
            <a href='' className='text-white text-4xl font-semibold  font-mono'> Contact  </a>
            </div>
                
              
                
           </div>
            <div  className='relative flex flex-col w-full rounded-es-full  h-[800px] bg-no-repeat bg-cover  duration-500 bg-white '  style={{backgroundImage: `url(${background})`}}>

       </div>
    </div>
  )
}

export default CategoryBar