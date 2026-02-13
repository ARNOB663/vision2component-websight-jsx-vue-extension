import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4">
        <nav className="flex justify-between items-center">
          <div>
            <a href="#" className="text-gray-800 text-xl font-bold">Art Gallery</a>
          </div>
          <div>
            <a href="#" className="text-gray-600 mr-4">Home</a>
            <a href="#" className="text-gray-600 mr-4">About</a>
            <a href="#" className="text-gray-600">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="mt-8">
          <img src="https://static.photos/art/900x600/101.webp" alt="Art Gallery" className="w-full" />
        </section>

        <section className="mt-8 px-4">
          <h2 className="text-2xl font-bold text-gray-800">Welcome to our Art Gallery</h2>
          <p className="mt-4 text-gray-600">
            At our Art Gallery, we are dedicated to showcasing the beauty and diversity of art from around the world. Our collection includes paintings, sculptures, photographs, and more. We believe that art has the power to inspire, educate, and bring people together. Whether you're a seasoned collector or a beginner, we invite you to explore our collection and discover the beauty of art.
          </p>
        </section>

        <section className="mt-8 px-4">
          <h2 className="text-2xl font-bold text-gray-800">Gallery Preview</h2>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <img src="https://static.photos/art/900x600/102.webp" alt="Art 1" className="w-full" />
            <img src="https://static.photos/art/900x600/103.webp" alt="Art 2" className="w-full" />
            <img src="https://static.photos/art/900x600/104.webp" alt="Art 3" className="w-full" />
            <img src="https://static.photos/art/900x600/105.webp" alt="Art 4" className="w-full" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;