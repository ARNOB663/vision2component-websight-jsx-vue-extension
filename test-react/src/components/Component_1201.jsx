import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center min-h-screen py-2">
      <header className="text-center">
        <h1 className="text-4xl mb-3">Welcome to Our Art Gallery</h1>
        <p className="text-xl mb-6">Explore our collection of beautiful and unique art pieces.</p>
      </header>

      <main className="grid grid-cols-3 gap-4">
        <img src="https://static.photos/art/900x600/3.webp" alt="Art Piece 1" className="hover:scale-110 transition-transform" />
        <img src="https://static.photos/art/900x600/4.webp" alt="Art Piece 2" className="hover:scale-110 transition-transform" />
        <img src="https://static.photos/art/900x600/5.webp" alt="Art Piece 3" className="hover:scale-110 transition-transform" />
        {/* Add more images as needed */}
      </main>

      <footer className="mt-6">
        <p>© 2022 Art Gallery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;