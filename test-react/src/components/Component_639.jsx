import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white text-center">
        <div className="mx-auto max-w-screen-xl p-4 md:p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Welcome to our Food Delivery Site</h1>
          <p className="text-xl md:text-2xl mb-8">We offer a wide variety of delicious food from different parts of the world. Order now and experience the best food delivery service in town.</p>
          <div className="flex flex-col md:flex-row justify-center items-center mb-8">
            <input type="text" className="w-full md:w-1/2 p-3 border border-gray-400 rounded mb-4 md:mb-0 md:mr-4" placeholder="Search for your favorite food" />
            <button className="w-full md:w-auto p-3 bg-purple-500 text-white rounded">Order Now</button>
          </div>
        </div>
      </header>
      <main className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <img src="https://static.photos/restaurant/900x600/41.webp" alt="Food Image" className="w-full" />
        </div>
        {/* Repeat the above div for as many food images as you want */}
      </main>
      <footer className="bg-white text-center p-4">
        <p className="mb-4">Popular Restaurants:</p>
        <ul className="mb-4">
          <li><a href="#" className="text-purple-500 hover:text-purple-700">Restaurant 1</a></li>
          <li><a href="#" className="text-purple-500 hover:text-purple-700">Restaurant 2</a></li>
          {/* Add more restaurants as needed */}
        </ul>
        <p>Delivery Areas:</p>
        <ul>
          <li><a href="#" className="text-purple-500 hover:text-purple-700">Area 1</a></li>
          <li><a href="#" className="text-purple-500 hover:text-purple-700">Area 2</a></li>
          {/* Add more delivery areas as needed */}
        </ul>
      </footer>
    </div>
  );
};

export default GeneratedComponent;