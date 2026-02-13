import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-purple-800 text-white">
      <nav className="bg-purple-900 p-4">
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-purple-300">Home</a></li>
          <li><a href="#" className="hover:text-purple-300">Artists</a></li>
          <li><a href="#" className="hover:text-purple-300">Exhibitions</a></li>
          <li><a href="#" className="hover:text-purple-300">Contact</a></li>
        </ul>
      </nav>

      <main className="container mx-auto p-4">
        <h1 className="text-4xl mb-4">Welcome to our Art Gallery</h1>
        <p className="mb-4">
          At our art gallery, we celebrate the beauty of art and the diversity of artists. We believe that art is a powerful tool for self-expression and understanding of the world. We host a wide variety of art pieces from various artists, each piece representing a unique perspective and style.
        </p>
        <p className="mb-4">
          Our gallery is designed to be a peaceful and inspiring space, where you can relax and appreciate the beauty of art. We offer a wide range of art pieces, from paintings to sculptures, photography, and more. We also host special exhibitions featuring the work of local and international artists.
        </p>
        <p className="mb-4">
          We believe that art is not just a painting or a sculpture, but a way of life. We invite you to join us in our journey of discovery and appreciation of art.
        </p>

        {/* Mosaic layout with images */}
        <div className="grid grid-cols-3 gap-4">
          <img src="https://static.photos/art/900x600/194.webp" alt="Art Piece" className="rounded"/>
          <img src="https://static.photos/art/900x600/195.webp" alt="Art Piece" className="rounded"/>
          <img src="https://static.photos/art/900x600/196.webp" alt="Art Piece" className="rounded"/>
          {/* Add more images as needed */}
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;