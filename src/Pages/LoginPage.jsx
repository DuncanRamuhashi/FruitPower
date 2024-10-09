import React, { useState } from 'react';
import background from '../assets/loginBack.jpg'
import backGround from '../assets/About.jpg';
import { toast } from 'react-toastify';
import { ToastContainer} from "react-toastify";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          console.log(data.Id);
          if (data === 'false') {
            toast.error("Wrong details, enter the correct detail!");
         } else  {
          toast.success("Login success");
          navigate(`/${data.Id}`)
         }
         
   }catch (error) {
        console.error('There was an error adding the data:', error);
        

    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover" style={{backgroundImage: `url(${background})`}}>
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h1>
        <ToastContainer />
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

        <button
          onClick={handleLogin}
          className="w-full  text-white font-bold py-2 rounded-md "
          style={{backgroundImage: `url(${backGround})`}}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
