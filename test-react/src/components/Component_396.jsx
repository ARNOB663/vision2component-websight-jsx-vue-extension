import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-green-100">
      <header className="bg-green-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Health Food Store</h1>
        <button className="bg-white text-green-500 px-4 py-2 rounded">Shop Now</button>
      </header>
      <div className="flex p-4">
        <div className="w-1/3 p-4">
          <h2 className="text-xl font-bold">Products</h2>
          {/* Product list goes here */}
        </div>
        <div className="w-1/3 p-4">
          <h2 className="text-xl font-bold">Blog</h2>
          {/* Blog posts go here */}
        </div>
        <div className="w-1/3 p-4">
          <h2 className="text-xl font-bold">Recipes</h2>
          {/* Recipe ideas go here */}
        </div>
      </div>
      <footer className="bg-green-500 text-white p-4 text-center">
        <p>© 2022 Health Food Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;