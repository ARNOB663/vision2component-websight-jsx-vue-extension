import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-yellow-500 text-center py-6">
        <h1 className="text-4xl text-white">Food Delivery Service</h1>
      </header>

      <main className="container mx-auto p-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-6">
            <img src="https://static.photos/food/900x600/121.webp" alt="Food Image" className="w-full"/>
          </div>

          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl mb-4">Menu</h2>
            {/* Add your menu items here */}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© 2022 Food Delivery Service. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;