import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-6">
        <img src="https://static.photos/fashion/900x600/90.webp" alt="Header Image" className="w-full" />
        <div className="flex justify-center mt-6">
          <input type="text" placeholder="Search for products..." className="w-1/2 p-2 rounded-lg" />
        </div>
      </header>
      <main className="flex justify-between p-6">
        <div className="w-2/3">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">Product 1</div>
            <div className="bg-white p-6 rounded-lg">Product 2</div>
            <div className="bg-white p-6 rounded-lg">Product 3</div>
            {/* Add more products as needed */}
          </div>
        </div>
        <aside className="w-1/3">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <ul>
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
              {/* Add more categories as needed */}
            </ul>
          </div>
        </aside>
      </main>
      <footer className="bg-white p-6">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              {/* Add more social media links as needed */}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Newsletter</h2>
            <form>
              <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-lg" />
              <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;