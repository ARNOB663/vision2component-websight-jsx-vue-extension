import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="bg-fixed bg-center bg-cover h-screen flex items-end p-10" style={{ backgroundImage: "url('https://static.photos/art/1600x900/78.webp')" }}>
        <div className="bg-black bg-opacity-50 w-full h-full absolute"></div>
        <div className="text-white p-5">
          <h1 className="text-4xl">Art Gallery</h1>
          <p className="text-xl">Welcome to our art gallery, where you can find a wide variety of art pieces from various artists.</p>
        </div>
      </div>
      <nav className="flex justify-center p-5">
        <a href="#" className="px-5">Home</a>
        <a href="#" className="px-5">Exhibitions</a>
        <a href="#" className="px-5">Artists</a>
        <a href="#" className="px-5">Contact</a>
      </nav>
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <img src="https://static.photos/art/900x600/79.webp" alt="Art Piece 1" />
            <h2>Art Piece 1</h2>
            <p>Artist Name 1</p>
          </div>
          {/* Repeat the above div for each art piece */}
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-5 text-center">
        <p>© 2022 Art Gallery. All rights reserved.</p>
        {/* Add links to artist profiles and contact information here */}
      </footer>
    </div>
  );
};

export default GeneratedComponent;