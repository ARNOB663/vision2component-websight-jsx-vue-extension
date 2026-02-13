import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-900 text-white">
      <header className="fixed top-0 w-full">
        <nav className="flex justify-between items-center p-4">
          <img src="https://picsum.photos/seed/191/300/300" alt="Logo" className="h-10" />
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Services</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
          <div className="flex space-x-4">
            <a href="#"><img src="https://picsum.photos/seed/191/900/600" alt="Facebook" className="h-6" /></a>
            <a href="#"><img src="https://picsum.photos/seed/191/900/600" alt="Twitter" className="h-6" /></a>
            <a href="#"><img src="https://picsum.photos/seed/191/900/600" alt="Instagram" className="h-6" /></a>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Tech Startup</h1>
        <p className="text-center max-w-lg mb-8">
          At our tech startup, we are dedicated to providing innovative and cutting-edge solutions to our clients. Our team of experts is committed to delivering high-quality products and services that meet the needs of our clients.
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </main>

      <footer className="fixed bottom-0 w-full bg-gray-800 p-4 text-center">
        <p>© 2022 Tech Startup. All rights reserved.</p>
      </footer>
    </div>
  );
};

export { GeneratedComponent };