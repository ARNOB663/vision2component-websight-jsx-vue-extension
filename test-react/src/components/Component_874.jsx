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
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Menu
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About Us
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <header className="w-full bg-white p-12 flex justify-center">
        <img src="https://static.photos/restaurant/900x600/76.webp" alt="Banner Image" className="w-full h-auto" />
      </header>

      <section className="text-center p-8">
        <h1 className="text-4xl mb-4">Welcome to Our Restaurant</h1>
        <p className="text-lg mb-8">
          At our restaurant, we believe in the power of good food to bring people together. Our menu is a celebration of the finest ingredients, carefully sourced from around the world, and presented using traditional and modern cooking techniques. We are proud to offer a warm and inviting atmosphere, where you can enjoy a delicious meal with family and friends.
        </p>
        <div className="flex justify-center">
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mr-4">
            Make a Reservation
          </button>
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            Order Online
          </button>
        </div>
      </section>
    </div>
  );
};

export default GeneratedComponent;