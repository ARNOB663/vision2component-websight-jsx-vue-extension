import React from 'react';

const GeneratedComponent = () => {
  return (
    <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://picsum.photos/seed/202/1600/900')" }}>
      <div className="container mx-auto px-6 md:flex md:items-center md:justify-between py-4">
        <div className="text-center text-white">
          <h1 className="font-bold uppercase text-5xl pt-20 md:pt-0">Health and Wellness</h1>
          <p className="text-2xl pt-2">A journey to better health starts here.</p>
        </div>
        <nav className="flex items-center justify-between flex-wrap pt-4 md:pt-0">
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Services
              </a>
              <a href="#products" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Products
              </a>
              <a href="#resources" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Resources
              </a>
            </div>
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Get Started</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default GeneratedComponent;