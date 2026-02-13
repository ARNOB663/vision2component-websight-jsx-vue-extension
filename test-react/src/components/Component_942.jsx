import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-center">
        <nav className="flex justify-center">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-blue-500 hover:text-blue-800">Home</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-800">Shop</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-800">About</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-800">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex p-4">
        <aside className="w-1/4 p-4 bg-white">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-500 hover:text-blue-800">Men's Fashion</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-800">Women's Fashion</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-800">Accessories</a></li>
          </ul>
        </aside>

        <section className="w-3/4 p-4">
          <img src="https://static.photos/fashion/900x600/144.webp" alt="Fashion Item" className="w-full h-64 object-cover mb-4"/>
          <p className="text-lg font-bold mb-2">Welcome to our fashion store</p>
          <p className="text-gray-700">
            We are a fashion store that specializes in providing the latest and most stylish clothing, accessories, and shoes for men and women. Our mission is to provide our customers with high-quality, stylish, and affordable fashion items. We believe in the power of fashion to express individuality and style, and we strive to make our products not only functional, but also fashionable.
          </p>
        </section>
      </main>

      <footer className="bg-white p-4 text-center">
        <p className="text-gray-700">© 2022 Fashion Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;