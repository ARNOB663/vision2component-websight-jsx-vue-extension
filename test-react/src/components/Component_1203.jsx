import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-yellow-100">
      <header className="flex flex-col items-center py-4">
        <img src="https://static.photos/interior/300x300/5.webp" alt="Logo" className="w-32 h-32" />
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-indigo-500 hover:text-indigo-700">Home</a></li>
            <li><a href="#" className="text-indigo-500 hover:text-indigo-700">Shop</a></li>
            <li><a href="#" className="text-indigo-500 hover:text-indigo-700">About</a></li>
            <li><a href="#" className="text-indigo-500 hover:text-indigo-700">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="mt-8">
        <div className="relative">
          <img src="https://static.photos/interior/900x600/6.webp" alt="Sliding Banner" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl text-white">Welcome to our Art Supply Store</h1>
          </div>
        </div>
      </section>

      <main className="mt-8">
        <h2 className="text-2xl text-center">Our Products</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded shadow">
            <img src="https://static.photos/interior/900x600/7.webp" alt="Product 1" className="w-full" />
            <h3 className="text-xl mt-2">Paint</h3>
            <p className="mt-2">Our paint is made from the finest materials and is guaranteed to last for years to come.</p>
          </div>
          {/* Repeat the above div for each product */}
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;