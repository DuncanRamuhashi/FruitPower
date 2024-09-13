import React from 'react';
import backGround from '../assets/About.jpg';

const ContactSession = () => {
  return (
    <div
      className="relative py-20 flex flex-col items-center space-y-12"
      style={{ backgroundImage: `url(${backGround})` }}
    >
      <h1 className="text-white text-6xl font-extrabold text-center drop-shadow-lg">
        Contact Us
      </h1>

      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <form className="space-y-6">
          <div className="flex flex-col">
            <label className="text-gray-800 text-lg mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-800 text-lg mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-800 text-lg mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Enter the subject"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-800 text-lg mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ backgroundImage: `url(${backGround})` }}
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="w-full max-w-4xl p-4 rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27521.989671791736!2d27.999724745750427!3d-26.19354814753448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x168265abe7c7349%3A0xde95ef12730686f3!2sDiamond%20Fruits%20%26%20Veges!5e1!3m2!1sen!2sza!4v1726135768064!5m2!1sen!2sza"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
          className='rounded-lg w-full'
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSession;
