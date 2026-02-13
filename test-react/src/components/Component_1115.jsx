import React from 'react';

const ArtGalleryItem = ({ imageUrl, description }) => (
  <div className="bg-white text-black p-4">
    <img src={imageUrl} alt="Artwork" />
    <p className="mt-2">{description}</p>
  </div>
);

const GeneratedComponent = () => (
  <div className="bg-black text-white">
    <header className="flex justify-between items-center p-4">
      <div>
        <h1 className="text-4xl">Art Gallery</h1>
      </div>
      <div>
        <button className="bg-white text-black px-4 py-2 rounded">Book Now</button>
      </div>
    </header>
    <main className="grid grid-cols-3 gap-4 p-4">
      <ArtGalleryItem 
        imageUrl="https://static.photos/art/900x600/117.webp" 
        description="This is a beautiful piece of artwork. It's a masterpiece of modern art. The colors are vibrant and the brush strokes are flowing. The artist has captured the beauty of the moment in a way that is timeless."
      />
      {/* Add more ArtGalleryItem components for each artwork */}
    </main>
  </div>
);

export default GeneratedComponent;