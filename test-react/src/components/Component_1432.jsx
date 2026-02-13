import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style={{ backgroundImage: "url('https://static.photos/art/1600x900/33.webp')" }}>
      <header className="bg-white w-full">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Creative Agency</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#services" className="mr-5 hover:text-gray-900">Services</a>
            <a href="#portfolio" className="mr-5 hover:text-gray-900">Portfolio</a>
            <a href="#about" className="mr-5 hover:text-gray-900">About</a>
            <a href="#contact" className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="w-full md:w-2/5 py-6 text-center">
          <h1 className="text-5xl text-gray-900 font-bold leading-tight mt-0 mb-2">Welcome to our Creative Agency</h1>
          <p className="text-gray-600 mb-8">We are a creative agency that specializes in creating unique and engaging digital experiences. Our team of experts is dedicated to helping businesses and individuals reach their full potential online.</p>
          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Get Started</button>
        </div>
        <div className="w-full md:w-3/5 py-6">
          <img className="w-full md:w-4/5 z-50 mx-auto" src="https://static.photos/art/900x600/34.webp" alt="Image"/>
        </div>
      </main>
      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <p className="text-gray-600 text-center py-8">© 2022 Creative Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;