import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex">
        {/* Left side menu */}
        <div className="w-1/4 bg-white p-4">
          <h2 className="text-lg font-bold">Menu</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Center focused product display */}
        <div className="w-3/4 p-4">
          <h1 className="text-2xl font-bold">Welcome to our fashion brand</h1>
          <p className="my-4">
            We are a fashion brand that specializes in creating unique and stylish clothing for all occasions. Our collections are designed to make you feel confident and beautiful.
          </p>
          <div className="flex flex-wrap">
            {/* Product cards */}
            <div className="w-1/3 p-2">
              <div className="bg-white p-4">
                <img src="https://static.photos/fashion/900x600/51.webp" alt="Product 1" />
                <h3 className="text-lg font-bold">Product 1</h3>
                <p>$100</p>
              </div>
            </div>
            {/* More product cards */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;