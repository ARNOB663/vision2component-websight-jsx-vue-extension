import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-purple-500 text-white p-4">
        <h1 className="text-2xl font-bold">E-commerce Store</h1>
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white hover:underline">Home</a></li>
            <li><a href="#" className="text-white hover:underline">Products</a></li>
            <li><a href="#" className="text-white hover:underline">About Us</a></li>
            <li><a href="#" className="text-white hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow p-4">
        <div className="flex flex-col items-center">
          <img src="https://picsum.photos/seed/81/900/600" alt="E-commerce Store" className="w-full max-w-lg mb-4"/>
          <p className="text-center text-lg">
            Welcome to our e-commerce store, where we offer a wide range of high-quality products at affordable prices. We pride ourselves on our excellent customer service and our commitment to providing our customers with the best possible shopping experience. Whether you're looking for the latest fashion trends, cutting-edge technology, or unique gifts, we've got you covered. Browse our collection and find the perfect products for you.
          </p>
        </div>
      </main>
      <footer className="bg-purple-500 text-white p-4 text-center">
        <p>© 2022 E-commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;