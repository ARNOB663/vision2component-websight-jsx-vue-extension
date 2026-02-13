import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <img src="https://picsum.photos/seed/35/300/300" alt="Logo" className="mb-10" />
      <h1 className="text-4xl mb-10">Art Gallery</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white text-black p-4">
          <img src="https://picsum.photos/seed/35/900/600" alt="Painting" />
          <h2 className="text-2xl mb-2">Painting Title</h2>
          <h3 className="text-xl mb-2">Artist Name</h3>
          <p>This is a beautiful painting by the artist. It is a representation of the beauty of nature.</p>
        </div>
        <div className="bg-white text-black p-4">
          <img src="https://picsum.photos/seed/35/900/600" alt="Sculpture" />
          <h2 className="text-2xl mb-2">Sculpture Title</h2>
          <h3 className="text-xl mb-2">Artist Name</h3>
          <p>This is a beautiful sculpture by the artist. It is a representation of the beauty of human creativity.</p>
        </div>
        <div className="bg-white text-black p-4">
          <img src="https://picsum.photos/seed/35/900/600" alt="Drawing" />
          <h2 className="text-2xl mb-2">Drawing Title</h2>
          <h3 className="text-xl mb-2">Artist Name</h3>
          <p>This is a beautiful drawing by the artist. It is a representation of the beauty of human imagination.</p>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;