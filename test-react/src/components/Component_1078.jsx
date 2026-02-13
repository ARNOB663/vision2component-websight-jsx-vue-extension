import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white text-center">
        <div className="container mx-auto flex flex-col px-5 py-8 md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img className="h-64 mx-auto" src="https://static.photos/business/300x300/80.webp" alt="Tech Company Logo" />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-bold leading-none mb-4">Welcome to Tech Company</h1>
            <p className="text-xl leading-tight">
              At Tech Company, we are dedicated to providing the best technology solutions for your business needs. Our team of experts is committed to delivering innovative, efficient, and reliable solutions that help you achieve your business goals.
            </p>
          </div>
        </div>
      </header>
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <footer className="bg-white text-center text-gray-800">
        <div className="container mx-auto px-5 py-8">
          <h2 className="text-3xl font-bold leading-none mb-4">Stay Connected</h2>
          <div className="flex justify-center">
            <a href="#" className="mx-2">
              <img src="https://static.photos/business/900x600/81.webp" alt="Facebook" />
            </a>
            <a href="#" className="mx-2">
              <img src="https://static.photos/business/900x600/82.webp" alt="Twitter" />
            </a>
            <a href="#" className="mx-2">
              <img src="https://static.photos/business/900x600/83.webp" alt="Instagram" />
            </a>
          </div>
          <form className="mt-8">
            <input className="w-full px-3 py-2 mb-4 border border-gray-400 rounded" type="email" placeholder="Enter your email" />
            <button className="w-full px-3 py-2 bg-red-500 text-white rounded" type="submit">Subscribe</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;