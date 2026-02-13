import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-indigo-100 font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-green-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Travel Agency</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Destinations
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Travel Deals
            </a>
          </div>
        </div>
      </nav>

      <div className="w-full bg-cover bg-center h-96" style={{ backgroundImage: "url('https://static.photos/travel/1600x900/20.webp')" }}>
        <div className="w-full text-center pt-12">
          <h1 className="text-4xl text-white">Welcome to our travel agency</h1>
          <p className="text-xl text-white">We offer a wide range of travel deals and destinations.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl text-center font-bold mb-6">Our Destinations</h2>
        {/* Add your destinations here */}

        <h2 className="text-3xl text-center font-bold mb-6 mt-12">Our Travel Deals</h2>
        {/* Add your travel deals here */}
      </div>
    </div>
  );
};

export default GeneratedComponent;