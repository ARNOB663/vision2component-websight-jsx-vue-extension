import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Food Delivery Service</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Menu
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl text-center font-bold mb-8">Welcome to our Food Delivery Service</h1>
        <p className="text-center mb-8">We offer a wide variety of delicious food items, prepared with the freshest ingredients and served in a fun and playful environment. Our mission is to make food enjoyable and accessible to everyone, no matter the dietary requirements.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img src="https://picsum.photos/seed/52/900/600" alt="Pizza" className="w-full"/>
            <h2 className="text-2xl font-bold mb-2">Pizza</h2>
            <p className="text-gray-700">A delicious pizza with a variety of toppings.</p>
          </div>
          {/* Add more food items here */}
        </div>
      </div>
    </>
  );
};

export default GeneratedComponent;