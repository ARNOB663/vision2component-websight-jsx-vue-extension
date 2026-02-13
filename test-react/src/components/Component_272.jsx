import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white text-center">
        <div className="text-gray-800 py-10 px-6">
          <img className="h-10" src="https://picsum.photos/seed/272/300/300" alt="Food Truck Logo" />
          <nav className="flex items-center justify-between flex-wrap py-6 px-4">
            <a href="#" className="text-gray-800 hover:text-gray-600 mr-6">Menu</a>
            <a href="#" className="text-gray-800 hover:text-gray-600 mr-6">Order Now</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Book a Truck</a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-10 px-6">
        <h1 className="text-4xl text-center">Welcome to Our Food Truck</h1>
        <p className="text-xl text-center my-6">We offer a wide variety of delicious food items made from the freshest ingredients. Our trucks are a fun and lively way to enjoy your favorite meals.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img className="h-48 w-full object-cover mb-4" src="https://picsum.photos/seed/272/900/600" alt="Burger" />
            <h2 className="text-2xl mb-2">Burger</h2>
            <p className="text-gray-600 mb-2">A juicy, delicious burger made with the finest beef.</p>
            <p className="text-gray-800">$10</p>
          </div>
          {/* Repeat the above div for each food item */}
        </div>
      </main>
      <footer className="bg-white text-center text-gray-800 py-6">
        {/* Add your social media icons here */}
        <p>© 2022 Food Truck Business. All rights reserved.</p>
      </footer>
    </div>
  );
};

export { GeneratedComponent };