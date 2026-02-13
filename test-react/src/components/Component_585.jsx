import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-black text-white">
      <header className="flex justify-center items-center h-64">
        <img src="https://static.photos/art/300x300/187.webp" alt="Art Gallery Logo" className="h-20" />
      </header>

      <main className="flex flex-col items-center p-8">
        <h1 className="text-4xl mb-8">Welcome to our Art Gallery</h1>

        <div className="w-full max-w-2xl mb-8">
          <img src="https://static.photos/art/900x600/188.webp" alt="Featured Artwork" className="w-full" />
        </div>

        <p className="text-center mb-8">
          At our Art Gallery, we specialize in the finest works of art from around the world. Our collection is diverse and ever-evolving, featuring a wide range of styles and periods, from the Renaissance to the present day. We pride ourselves on our commitment to curating a collection that is both culturally and historically rich.
        </p>

        <div className="w-full max-w-2xl mb-8">
          <form className="flex flex-col">
            <label htmlFor="email" className="mb-2">Sign up for our newsletter:</label>
            <input type="email" id="email" placeholder="Your email" className="mb-4 p-2 rounded" />
            <button type="submit" className="bg-white text-black p-2 rounded">Subscribe</button>
          </form>
        </div>
      </main>

      <footer className="flex justify-center items-center h-64">
        <p className="text-center">
          Stay updated on our upcoming events. Follow us on social media for the latest news and updates.
        </p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;