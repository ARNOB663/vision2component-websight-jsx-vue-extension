import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-red-500 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center mb-8">
          <img src="https://picsum.photos/seed/17/300/300" alt="Logo" className="w-16 h-16 mr-4" />
          <h1 className="text-4xl font-bold">Food Delivery Service</h1>
        </div>
        <nav className="flex justify-center mb-8">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-xl hover:text-red-300">Home</a></li>
            <li><a href="#" className="text-xl hover:text-red-300">Menu</a></li>
            <li><a href="#" className="text-xl hover:text-red-300">About Us</a></li>
            <li><a href="#" className="text-xl hover:text-red-300">Contact</a></li>
          </ul>
        </nav>
        <div className="flex justify-center items-center mb-8">
          <div className="bg-white text-red-500 p-4 rounded">
            <h2 className="text-2xl font-bold mb-2">Promo Code</h2>
            <p className="text-lg">Get a 10% discount with the code: FOOD10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;