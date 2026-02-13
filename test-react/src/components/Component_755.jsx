import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-white text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-gray-800">Interior Design Firm</h1>
          <p className="text-2xl font-bold text-gray-600">Creating Spaces You'll Love</p>
          <button className="mt-4 px-4 py-2 text-white bg-yellow-500 rounded">Get a Quote</button>
        </div>
      </header>

      <nav className="bg-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-gray-800">Interior Design Firm</a>
          <div>
            <a href="#" className="text-gray-600 hover:text-yellow-500 ml-4">Home</a>
            <a href="#" className="text-gray-600 hover:text-yellow-500 ml-4">About</a>
            <a href="#" className="text-gray-600 hover:text-yellow-500 ml-4">Services</a>
            <a href="#" className="text-gray-600 hover:text-yellow-500 ml-4">Projects</a>
            <a href="#" className="text-gray-600 hover:text-yellow-500 ml-4">Contact</a>
          </div>
        </div>
      </nav>

      <main className="py-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">Our Latest Projects</h2>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://static.photos/interior/900x600/157.webp" alt="Interior Design Project" className="rounded" />
            <img src="https://static.photos/interior/900x600/158.webp" alt="Interior Design Project" className="rounded" />
            <img src="https://static.photos/interior/900x600/159.webp" alt="Interior Design Project" className="rounded" />
            <img src="https://static.photos/interior/900x600/160.webp" alt="Interior Design Project" className="rounded" />
          </div>
        </div>
      </main>

      <footer className="bg-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">&copy; 2022 Interior Design Firm. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default GeneratedComponent;