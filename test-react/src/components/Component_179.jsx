import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="relative">
        <img src="https://picsum.photos/seed/179/900/600" alt="Fashion Header Image" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl">Welcome to our Fashion Brand</h1>
            <p className="text-xl mt-4">We are a brand that values quality, style, and comfort. Our products are designed to make you feel confident and beautiful.</p>
            <button className="mt-4 bg-white text-black px-4 py-2 rounded">Shop Now</button>
          </div>
        </div>
      </header>

      <main className="flex">
        <div className="w-3/4 p-4">
          <h2 className="text-2xl mb-4">Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>Category 1</div>
            <div>Category 2</div>
            <div>Category 3</div>
            <div>Category 4</div>
          </div>
        </div>

        <aside className="w-1/4 bg-gray-200 p-4">
          <h2 className="text-2xl mb-4">Filters</h2>
          <p>Filter 1</p>
          <p>Filter 2</p>
          <p>Filter 3</p>

          <h2 className="text-2xl mt-8 mb-4">Recommendations</h2>
          <p>Recommendation 1</p>
          <p>Recommendation 2</p>
          <p>Recommendation 3</p>
        </aside>
      </main>

      <footer className="flex bg-gray-800 text-white p-4">
        <div className="w-1/3">
          <h2 className="text-2xl mb-4">Follow Us</h2>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div className="w-1/3">
          <h2 className="text-2xl mb-4">Newsletter</h2>
          <input type="email" placeholder="Enter your email" className="w-full p-2" />
          <button className="bg-white text-black px-4 py-2 mt-2">Subscribe</button>
        </div>

        <div className="w-1/3">
          <h2 className="text-2xl mb-4">Contact Us</h2>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@fashionbrand.com</p>
          <p>Address: 123 Street, City, State, Zip</p>
        </div>
      </footer>
    </>
  );
};

export default GeneratedComponent;