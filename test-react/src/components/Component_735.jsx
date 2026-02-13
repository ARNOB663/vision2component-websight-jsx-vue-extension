import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-center" style={{ backgroundImage: 'url("https://static.photos/animals/1600x900/136.webp")' }}>
      <header className="flex items-center justify-center p-4 bg-white">
        <img src="https://static.photos/animals/300x300/137.webp" alt="Logo" className="h-16" />
      </header>

      <nav className="flex items-center justify-center p-4 bg-white">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-green-500 hover:text-green-700">Home</a></li>
          <li><a href="#" className="text-green-500 hover:text-green-700">Products</a></li>
          <li><a href="#" className="text-green-500 hover:text-green-700">About</a></li>
          <li><a href="#" className="text-green-500 hover:text-green-700">Contact</a></li>
        </ul>
      </nav>

      <main className="container mx-auto p-4">
        <h1 className="text-4xl text-center">Welcome to our Retail Store</h1>
        <p className="text-xl text-center mt-4">We offer a wide range of products to meet your needs. From clothing and accessories to home goods and electronics, we have everything you need.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white p-4 shadow hover:shadow-lg">
            <img src="https://static.photos/animals/900x600/138.webp" alt="Clothing" className="w-full h-48 object-cover" />
            <h2 className="text-2xl mt-2">Clothing</h2>
            <p className="mt-2">Find the perfect clothing for every occasion.</p>
          </div>

          <div className="bg-white p-4 shadow hover:shadow-lg">
            <img src="https://static.photos/animals/900x600/139.webp" alt="Electronics" className="w-full h-48 object-cover" />
            <h2 className="text-2xl mt-2">Electronics</h2>
            <p className="mt-2">Discover the latest technology.</p>
          </div>

          <div className="bg-white p-4 shadow hover:shadow-lg">
            <img src="https://static.photos/animals/900x600/140.webp" alt="Home Goods" className="w-full h-48 object-cover" />
            <h2 className="text-2xl mt-2">Home Goods</h2>
            <p className="mt-2">Everything you need for your home.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;