import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="fixed w-full bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center">
            <img src="https://picsum.photos/seed/244/300/300" alt="Logo" className="h-10 w-10" />
          </div>
          <div className="flex items-center">
            <a href="#" className="px-2 py-1 text-gray-700 hover:text-red-500">Home</a>
            <a href="#" className="px-2 py-1 text-gray-700 hover:text-red-500">About</a>
            <a href="#" className="px-2 py-1 text-gray-700 hover:text-red-500">Services</a>
            <a href="#" className="px-2 py-1 text-gray-700 hover:text-red-500">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8">Welcome to Our Marketing Agency</h1>
        <p className="text-lg text-center my-8">
          We are a full-service digital marketing agency that specializes in creating and executing effective marketing strategies. 
          Our team of experts is dedicated to helping businesses of all sizes achieve their marketing goals. 
          Whether you're looking to increase brand awareness, drive more traffic to your website, or generate more leads, 
          we have the tools and strategies to help you succeed.
        </p>
        <div className="flex justify-center my-8">
          <a href="#" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </a>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <div>
            <p>© 2022 Marketing Agency</p>
          </div>
          <div>
            <a href="#" className="text-gray-400 hover:text-white">Case Studies</a>
            <a href="#" className="text-gray-400 hover:text-white">Testimonials</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { GeneratedComponent };