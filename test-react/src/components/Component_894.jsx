import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <img src="https://static.photos/interior/300x300/96.webp" alt="Logo" className="h-10" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">News</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Sports</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Entertainment</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="#"><img src="https://static.photos/interior/900x600/97.webp" alt="Facebook" className="h-6" /></a>
            <a href="#"><img src="https://static.photos/interior/900x600/98.webp" alt="Twitter" className="h-6" /></a>
            <a href="#"><img src="https://static.photos/interior/900x600/99.webp" alt="Instagram" className="h-6" /></a>
          </div>
        </header>
        <main>
          <h1 className="text-3xl font-bold mb-4">Welcome to our News Website</h1>
          <p className="mb-4">This is a modern, sleek layout with a wide news feed on the homepage, featuring clear headlines and bold images. The logo is at the top left, and the navigation menu is horizontally positioned above it, with social media icons to the right.</p>
          {/* Add your news feed here */}
        </main>
      </div>
    </div>
  );
};

export default GeneratedComponent;