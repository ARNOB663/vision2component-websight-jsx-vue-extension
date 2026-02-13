import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white text-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="title-font font-medium text-xl text-gray-800 mb-4 md:mb-0">
            <a href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src="https://static.photos/art/300x300/87.webp" className="w-10 h-10 rounded-full mr-3" alt="Art Gallery Logo" />
              <span className="ml-3">Art Gallery</span>
            </a>
          </span>
        </div>
      </header>

      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img className="lg:w-2/3 md:w-1/2 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://static.photos/art/900x600/88.webp" />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to our Art Gallery</h1>
            <p className="mb-8 leading-relaxed">At our Art Gallery, we specialize in the finest art pieces from around the world. Our collection is a testament to the beauty and diversity of human creativity. We believe that art is a universal language that connects us all, and we are dedicated to sharing it with the world.</p>
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://static.photos/art/900x600/89.webp" alt="artwork" />
                <p className="leading-relaxed mt-4">This is a wonderful piece of art. It captures the beauty of nature in its fullest form.</p>
              </div>
            </div>
            {/* Repeat the above div for each artwork */}
          </div>
        </div>
      </section>

      <footer className="text-gray-700 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="https://static.photos/art/300x300/90.webp" className="w-10 h-10 rounded-full mr-3" alt="Art Gallery Logo" />
            <span className="ml-3 text-xl">Art Gallery</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Art Gallery —
            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;