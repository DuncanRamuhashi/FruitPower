import React, { useState } from 'react';
import background from '../assets/RegisterBack.jpg'
import backGround from '../assets/About.jpg';
import { toast } from 'react-toastify';
import { ToastContainer} from "react-toastify";


const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user'); 
 
  const handleRegister = async () => {
    const notify = null;
    // somehow a class
    const registrationData = {
      name,
      email,
      password,
      userType,
    };
    try {
            
       const response = await fetch('https://localhost:44397/api/Register',{
        method: 'POST',
        headers: {
              'Content-Type' : 'application/json',
        },
        body: JSON.stringify(registrationData),
       });
         
       if (!response.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);

        
           }
           const data = await response.json();
           console.log( data);
           if (data === 'true') {
            toast.success("Registration successful!");
          } else if (data === 'false') {
            toast.error("User already exists!");
          }
          
    }catch (error) {
         console.error('There was an error adding the data:', error);
         

     }
    
    
   
  };
  

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-500 relative bg-cover "  style={{backgroundImage: `url(${background})`}}>
     
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Register</h1>
        <ToastContainer />
        <label className="block mb-2 text-gray-600">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </label>
        
        <label className="block mb-2 text-gray-600">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </label>

        <label className="block mb-2 text-gray-600">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </label>

        <label className="block mb-4 text-gray-600">
          User Type:
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <button
          onClick={handleRegister}
          className="w-full  text-white font-bold py-2 rounded-md  "
          style={{backgroundImage: `url(${backGround})`}}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
