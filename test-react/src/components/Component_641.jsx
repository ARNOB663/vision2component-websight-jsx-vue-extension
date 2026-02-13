import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white shadow">
        <div className="container mx-auto flex flex-col px-4 py-5 md:flex-row items-center">
          <img className="w-full h-48 object-cover md:w-1/3 md:h-auto md:rounded-none rounded-full mx-auto" src="https://static.photos/restaurant/900x600/43.webp" alt="Food Image" />
          <div className="flex flex-col justify-center p-4 leading-normal md:p-10">
            <h5 className="text-2xl font-bold">Contact Information</h5>
            <p className="text-gray-600">123 Main St, Anytown, USA</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
            <p className="text-gray-600">Email: info@restaurant.com</p>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-5 md:p-10">
          <h1 className="text-4xl font-bold">Welcome to Our Restaurant</h1>
          <p className="py-6">
            At our restaurant, we believe in the power of good food to bring people together. Our menu features a wide variety of dishes, from classic comfort food to unique and innovative dishes. We use only the freshest ingredients to ensure that every dish is not only delicious, but also healthy. Our friendly and knowledgeable staff is always here to make your dining experience as enjoyable as possible.
          </p>
          {/* Add your map here */}
        </div>
      </main>
      <footer className="bg-white">
        <div className="container mx-auto px-4 py-5 md:p-10">
          <p className="text-center text-gray-600">© 2022 Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;