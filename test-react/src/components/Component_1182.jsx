import React from 'react';

const ArtGallery = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-center items-center h-64">
          <img src="https://static.photos/art/300x300/184.webp" alt="Logo" className="h-32" />
        </header>
        <main className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded shadow p-4">
              <img src="https://static.photos/art/900x600/185.webp" alt="Art Piece" className="w-full h-64 object-cover mb-4" />
              <h2 className="text-xl font-bold mb-2">Artist Name</h2>
              <p className="text-gray-600 mb-2">Medium: Oil on Canvas</p>
              <p className="text-gray-600">Price: $1000</p>
            </div>
          </div>
          {/* Repeat the above div for each art piece */}
        </main>
        <aside className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
            {/* Add your events here */}
          </div>
        </aside>
        <aside className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-bold mb-4">Related Artist Spotlights</h2>
            {/* Add your spotlights here */}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ArtGallery;