import React,{useEffect,useState} from 'react';
import background from '../assets/farm.jpg';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import f4 from '../assets/f4.png';
import f5 from '../assets/f5.png';
import f6 from '../assets/f6.png';
import f7 from '../assets/f7.png';
import cart from '../assets/addcart2.png';
import backGround from '../assets/About.jpg';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import { useParams } from 'react-router-dom';
//https://localhost:44397/
//api/Fruit


const ShopFull = () => {
  const { id } = useParams();
  const [fruits, setFruits] =  useState([]);
  useEffect(() => {
    
    const getFruits = async () => {
      try {
        const response = await fetch('https://localhost:44397/api/Fruit', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        setFruits(data);
        console.log(data);
        console.log(id);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        toast.error("Error fetching fruits.");
      }
    };
        getFruits()
  },[]);

  const handleLogin = async () => {
    const loginData = {
      email,
      password,
    };
    try {
            
      const response = await fetch('https://localhost:44397/api/Login',{
       method: 'POST',
       headers: {
             'Content-Type' : 'application/json',
       },
       body: JSON.stringify(loginData),
      });
        
      if (!response.ok) {
       throw new Error(`HTTP error! status: ${res.status}`);

       
          }
          const data = await response.json();
          console.log( data);
          if (data === 'false') {
            toast.error("Wrong details, enter the correct detail!");
         } else  {
          toast.success("Login success");
         }
         
   }catch (error) {
        console.error('There was an error adding the data:', error);
    }
  };   
  return (
    <div
      className='relative h-full flex items-center px-10 py-5'
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='w-full max-w-screen-xl mx-auto'>
        <div className='flex flex-wrap gap-10 justify-center'>
          {fruits.map(product => (
            <div key={product.Id} className='bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-72'>
              <img src={`data:image/jpeg;base64,${product.Photo}`} alt={product.Name} className='w-full h-48 object-cover rounded-t-lg' />
              <div className='p-4'>
                <h2 className='text-xl font-semibold mb-2'>{product.Name}</h2>
                <p className='text-lg text-gray-700 mb-4'> R {product.Price} </p>
                <button
                  className='w-full py-2 px-4  text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition'
                 style={{backgroundImage: `url(${backGround})`}}>
                  <img src={cart} alt='Add to cart' className='inline-block w-5 h-5 mr-2' />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopFull;
