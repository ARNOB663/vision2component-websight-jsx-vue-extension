import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Art Gallery</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#artist-bios" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Artist Biographies
            </a>
            <a href="#featured-works" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Featured Works
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section id="artist-bios" className="mb-8">
          <h2 className="text-2xl mb-4">Artist Biographies</h2>
          <p className="mb-4">
            At our Art Gallery, we feature a diverse range of artists from around the world. Each artist brings their unique perspective and style to the table, creating a truly artistically-designed layout.
          </p>
        </section>

        <section id="featured-works">
          <h2 className="text-2xl mb-4">Featured Works</h2>
          <p className="mb-4">
            Our featured works are a curated selection of the best artworks from our artists. Each piece is a testament to the artist's skill and creativity.
          </p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;