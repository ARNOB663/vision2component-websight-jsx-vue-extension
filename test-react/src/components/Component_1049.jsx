import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="bg-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <a className="text-xl text-black font-bold" href="#">Music Streaming Platform</a>
          </div>
          <div>
            <a className="text-black no-underline ml-4" href="#">Home</a>
            <a className="text-black no-underline ml-4" href="#">About</a>
            <a className="text-black no-underline ml-4" href="#">Contact</a>
          </div>
        </div>
      </nav>
      <div className="flex-grow bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/business/1600x900/50.webp')" }}>
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl">Welcome to Music Streaming Platform</h1>
            <p className="text-xl mt-4">We are a leading music streaming platform, providing a vast collection of music from various genres. Our mission is to make music accessible to everyone, everywhere.</p>
          </div>
        </div>
      </div>
      <footer className="bg-white p-6 text-center">
        <p className="text-black">© 2022 Music Streaming Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;