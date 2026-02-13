import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white text-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Art Gallery</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#artwork" className="mr-5 hover:text-gray-900">Artwork</a>
            <a href="#about" className="mr-5 hover:text-gray-900">About</a>
            <a href="#contact" className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <section id="artwork" className="w-full md:w-2/3 flex flex-col items-center text-center px-10">
          <h2 className="text-3xl mb-5">Artwork</h2>
          <img src="https://static.photos/art/900x600/121.webp" alt="Artwork" className="mb-5"/>
          <p className="mb-5">
            At our Art Gallery, we specialize in a wide range of art styles, from abstract to figurative, from modern to classical. Our collection is a testament to the diverse talents and perspectives of our artists, who bring their unique vision to every piece.
          </p>
        </section>

        <aside id="about" className="w-full md:w-1/3 flex flex-col items-center text-center px-10">
          <h2 className="text-3xl mb-5">About Us</h2>
          <p className="mb-5">
            Founded in 2005, our Art Gallery has been dedicated to showcasing the best of contemporary art. We believe in the power of art to inspire, educate, and connect people from all walks of life. Our mission is to create a space where artists and art lovers can come together to celebrate and appreciate the beauty of art.
          </p>
        </aside>
      </main>

      <footer className="bg-white text-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Art Gallery</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#artwork" className="mr-5 hover:text-gray-900">Artwork</a>
            <a href="#about" className="mr-5 hover:text-gray-900">About</a>
            <a href="#contact" className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;