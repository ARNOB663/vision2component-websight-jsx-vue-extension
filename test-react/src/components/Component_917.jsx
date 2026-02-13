import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-fuchsia-200 container mx-auto px-4">
      <header className="py-4">
        <h1 className="text-4xl text-pink-800 text-center">Welcome to our Children's Toys Store</h1>
        <p className="text-center text-pink-800">We offer a wide range of toys for your children. From educational games to interactive dolls, we have everything you need to brighten up your child's day.</p>
      </header>

      <div className="relative">
        <div className="w-full overflow-x-auto whitespace-nowrap">
          <img className="inline-block w-1/3" src="https://static.photos/fashion/900x600/119.webp" alt="Toy Image" />
          <img className="inline-block w-1/3" src="https://static.photos/fashion/900x600/120.webp" alt="Toy Image" />
          <img className="inline-block w-1/3" src="https://static.photos/fashion/900x600/121.webp" alt="Toy Image" />
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/3 p-4">
          <h2 className="text-2xl text-pink-800">Product Categories</h2>
          <ul className="list-disc list-inside">
            <li>Educational Toys</li>
            <li>Interactive Dolls</li>
            <li>Outdoor Toys</li>
          </ul>
        </div>

        <div className="w-full lg:w-2/3 p-4">
          <h2 className="text-2xl text-pink-800">Featured Toys</h2>
          {/* Add your product grid here */}
        </div>
      </div>

      <footer className="py-4">
        <p className="text-center">Follow us on social media:</p>
        <div className="flex justify-center">
          <a href="#" className="px-2">Facebook</a>
          <a href="#" className="px-2">Twitter</a>
          <a href="#" className="px-2">Instagram</a>
        </div>
        <div className="flex justify-center">
          <a href="#" className="px-2">FAQ</a>
          <a href="#" className="px-2">Contact Us</a>
          <a href="#" className="px-2">Shipping Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;