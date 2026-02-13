import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <nav className="sticky top-0 bg-white shadow-md p-6">
        <div className="flex justify-between">
          <div>
            <a href="#" className="text-gray-800 no-underline hover:text-gray-600">Home</a>
            <a href="#" className="text-gray-800 no-underline hover:text-gray-600 ml-4">About</a>
            <a href="#" className="text-gray-800 no-underline hover:text-gray-600 ml-4">Contact</a>
          </div>
          <div>
            <a href="#" className="text-gray-800 no-underline hover:text-gray-600">Facebook</a>
            <a href="#" className="text-gray-800 no-underline hover:text-gray-600 ml-4">Instagram</a>
            <a href="#" className="text-gray-800 no-underline hover:text-gray-600 ml-4">Twitter</a>
          </div>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-6">
          <img src="https://static.photos/business/900x600/20.webp" alt="Food Image" className="w-full"/>
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-3xl mb-4">About Our Company</h1>
          <p className="mb-4">
            At our Food and Beverage Company, we are committed to providing our customers with the best food and beverage options. We source our ingredients from local farms and suppliers to ensure the highest quality and taste. Our menu features a variety of dishes, from classic comfort food to unique and innovative dishes. We also offer a wide range of beverages, from refreshing drinks to alcoholic beverages. Our goal is to create a warm and welcoming atmosphere where our customers can enjoy a meal with friends and family.
          </p>
          <a href="#" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Order Now
          </a>
        </div>
      </div>
    </>
  );
};

export default GeneratedComponent;