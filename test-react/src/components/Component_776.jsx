import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Fashion Brand</span>
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

      <div className="w-full p-6 flex flex-col flex-wrap align-center justify-center">
        <img src="https://static.photos/fashion/900x600/178.webp" alt="Hero Image" className="w-full object-cover" />
      </div>

      <div className="container mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 leading-normal mb-6">
          At Fashion Brand, we believe in the power of fashion to express individuality and self-expression. Our mission is to provide our customers with high-quality, stylish clothing that is not only fashionable but also comfortable and durable. We are committed to creating a sustainable and ethical fashion industry, and we believe that fashion should be accessible to all.
        </p>
      </div>

      <div className="container mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 leading-normal mb-6">
          123 Main St<br />
          Anytown, USA 12345<br />
          Phone: (123) 456-7890<br />
          Email: info@fashionbrand.com
        </p>
      </div>

      <div className="container mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-4">Newsletter</h1>
        <form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-newsletter">
                Newsletter
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-newsletter" type="text" placeholder="Your email" />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>

      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6">
              <a className="text-purple-600 no-underline hover:underline text-black text-2xl lg:text-3xl" href="#responsive-header">Fashion Brand</a>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Links</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#responsive-header" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Home</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#responsive-header" className="no-underline hover:underline text-gray-800 hover:text-orange-500">About</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#responsive-header" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;