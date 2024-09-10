import React from 'react'
import Category from '../assets/cat.jpg'
import background from '../assets/bigzulu.jpg'
const CategoryBar = () => {
  return (
    <div  className='relative flex flex-row w-full  h-full  pl-[100px]  bg-cover duration-500' style={{backgroundImage: `url(${Category})`}}>
          
          <div className=' flex flex-col  py-[150px] space-y-10 '>
       
            <div>
            <h1 className='text-white text-8xl font-bold font-serif'>FRUIT Power</h1>
            </div>
            <div class="hover:animate-flash">
           
            <a href='' className='text-white text-4xl font-semibold  font-mono  '> Shop </a>
         
           
            </div>
            <div class="hover:animate-flash">
            <a href='' className='text-white text-4xl font-semibold  font-mono'> Cart </a>
            </div>
            <div class="hover:animate-flash">
            <a href='' className='text-white text-4xl font-semibold  font-mono'> About   </a>
            </div>
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