import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans leading-normal tracking-normal">
      <header className="flex items-center justify-between bg-white p-4">
        <img src="https://static.photos/fashion/300x300/129.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-800 hover:text-blue-500">Home</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500">About</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500">Collections</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="relative">
          <img src="https://static.photos/fashion/900x600/130.webp" alt="Hero Image" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl text-white">Welcome to our Fashion Brand</h1>
          </div>
        </section>

        <section className="p-4">
          <p className="text-lg">
            At our fashion brand, we believe in the power of fashion to express individuality and self-expression. We offer a wide range of styles and designs, from casual wear to formal attire, to suit every taste and occasion. Our collections are carefully curated to reflect the latest trends and styles, and we pride ourselves on offering high-quality, stylish clothing that is not only fashionable but also comfortable and durable.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="flex items-center justify-between">
          <div>
            <p>Sign up for our newsletter:</p>
            <form>
              <input type="email" placeholder="Enter your email" className="p-2 mt-2 rounded" />
              <button type="submit" className="bg-white text-gray-800 p-2 mt-2 rounded">Subscribe</button>
            </form>
          </div>
          <div>
            <p>Follow us on social media:</p>
            <div className="flex space-x-2">
              <a href="#"><img src="https://static.photos/fashion/900x600/131.webp" alt="Facebook" className="h-6" /></a>
              <a href="#"><img src="https://static.photos/fashion/900x600/132.webp" alt="Twitter" className="h-6" /></a>
              <a href="#"><img src="https://static.photos/fashion/900x600/133.webp" alt="Instagram" className="h-6" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;