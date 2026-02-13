import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Restaurant Name</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#reservations" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Reservations
            </a>
            <a href="#menu" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Menu
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Restaurant Name</h1>
        <p className="text-lg mb-4">
          At Restaurant Name, we believe in the power of good food to bring people together. Our menu features a wide variety of mouth-watering dishes, all made from the freshest ingredients. Whether you're in the mood for a hearty pasta dish or a light and refreshing salad, we've got you covered.
        </p>
        <p className="text-lg mb-4">
          We're committed to providing a warm and welcoming atmosphere for all our guests. Our friendly staff is always on hand to ensure your dining experience is nothing short of exceptional.
        </p>
        <div className="flex justify-center">
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mr-2">
            Make a Reservation
          </button>
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            Order Online
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;