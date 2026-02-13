import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="flex items-center justify-between bg-white p-4">
        <img src="https://static.photos/art/300x300/6.webp" alt="Logo" className="h-10" />
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-800 hover:text-indigo-500">Home</a></li>
            <li><a href="#" className="text-gray-800 hover:text-indigo-500">About</a></li>
            <li><a href="#" className="text-gray-800 hover:text-indigo-500">Portfolio</a></li>
            <li><a href="#" className="text-gray-800 hover:text-indigo-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto my-8 px-4">
        {/* Masonry grid layout */}
        <div className="columns-2 md:columns-3 lg:columns-4">
          {/* Replace with your images */}
          <img src="https://static.photos/art/900x600/7.webp" alt="Architecture" className="mb-4" />
          {/* Repeat for other images */}
        </div>
      </main>

      <footer className="bg-white p-4 text-center text-gray-800">
        <p>© 2022 Architectural Firm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;