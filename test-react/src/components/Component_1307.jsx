import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="flex items-center justify-between bg-white p-4">
        <img src="https://static.photos/restaurant/300x300/109.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex">
            <li className="mr-4">
              <a href="#menu" className="text-purple-500 hover:text-purple-700">Menu</a>
            </li>
            <li className="mr-4">
              <a href="#location" className="text-purple-500 hover:text-purple-700">Location</a>
            </li>
            <li>
              <a href="#contact" className="text-purple-500 hover:text-purple-700">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center p-4">
        <img src="https://static.photos/restaurant/900x600/110.webp" alt="Food" className="w-full h-64 object-cover" />
        <p className="my-8 text-center">
          Welcome to our restaurant, where we serve the best food in town. Our menu features a variety of dishes, from classic favorites to innovative creations. We use only the freshest ingredients and prepare our food with care. Come and enjoy a meal with us.
        </p>
      </main>

      <footer className="bg-white p-4 text-center">
        <p className="mb-2">
          <a href="#menu" className="text-purple-500 hover:text-purple-700">Menu</a>
        </p>
        <p className="mb-2">
          <a href="#location" className="text-purple-500 hover:text-purple-700">Location</a>
        </p>
        <p>
          <a href="#contact" className="text-purple-500 hover:text-purple-700">Contact</a>
        </p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;