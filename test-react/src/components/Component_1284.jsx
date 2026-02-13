import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="flex justify-center items-center h-64 bg-white">
        <img src="https://static.photos/business/300x300/86.webp" alt="Logo" className="rounded-full w-32 h-32" />
      </header>

      <nav className="flex justify-center items-center h-16 bg-gray-800 text-white">
        <ul className="flex space-x-4">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <main className="flex flex-col items-center justify-center h-screen">
        <img src="https://static.photos/business/900x600/87.webp" alt="Hero Image" className="w-full h-full object-cover" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Learn More
        </button>
      </main>

      <footer className="flex justify-center items-center h-16 bg-gray-800 text-white">
        <ul className="flex space-x-4">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default GeneratedComponent;