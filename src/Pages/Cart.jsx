import React, { useState, useEffect } from 'react';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import f4 from '../assets/f4.png';

const cartItems = [
  { id: 1, image: f1, name: 'Orange', price: 5.99 },
  { id: 2, image: f2, name: 'Strawberry', price: 1.99 },
  { id: 3, image: f3, name: 'Banana', price: 2.99 },
  { id: 4, image: f4, name: 'Lemon', price: 3.99 },
];

const Cart = () => {
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {}; 
    cartItems.forEach((item) => {
      initialQuantities[item.id] = 1; 
    });
    setQuantities(initialQuantities); 
  }, []);

  const handleIncrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const handleDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(prev[id] - 1, 1),
    }));
  };

  let totalPrice = 0;

  for (let id in quantities) {
    const item = cartItems.find((item) => item.id === Number(id));
    if (item) {
      totalPrice += item.price * quantities[id];
    }
  }

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg w-full flex flex-col justify-center px-16'>
      <h2 className='text-xl font-semibold mb-4 text-center'>Cart</h2>
      <table className='w-full table-auto'>
        <thead>
          <tr className='bg-gray-200 text-center'>
            <th className='px-4 py-2'>Item</th>
            <th className='px-4 py-2'>Price</th>
            <th className='px-4 py-2'>Quantity</th>
            <th className='px-4 py-2'>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            quantities[item.id] && (
              <tr key={item.id} className='border-b text-center'>
                <td className='flex items-center space-x-3 px-4 py-2'>
                  <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded' />
                  <span className='font-semibold'>{item.name}</span>
                </td>
                <td className='px-4 py-2'>R{item.price.toFixed(2)}</td>
                <td className='px-4 py-2'>
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="bg-green-400 text-white px-2 py-1 rounded-lg shadow hover:bg-green-600 transition duration-200"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantities[item.id]}
                      disabled
                      className="w-16 h-10 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="bg-green-400 text-white px-2 py-1 rounded-lg shadow hover:bg-green-600 transition duration-200"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className='px-4 py-2'>
                  <button className='bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded'>
                    Remove Fruit
                  </button>
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
      <div className='mt-4 font-semibold'>Total: R{totalPrice.toFixed(2)}</div>
      <button className='w-full py-2 mt-4 text-white bg-green-500 rounded-lg hover:bg-green-700'>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
