import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-200">
      <header className="relative">
        <img src="https://static.photos/art/900x600/52.webp" alt="Header Image" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="https://static.photos/art/300x300/53.webp" alt="Logo" className="h-16" />
        </div>
      </header>

      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4 justify-center">
          <li><a href="#artist-bios" className="hover:text-gray-300">Artist Bios</a></li>
          <li><a href="#exhibitions" className="hover:text-gray-300">Exhibitions</a></li>
          <li><a href="#shop" className="hover:text-gray-300">Shop</a></li>
        </ul>
      </nav>

      <main className="max-w-4xl mx-auto p-4">
        <section id="artist-bios" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Artist Bios</h2>
          <p className="text-gray-800">
            Artist bios are a brief introduction to the artists who create the art displayed in the gallery. They provide insight into the artists' personal and artistic histories, as well as their inspirations and influences.
          </p>
        </section>

        <section id="exhibitions" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Exhibitions</h2>
          <p className="text-gray-800">
            Exhibitions are a way to showcase the art of the artists. They can be temporary or permanent, and can be held in the gallery or in other locations. They can be themed or unthemed, and can be open to the public or not.
          </p>
        </section>

        <section id="shop" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Shop</h2>
          <p className="text-gray-800">
            The online shop is a place where you can purchase the art displayed in the gallery. It's a great way to support the artists and to get your hands on some of the best art.
          </p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;