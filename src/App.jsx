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
import ShopFull from './Pages/ShopFull';
import FruitManager from './Pages/FruitManager';
import Navbar from './componets/navbar';
import CustomerIssues from './Pages/CustomerIssues';
import Cart from './Pages/Cart';
import Dashboard from './Pages/Dashboard';
import Orders from './Pages/Orders';

const navbarBackground = 'linear-gradient(to right, #ff7e5f, #feb47b)';




function App() {
  
//<Route  path="/MainPage" element={<MainPage/>}/>
  return (
    <>
      <Router>
          
      <section id='home:id'><Navbar background={navbarBackground} /></section>
        
          <Routes>
          
          
          
          <Route  path="/RegisterPage" element={<RegisterPage/>}/>
          <Route  path="/LoginPage" element={<LoginPage/>}/>
          <Route  path="/ShopFull" element={<ShopFull/>}/>
          <Route  path="/FruitManager" element={<FruitManager/>}/>
          <Route  path="/Issues" element={<CustomerIssues/>}/>
          <Route  path="/Cart:id" element={<Cart/>}/>
          <Route  path="/Dashboard" element={<Dashboard/>}/>
          <Route  path="/Orders" element={<Orders/>}/>
          <Route  path="*"  element={
            <>
            
                <section id='home'><Hero/></section>
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
