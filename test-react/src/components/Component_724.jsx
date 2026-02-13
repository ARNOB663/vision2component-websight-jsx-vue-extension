import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-white py-4 md:py-0 px-4">
        <div className="flex items-center">
          <img src="https://static.photos/fashion/300x300/126.webp" alt="Logo" className="h-10" />
        </div>
        <nav className="flex items-center">
          <a href="#" className="px-4 py-2 text-black hover:text-purple-500">Home</a>
          <a href="#" className="px-4 py-2 text-black hover:text-purple-500">Shop</a>
          <a href="#" className="px-4 py-2 text-black hover:text-purple-500">About</a>
          <a href="#" className="px-4 py-2 text-black hover:text-purple-500">Contact</a>
        </nav>
      </header>
      <main className="relative">
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('https://static.photos/fashion/1600x900/125.webp')" }}>
          <div className="container relative mx-auto flex h-full items-center px-4">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold">Welcome to our Fashion Retailer</h1>
              <p className="text-2xl">We are a premier fashion retailer, offering a wide range of high-quality apparel and accessories. Our mission is to provide our customers with the latest fashion trends at affordable prices. We believe in sustainability and strive to create a positive impact on the environment.</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white py-4 px-4 text-center text-gray-500">
        <p>© 2022 Fashion Retailer. All rights reserved.</p>
      </footer>
    </>
  );
};

export default GeneratedComponent;