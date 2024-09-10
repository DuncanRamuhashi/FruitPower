import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import Hero from './componets/Hero';
import CategoryBar from './componets/CategoryBar'
import Footer from './componets/Footer';
function App() {
  

  return (
    <>
     <Hero/>
      <CategoryBar/>
      <Footer/>
    </>
  )
}

export default App
