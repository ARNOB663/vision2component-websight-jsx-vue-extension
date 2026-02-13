import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="antialiased bg-gray-200">
      <header className="relative">
        <img src="https://static.photos/fashion/900x600/178.webp" alt="Fashion Header Image" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Welcome to our Fashion Brand</h1>
            <p className="text-xl mt-4">We are a fashion brand that offers a wide range of high-quality products. Our mission is to provide our customers with the best possible shopping experience.</p>
            <button className="mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Shop Now
            </button>
          </div>
        </div>
      </header>

      <div className="flex mt-8">
        <aside className="w-1/4 p-4">
          <h2 className="text-2xl font-bold">Categories</h2>
          {/* Add your categories here */}
        </aside>

        <main className="w-2/4 p-4">
          <h2 className="text-2xl font-bold">Products</h2>
          {/* Add your products here */}
        </main>

        <aside className="w-1/4 p-4">
          <h2 className="text-2xl font-bold">Reviews</h2>
          {/* Add your reviews here */}
        </aside>
      </div>
    </div>
  );
};

export default GeneratedComponent;