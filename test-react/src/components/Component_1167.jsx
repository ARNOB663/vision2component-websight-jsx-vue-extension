import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white shadow">
        <div className="container mx-auto flex flex-col p-5 md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Home Improvement Store</span>
          </a>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
            <a href="#" className="mr-5 hover:text-gray-900">Home</a>
            <a href="#" className="mr-5 hover:text-gray-900">Products</a>
            <a href="#" className="mr-5 hover:text-gray-900">About</a>
            <a href="#" className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
          <div className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input type="text" placeholder="Search" className="bg-transparent border-none focus:outline-none" />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-5 py-24">
        <h1 className="text-3xl font-bold mb-5">Welcome to our Home Improvement Store</h1>
        <p className="mb-5">At our store, we offer a wide range of high-quality home improvement products. Whether you're looking for tools, materials, or advice, we've got you covered. Our products are carefully selected to ensure they meet the highest standards of quality and durability. We pride ourselves on our excellent customer service and our commitment to providing you with the best possible shopping experience.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Product cards go here */}
        </div>
      </main>
      <footer className="bg-white">
        <div className="container mx-auto px-5 py-6">
          <p className="text-sm text-gray-400">© 2022 Home Improvement Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;