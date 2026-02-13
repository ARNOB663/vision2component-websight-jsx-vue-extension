import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-black text-white">
      <header className="flex justify-center items-center h-64">
        <img src="https://static.photos/art/300x300/114.webp" alt="Logo" className="h-32" />
      </header>
      <nav className="flex justify-center items-center h-16 bg-gray-800">
        <ul className="flex space-x-8">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#artists" className="hover:text-gray-400">Artists</a></li>
          <li><a href="#artworks" className="hover:text-gray-400">Artworks</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
      <main className="flex justify-center items-center h-screen">
        <div className="flex space-x-8">
          <div className="w-1/2">
            <img src="https://static.photos/art/900x600/115.webp" alt="Artwork" />
            <p>This is a beautiful piece of art by the artist. It is a masterpiece of the artist's style. The artist used a unique technique to create this piece.</p>
          </div>
          <div className="w-1/2">
            <img src="https://static.photos/art/900x600/116.webp" alt="Artist" />
            <p>This is the artist. He is a well-known artist in the field of art. He has been creating art for many years and has a unique style.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;