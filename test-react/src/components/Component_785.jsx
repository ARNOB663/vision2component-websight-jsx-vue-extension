import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="flex items-center justify-between bg-white p-4">
        <img src="https://static.photos/restaurant/300x300/187.webp" alt="Logo" className="h-10" />
        <input type="text" placeholder="Enter delivery address" className="border border-gray-300 p-2 rounded" />
      </header>

      <main className="container mx-auto my-8 px-4">
        <h1 className="text-3xl mb-4">Our Food Delivery Services</h1>
        <p className="mb-8">
          Welcome to our food delivery service, where you can order your favorite meals from the comfort of your home. We offer a wide variety of cuisines from around the world, all prepared fresh and delivered to your doorstep. Our mission is to make food ordering as easy and convenient as possible, so you can enjoy the taste of your favorite meals without ever leaving your home.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <img src="https://static.photos/restaurant/900x600/188.webp" alt="Pizza" className="w-full h-48 object-cover mb-2" />
            <h2 className="text-xl mb-2">Pizza</h2>
            <p className="text-gray-600 mb-2">Delicious pizza made with fresh ingredients.</p>
            <p className="text-green-600 font-bold">$10.99</p>
          </div>
          {/* Repeat the above div for each food item */}
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;