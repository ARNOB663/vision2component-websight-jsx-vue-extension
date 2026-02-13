import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="https://static.photos/business/300x300/140.webp" alt="Logo" />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#destinations" className="mr-5 hover:text-gray-900">Destinations</a>
            <a href="#contact" className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <section id="hero" className="bg-white py-16">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-2/5 justify-center lg:w-1/2">
            <h1 className="text-4xl font-bold leading-none mt-6">Welcome to our travel agency</h1>
            <p className="leading-relaxed mt-6">
              We are a dynamic travel agency that offers a wide range of travel destinations.
              Whether you're looking for a relaxing beach vacation, an adventurous trek, or a cultural experience,
              we have something for everyone.
            </p>
            <div className="mt-6">
              <a href="#destinations" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Destinations
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="bg-gray-100 py-16">
        <div className="container mx-auto flex flex-wrap">
          {/* Carousel of travel destinations goes here */}
        </div>
      </section>

      <footer className="bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="https://static.photos/business/900x600/141.webp" alt="World Map" />
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
            © 2022 Travel Agency —
            <a href="/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">
              All rights reserved
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;