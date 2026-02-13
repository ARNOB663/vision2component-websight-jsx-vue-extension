import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="flex flex-wrap">
        <div className="w-full bg-blue-500 p-6 text-white">
          <h1 className="text-4xl">Welcome to Our Tech Company</h1>
          <p className="leading-loose text-lg">
            At our tech company, we are dedicated to providing innovative and efficient solutions for all your technological needs. We specialize in a wide range of products and services, from software development to cybersecurity and more. Our team of experts is always ready to help you navigate the complexities of the digital world and find the solutions that best fit your needs.
          </p>
        </div>
        <div className="w-full md:w-1/4 p-6">
          <h2 className="text-2xl">Navigation</h2>
          <ul className="list-reset">
            <li className="py-2"><a href="#" className="text-blue-500 hover:text-blue-700">Home</a></li>
            <li className="py-2"><a href="#" className="text-blue-500 hover:text-blue-700">About</a></li>
            <li className="py-2"><a href="#" className="text-blue-500 hover:text-blue-700">Services</a></li>
            <li className="py-2"><a href="#" className="text-blue-500 hover:text-blue-700">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-3/4 p-6">
          <h2 className="text-2xl">Product Catalog</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 p-3">
              <img src="https://static.photos/business/900x600/70.webp" alt="Software" className="block h-auto w-full"/>
              <h3 className="text-xl">Software Development</h3>
              <p>We develop custom software solutions to meet your unique needs.</p>
            </div>
            <div className="w-full md:w-1/3 p-3">
              <img src="https://static.photos/business/900x600/71.webp" alt="Cybersecurity" className="block h-auto w-full"/>
              <h3 className="text-xl">Cybersecurity</h3>
              <p>We offer comprehensive cybersecurity solutions to protect your data.</p>
            </div>
            <div className="w-full md:w-1/3 p-3">
              <img src="https://static.photos/business/900x600/72.webp" alt="Data Management" className="block h-auto w-full"/>
              <h3 className="text-xl">Data Management</h3>
              <p>We help you manage your data effectively and efficiently.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;