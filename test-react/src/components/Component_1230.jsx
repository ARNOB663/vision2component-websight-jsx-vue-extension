import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://static.photos/restaurant/300x300/32.webp" alt="Logo" className="h-10" />
          <nav className="ml-6">
            <a href="#" className="text-gray-900 hover:text-green-500 mr-4">Menu</a>
            <a href="#" className="text-gray-900 hover:text-green-500 mr-4">About Us</a>
            <a href="#" className="text-gray-900 hover:text-green-500">Contact</a>
          </nav>
        </div>
        <div>
          <input type="text" placeholder="Search..." className="border rounded p-2" />
        </div>
      </header>
      <main className="container mx-auto p-4">
        <h1 className="text-3xl mb-4">Welcome to Our Restaurant Chain</h1>
        <p className="mb-4">
          At our restaurant chain, we are committed to providing our customers with the best dining experience. Our menu features a variety of dishes, from classic favorites to innovative creations. We use only the freshest ingredients to ensure that every dish is prepared with the utmost care. Our friendly staff is always on hand to assist you in choosing the perfect dish for your meal.
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
          Order Online
        </button>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2022 Restaurant Chain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;