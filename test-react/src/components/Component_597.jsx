import React from 'react';

const Artwork = ({ imageSrc, title, description }) => (
  <div className="border border-white">
    <img src={imageSrc} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const GeneratedComponent = () => (
  <>
    <header className="flex justify-center items-center h-64">
      <img src="https://static.photos/art/300x300/199.webp" alt="Art Gallery Logo" className="h-32" />
    </header>
    <nav className="flex justify-center items-center h-16">
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-gray-400">Home</a></li>
        <li><a href="#" className="hover:text-gray-400">Artworks</a></li>
        <li><a href="#" className="hover:text-gray-400">Artists</a></li>
        <li><a href="#" className="hover:text-gray-400">About</a></li>
        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
    <main className="grid grid-cols-3 gap-4 p-4">
      <Artwork 
        imageSrc="https://static.photos/art/900x600/200.webp" 
        title="Artwork 1" 
        description="This is a beautiful piece of art. It is a masterpiece of the artist's skill and creativity."
      />
      {/* Add more Artwork components as needed */}
    </main>
  </>
);

export default GeneratedComponent;