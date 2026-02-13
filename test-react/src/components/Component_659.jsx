import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="w-full bg-gray-800 text-white p-4">
        <img src="https://static.photos/art/900x600/61.webp" alt="Artwork" className="w-full" />
        <h1 className="text-4xl text-center mt-4">Welcome to our Art Gallery</h1>
        <p className="text-center mt-2">Explore the world of art with us</p>
      </header>

      <nav className="bg-gray-700 text-white p-4">
        <ul className="flex justify-center space-x-4">
          <li><a href="#" className="hover:underline">Featured Artists</a></li>
          <li><a href="#" className="hover:underline">Upcoming Events</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      <footer className="bg-gray-800 text-white p-4">
        <p className="text-center">Sign up for our newsletter</p>
        <form className="flex justify-center space-x-2 mt-2">
          <input type="email" placeholder="Your email" className="px-2 py-1 rounded" />
          <button type="submit" className="bg-white text-gray-800 px-2 py-1 rounded">Subscribe</button>
        </form>
        <p className="text-center mt-4">Follow us on social media</p>
        <div className="flex justify-center space-x-2 mt-2">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;