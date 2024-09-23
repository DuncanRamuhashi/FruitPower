import { useState } from 'react';
import { toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
import Hero from './componets/hero';
import CategoryBar from './componets/CategoryBar';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './componets/About';
import Shop from './componets/Shop';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';


function App() {
  
//<Route  path="/MainPage" element={<MainPage/>}/>
  return (
    <>
      <Router>
          <section id='home'><Hero/></section>
         
        
          <Routes>
          
          
          
          <Route  path="/RegisterPage" element={<RegisterPage/>}/>
          <Route  path="/LoginPage" element={<LoginPage/>}/>
          <Route  path="*"  element={
            <>
                <section id='category'><CategoryBar/></section>
                <section id='shop'><Shop/></section>
            </>
          }/>
          </Routes>
          <section id='about'> <About/></section>
         </Router>
      
      

      
      
     

 



    </>
  )
}

export default App
