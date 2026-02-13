import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="sticky top-0 z-50 bg-white">
        <nav className="container mx-auto flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Tech Company</span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
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
      </header>
      <main>
        <section className="py-20">
          <div className="container mx-auto flex flex-wrap">
            <div className="w-full px-4">
              <h1 className="text-4xl font-bold leading-tight text-gray-800">Welcome to Tech Company</h1>
              <p className="leading-normal text-2xl mt-4 mb-8 text-gray-600">
                At Tech Company, we are dedicated to providing innovative and reliable technology solutions to meet your business needs. Our team of experts is committed to delivering high-quality products and services that exceed your expectations.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6">
              <a className="text-gray-500 no-underline hover:no-underline" href="#">
                <span className="text-gray-700 text-lg font-bold mb-2">Tech Company</span>
              </a>
              <p className="text-gray-500 text-sm">
                At Tech Company, we are dedicated to providing innovative and reliable technology solutions to meet your business needs.
              </p>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Social</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a>
                </li>
                <li className="mt-2 inline-block mr-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a>
                </li>
                <li className="mt-2 inline-block mr-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Newsletter</p>
              <form>
                <div className="flex w-full">
                  <input className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Email" type="email"/>
                  <button className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg" type="button">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;