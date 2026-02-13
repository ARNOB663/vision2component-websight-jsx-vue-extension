import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="flex justify-center items-center h-64 bg-white">
        <img src="https://static.photos/business/300x300/156.webp" alt="Logo" className="h-24" />
      </header>

      <nav className="flex justify-center items-center h-16 bg-gray-800 text-white">
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Services</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>

      <main className="flex flex-col items-center p-8 space-y-8">
        <section className="flex flex-col items-center space-y-4 bg-white p-8 w-full max-w-2xl">
          <h2 className="text-2xl">Section 1</h2>
          <p className="text-center">This is the first section of our website. It's designed to provide information about our company and its services.</p>
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </section>

        <section className="flex flex-col items-center space-y-4 bg-gray-800 text-white p-8 w-full max-w-2xl">
          <h2 className="text-2xl">Section 2</h2>
          <p className="text-center">This is the second section of our website. It's designed to provide more detailed information about our services and how we can help you.</p>
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </section>
      </main>

      <footer className="flex justify-center items-center h-32 bg-gray-800 text-white">
        <p>Footer content goes here</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;