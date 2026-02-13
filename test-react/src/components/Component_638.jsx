import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/architecture/1600x900/39.webp')" }}>
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex items-center justify-between">
            <li><a href="#" className="text-white hover:text-green-800 no-underline">Home</a></li>
            <li><a href="#" className="text-white hover:text-green-800 no-underline">About</a></li>
            <li><a href="#" className="text-white hover:text-green-800 no-underline">Projects</a></li>
            <li><a href="#" className="text-white hover:text-green-800 no-underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-4">
        <section className="grid grid-cols-2 gap-4">
          {/* Add your project cards here */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <p>Subscribe to our newsletter</p>
            <form>
              <input type="email" placeholder="Your email" className="px-3 py-2 rounded"/>
              <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Subscribe
              </button>
            </form>
          </div>
          <p>Contact us at info@architecturefirm.com</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;