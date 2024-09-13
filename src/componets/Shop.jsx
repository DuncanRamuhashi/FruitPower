import React from 'react';
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

const products = [
  { id: 1, image: f1, name: 'Orange', price: 'R5.99' },
  { id: 2, image: f2, name: 'Strawberry', price: 'R1.99' },
  { id: 3, image: f3, name: 'Banana', price: 'R2.99' },
  { id: 4, image: f4, name: 'Lemon', price: 'R3.99' },
  { id: 5, image: f5, name: 'Green Apple', price: 'R4.99' },
  { id: 6, image: f6, name: 'Red Apple', price: 'R6.99' },
  { id: 7, image: f7, name: 'Watermelon', price: 'R9.99' },


];

const Shop = () => {
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
          {products.map(product => (
            <div key={product.id} className='bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-72'>
              <img src={product.image} alt={product.name} className='w-full h-48 object-cover rounded-t-lg' />
              <div className='p-4'>
                <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
                <p className='text-lg text-gray-700 mb-4'>{product.price}</p>
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
