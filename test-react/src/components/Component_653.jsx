import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4">
        <img src="https://static.photos/fashion/300x300/55.webp" alt="Logo" className="h-10" />
      </header>

      <nav className="bg-white p-4">
        <ul className="flex justify-around">
          <li><a href="#" className="text-purple-500 hover:text-purple-800">Home</a></li>
          <li><a href="#" className="text-purple-500 hover:text-purple-800">Collections</a></li>
          <li><a href="#" className="text-purple-500 hover:text-purple-800">About Us</a></li>
          <li><a href="#" className="text-purple-500 hover:text-purple-800">Contact</a></li>
        </ul>
      </nav>

      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Latest Collections</h1>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <img src="https://static.photos/fashion/900x600/56.webp" alt="Fashion" className="mb-4" />
            <p className="text-gray-700">This is a colorful and playful design with a prominent logo in the top-left corner. The main navigation menu spans the entire width of the page, and the homepage showcases the latest collections with large images and descriptive text.</p>
          </div>
          {/* Repeat the above div for each collection */}
        </div>
      </main>

      <footer className="bg-white p-4">
        <div className="flex justify-around">
          <a href="#" className="text-purple-500 hover:text-purple-800">Facebook</a>
          <a href="#" className="text-purple-500 hover:text-purple-800">Twitter</a>
          <a href="#" className="text-purple-500 hover:text-purple-800">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;