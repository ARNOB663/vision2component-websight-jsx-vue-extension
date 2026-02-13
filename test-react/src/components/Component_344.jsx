import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl text-center mb-4">Art Gallery</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img className="w-full" src="https://picsum.photos/seed/344/900/600" alt="Art 1"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Art 1</div>
              <p className="text-gray-700 text-base">
                This is a beautiful piece of art. It is a representation of the beauty of nature. The artist has captured the essence of the beauty of the forest in this piece.
              </p>
            </div>
          </div>
          {/* Repeat the above div for each piece of art */}
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;