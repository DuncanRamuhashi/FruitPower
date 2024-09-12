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
            className="w-full py-3  text-white font-semibold rounded-lg shadow-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{backgroundImage: `url(${backGround})`}}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSession;
