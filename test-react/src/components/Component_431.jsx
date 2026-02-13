import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="flex justify-center items-center h-64 bg-gray-200">
        <img src="https://static.photos/business/300x300/33.webp" alt="Logo" className="h-20" />
      </header>

      <nav className="flex justify-center items-center h-16 bg-gray-300">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Home</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">About</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Services</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Contact</a></li>
        </ul>
      </nav>

      <main className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-3 gap-4">
          <div className="relative">
            <img src="https://static.photos/business/900x600/34.webp" alt="Event 1" className="w-full" />
            <div className="absolute inset-0 flex justify-center items-center">
              <p className="text-white text-2xl">Event 1</p>
            </div>
          </div>
          {/* Repeat the above structure for each event */}
        </div>
      </main>

      <footer className="flex justify-center items-center h-64 bg-gray-200">
        <p className="text-gray-800">© 2022 Event Planning Company. All rights reserved.</p>
      </footer>
    </>
  );
};

export default GeneratedComponent;