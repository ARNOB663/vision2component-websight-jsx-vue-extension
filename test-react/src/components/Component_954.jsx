import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/art/1600x900/155.webp')" }}>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center h-full">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white leading-tight mt-0 mb-2">Art Gallery</h1>
            <p className="text-2xl font-light text-white mb-8">Explore the world of art with us</p>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-6 pt-10 pb-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Featured Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full" src="https://static.photos/art/900x600/156.webp" alt="Artist 1"/>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Artist 1</h3>
              <p className="text-gray-700 text-base">
                Artist 1 is a renowned artist known for his unique style of painting. His works are characterized by bold colors and a unique perspective.
              </p>
            </div>
          </div>
          {/* Repeat the above div for each artist */}
        </div>
      </section>
    </>
  );
};

export default GeneratedComponent;