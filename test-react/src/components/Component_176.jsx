import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">Art Gallery</h1>
        <p className="text-lg text-center text-gray-600 mt-4">
          Welcome to our art gallery, where you can find a wide variety of art pieces from around the world. Our collection is carefully curated to showcase the beauty and diversity of art.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img className="w-full" src="https://picsum.photos/seed/176/900/600" alt="Artwork 1"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Artwork 1</div>
              <p className="text-gray-700 text-base">
                This is a beautiful piece of art. It's a masterpiece of its time.
              </p>
            </div>
            <div className="px-6 py-4">
              <a href="#" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                View Details
              </a>
            </div>
          </div>
          {/* Repeat the above div for each artwork */}
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;