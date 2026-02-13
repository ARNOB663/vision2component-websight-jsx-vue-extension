import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="relative">
        <img src="https://static.photos/business/900x600/134.webp" alt="Header Image" className="w-full" />
        <nav className="absolute top-0 right-0 p-4">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">About</a></li>
            <li><a href="#" className="text-white">Services</a></li>
            <li><a href="#" className="text-white">Contact</a></li>
          </ul>
        </nav>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <img src="https://static.photos/business/300x300/135.webp" alt="Logo" className="mx-auto" />
          <h1 className="text-4xl text-white">Welcome to Our Tech Company</h1>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <div className="flex justify-around">
          <div className="w-1/3 p-4 bg-white rounded shadow">
            <h2 className="text-2xl">Column 1</h2>
            <p>This is the first column of our main content. It's designed to be soft, calming colors and floating action buttons.</p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Action
            </button>
          </div>
          <div className="w-1/3 p-4 bg-white rounded shadow">
            <h2 className="text-2xl">Column 2</h2>
            <p>This is the second column of our main content. It's designed to be soft, calming colors and floating action buttons.</p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Action
            </button>
          </div>
          <div className="w-1/3 p-4 bg-white rounded shadow">
            <h2 className="text-2xl">Column 3</h2>
            <p>This is the third column of our main content. It's designed to be soft, calming colors and floating action buttons.</p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Action
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;