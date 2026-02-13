import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-white font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Art Gallery</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Artists
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Exhibitions
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Art Gallery</h1>
        <p className="mb-4">
          At Art Gallery, we are dedicated to showcasing the best of the art world. Our collection includes a wide range of art pieces from various artists, spanning different genres and periods. We believe that art is a powerful tool for self-expression and understanding the world around us.
        </p>
        {/* Add your art pieces here */}
      </main>

      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto px-4">
          <p className="mb-4">
            Contact us: info@artgallery.com
          </p>
          <p className="mb-4">
            Follow us on: Twitter, Instagram, Facebook
          </p>
          <p className="mb-4">
            Upcoming exhibitions: Coming soon...
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;