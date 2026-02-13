import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="fixed top-0 w-full bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <img src="https://static.photos/fashion/300x300/28.webp" alt="Logo" className="h-8" />
          <div className="flex items-center">
            <img src="https://static.photos/fashion/900x600/29.webp" alt="Cart" className="h-6 mr-2" />
            <span className="text-sm">Cart (0)</span>
          </div>
        </div>
      </header>

      <nav className="container mx-auto mt-16 px-4 py-2">
        <ul className="flex justify-center space-x-4">
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Shop</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>

      <main className="container mx-auto mt-32 px-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md hover:shadow-lg">
            <img src="https://static.photos/fashion/900x600/30.webp" alt="Flower" className="w-full" />
            <div className="p-4">
              <h2 className="text-lg font-bold">Flower 1</h2>
              <p className="text-gray-600">A beautiful flower with a unique color scheme.</p>
              <button className="mt-2 bg-yellow-500 text-white px-4 py-2 hover:bg-yellow-600">Add to Cart</button>
            </div>
          </div>
          {/* Repeat the above div for each product */}
        </div>
      </main>
    </>
  );
};

export default GeneratedComponent;