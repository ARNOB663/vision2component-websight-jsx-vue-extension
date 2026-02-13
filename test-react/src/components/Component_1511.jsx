import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-white font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Tech Company</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="w-full p-6 flex flex-col flex-grow items-center justify-center">
        <img className="w-full" src="https://static.photos/business/900x600/113.webp" alt="Hero Image" />
      </div>

      <div className="container mx-auto px-4">
        <p className="my-8 text-lg text-center">
          At Tech Company, we are dedicated to providing the best technology solutions for our clients. Our team of experts is committed to delivering high-quality, reliable, and innovative products and services. We are passionate about technology and are always looking for new ways to improve and innovate.
        </p>
      </div>

      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6">
              <a href="#" className="text-teal-500 no-underline hover:text-teal-darker hover:underline text-2xl lg:text-teal-darker">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-teal-500 no-underline hover:text-teal-darker hover:underline text-2xl lg:text-teal-darker">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-teal-500 no-underline hover:text-teal-darker hover:underline text-2xl lg:text-teal-darker">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Contact</p>
              <p className="mb-2">123 Main Street</p>
              <p className="mb-2">Anytown, USA 12345</p>
              <p className="mb-2">(123) 456-7890</p>
              <p className="mb-2">info@techcompany.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;