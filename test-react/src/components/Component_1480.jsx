import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      {/* Full-screen background video */}
      <video autoplay muted loop id="myVideo">
        <source src="https://static.photos/technology/900x600/82.webp" type="video/mp4" />
      </video>

      {/* Navigation bar */}
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
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

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-center">Welcome to Tech Company</h1>
        <p className="text-lg text-center mt-4">
          At Tech Company, we are dedicated to providing the best technology solutions for our clients. Our team of experts is committed to delivering high-quality, reliable, and innovative products and services. We are passionate about technology and are always looking for new ways to improve and innovate.
        </p>
      </main>
    </>
  );
};

export default GeneratedComponent;