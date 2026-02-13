import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Art Supply Store</span>
          </div>
          <div className="block lg:hidden">
            <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block">
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
        </div>
      </nav>
      <main className="flex-1">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">Welcome to our Art Supply Store</h1>
              <p className="text-lg mb-4">
                We are a one-stop shop for all your art supply needs. We offer a wide range of products from paints, brushes, to canvas and more. Our products are of the highest quality and are designed to meet the needs of both beginners and professionals.
              </p>
              <p className="text-lg mb-4">
                We are committed to providing our customers with the best service and support. We strive to make your experience with us as smooth and enjoyable as possible.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img src="https://picsum.photos/seed/116/900/600" alt="Art Supply" className="w-full"/>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="text-center">
            <p className="text-gray-600">© 2022 Art Supply Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;