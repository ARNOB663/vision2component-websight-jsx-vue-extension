import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-white p-6 flex justify-between items-center">
        <img src="https://static.photos/art/300x300/163.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Artworks</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="py-10">
        <section className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Welcome to our Art Gallery</h1>
          <p className="mb-6">
            We are a premier art gallery dedicated to showcasing the finest works of art from around the world. Our collection spans a wide range of styles and periods, from the Renaissance to the present day. We believe in the power of art to inspire, educate, and connect people from all walks of life.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <img src="https://static.photos/art/900x600/164.webp" alt="Artwork" className="rounded" />
            <img src="https://static.photos/art/900x600/165.webp" alt="Artwork" className="rounded" />
            <img src="https://static.photos/art/900x600/166.webp" alt="Artwork" className="rounded" />
            {/* Add more images as needed */}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-6">
        <p>© 2022 Art Gallery. All rights reserved.</p>
      </footer>
    </>
  );
};

export default GeneratedComponent;