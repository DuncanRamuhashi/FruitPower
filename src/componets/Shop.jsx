import React,{useEffect,useState} from 'react';
import background from '../assets/farm.jpg';
import { useNavigate } from 'react-router-dom';
import cart from '../assets/addcart2.png';
import backGround from '../assets/About.jpg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//https://localhost:44397/
//api/Fruit


const Shop = () => {
  const [fruits, setFruits] =  useState([]);
  const navigate = useNavigate();

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
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      toast.error("Error fetching fruits.");
    }
  };
  const addToCart = async (id) => {
         const subFruit = fruits.map( f => f.Id === id )
         const subDetail = '';
         
          const addData =  {
            UserId: id,
            FruitNumber: 145,
            Detail: "apeekeeaea",
            PRICE: 23.32
          };

     try{
          
     }catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      toast.error("Error Adding to cart.");
    }
  }

  useEffect(() => {
        getFruits()
  },[]);


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
          {fruits.slice(0,8).map(product => (
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

export default Shop;
