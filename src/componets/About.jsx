import React from 'react';
import backGround from '../assets/About.jpg';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import f4 from '../assets/f4.png';
import f5 from '../assets/f5.png';
import f6 from '../assets/f6.png';
import f7 from '../assets/f7.png';

import Footer from './Footer';


import ContactSession from './ContactSession';
const About = () => {
  return (
    <div
      className="h-full w-full flex flex-col py-20 px-32 relative"
      style={{ backgroundImage: `url(${backGround})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-6xl font-extrabold text-center drop-shadow-lg">
          About Us
        </h1>
        <h2 className="text-white text-2xl font-semibold text-center max-w-3xl px-4">
          Welcome to Fruit Power – Your Premier Fruit Destination!
        </h2>
        <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            At Fruit Power, we believe that nature's best is the key to a vibrant, healthy lifestyle. Nestled in the heart of Johannesburg, we’re more than just a fruit shop; we’re a family-owned business dedicated to bringing you the freshest and most flavorful fruits the city has to offer.
          </p>
          <h3 className="text-gray-800 text-xl font-semibold text-center mb-4">
            Join Us on Our Journey
          </h3>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Explore our online store and experience the best of Johannesburg’s fruit market from the comfort of your home. At Fruit Power, your satisfaction is our top priority, and we’re committed to making every shopping experience exceptional.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Thank you for choosing Fruit Power. We look forward to serving you and being a part of your healthy, flavorful lifestyle!
          </p>
        </div>
      </div>

      <div className="py-20 flex  justify-center gap-4">
        <div className="flex-shrink-0 animate-roll">
          <img src={f1} className="h-48 w-48 object-cover rounded-lg shadow-xl shadow-black" alt="Fruit 1" />                                         
        </div>
        <div className="flex-shrink-0 animate-roll">
          <img src={f2} className="h-48 w-48 object-cover rounded-lg shadow-md" alt="Fruit 2" />
        </div>
        <div className="flex-shrink-0 animate-roll">
          <img src={f3} className="h-48 w-48 object-cover rounded-lg shadow-md" alt="Fruit 3" />
        </div>
        <div className="flex-shrink-0 animate-roll">
          <img src={f4} className="h-48 w-48 object-cover rounded-lg shadow-md"           alt="Fruit 4" />
        </div>
        <div className="flex-shrink-0 animate-roll">
          <img src={f5} className="h-48 w-48 object-cover rounded-lg shadow-md" alt="Fruit 5" />
        </div>
        <div className="flex-shrink-0 animate-roll">
          <img src={f6} className="h-48 w-48 object-cover rounded-lg shadow-xl" alt="Fruit 6" />
        </div>
        <div className="flex-shrink-0 animate-roll">
          <img src={f7} className="h-48 w-48 object-cover rounded-lg shadow-xl shadow-black" alt="Fruit 7" />
        </div>
      </div>
      <ContactSession/>
      <Footer/>
    </div>
  );
};

export default About;
