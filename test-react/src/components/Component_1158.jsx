import React, { useState } from 'react';

const GeneratedComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="flex items-center justify-between bg-white py-4 md:py-0 px-4 md:px-10">
        <div className="flex items-center">
          <img src="https://static.photos/technology/300x300/160.webp" alt="Logo" className="h-10" />
        </div>
        <div className="md:hidden">
          <button id="menu-toggle" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`hidden w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : ''}`} id="menu">
        <ul className="md:flex md:justify-between md:pt-4">
          <li><a href="#" className="block py-2 pr-4 pl-3 text-white md:p-0">Home</a></li>
          <li><a href="#" className="block py-2 pr-4 pl-3 text-white md:p-0">About</a></li>
          <li><a href="#" className="block py-2 pr-4 pl-3 text-white md:p-0">Services</a></li>
          <li><a href="#" className="block py-2 pr-4 pl-3 text-white md:p-0">Contact</a></li>
        </ul>
      </div>

      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full">
          <div className="h-64 flex justify-center items-center">
            <img src="https://static.photos/technology/900x600/161.webp" alt="Software" />
          </div>
          <p className="text-xl text-gray-800 leading-normal py-6">
            At our tech software company, we are dedicated to providing innovative and reliable software solutions to meet your business needs. Our team of experts uses the latest technologies to develop custom software that is tailored to your specific requirements. We pride ourselves on our ability to understand your business and provide solutions that are not just technically sound, but also user-friendly and scalable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;