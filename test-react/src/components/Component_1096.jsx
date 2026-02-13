import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="flex items-center justify-center h-64 bg-indigo-500 text-white">
        <img src="https://static.photos/technology/300x300/98.webp" alt="Logo" className="h-32" />
      </header>
      <main className="container mx-auto px-4 py-6">
        <section className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <img src="https://static.photos/technology/900x600/99.webp" alt="Tech" className="block h-auto w-full" />
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">Our Tech</h1>
              </header>
              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <p className="text-sm">We use the latest technology to provide innovative solutions to our clients. Our team of experts is constantly researching and developing new technologies to stay at the forefront of the industry.</p>
              </footer>
            </article>
          </div>
          {/* Repeat the above section for each card */}
        </section>
      </main>
      <footer className="bg-indigo-500 text-white">
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-2xl mb-4">Sign up for our newsletter</h2>
          <form>
            <input type="email" placeholder="Enter your email" className="w-full p-2 mb-4" />
            <button type="submit" className="w-full p-2 bg-white text-indigo-500">Subscribe</button>
          </form>
          <div className="mt-4">
            <a href="#" className="text-white">Facebook</a>
            <a href="#" className="text-white ml-4">Twitter</a>
            <a href="#" className="text-white ml-4">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;