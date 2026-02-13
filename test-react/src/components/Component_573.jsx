import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-orange-100 container mx-auto px-4 py-12">
      <h1 className="text-4xl text-center font-bold mb-8 text-green-800">Welcome to Our Food Delivery Service</h1>
      <p className="text-xl text-center mb-8 text-brown-800">
        We are a team of passionate food lovers who are dedicated to bringing you the best of the best. 
        Our mission is to provide you with the freshest, most delicious meals, prepared by our expert chefs, 
        delivered to your doorstep in a timely manner. We understand that your time is valuable, 
        so we strive to make the process as easy and efficient as possible. 
        Whether you're in the mood for a quick snack, a hearty meal, or a special occasion, 
        we've got you covered. Order now and experience the difference.
      </p>
      <div className="flex justify-center mb-8">
        <input type="text" placeholder="Search for your favorite food" className="px-4 py-2 rounded-l-lg"/>
        <button className="bg-green-500 text-white px-4 py-2 rounded-r-lg">Search</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img src="https://static.photos/art/900x600/175.webp" alt="Pizza" className="w-full h-64 object-cover mb-4"/>
          <h2 className="text-2xl font-bold mb-2">Pizza</h2>
          <p className="text-gray-700">Tasty pizza made with fresh ingredients.</p>
        </div>
        {/* Repeat the above div for each food item */}
      </div>
    </div>
  );
};

export default GeneratedComponent;