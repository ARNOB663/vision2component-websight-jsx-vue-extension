import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-900 text-white">
      <header className="flex justify-center items-center h-64 bg-white text-black">
        <h1 className="text-4xl">Art Gallery</h1>
      </header>

      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white">Artist 1</a></li>
          <li><a href="#" className="text-white">Artist 2</a></li>
          <li><a href="#" className="text-white">Artist 3</a></li>
        </ul>
      </nav>

      <main className="grid grid-cols-3 gap-4 p-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="relative">
            <img src={`https://static.photos/art/900x600/${index + 1}.webp`} alt={`Art ${index + 1}`} />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300">
              <p className="absolute bottom-0 right-0 text-white p-2">Art {index + 1} details</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default GeneratedComponent;