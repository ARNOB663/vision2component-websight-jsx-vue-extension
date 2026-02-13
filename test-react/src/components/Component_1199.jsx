import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-900 text-white">
      <header className="flex items-center justify-between p-4 bg-gray-800">
        <h1 className="text-2xl font-bold">Gaming Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Games</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/art/1600x900/200.webp')" }}>
        <h2 className="text-4xl font-bold text-center">Welcome to our Gaming Website</h2>
        <p className="mt-4 text-xl text-center">We are a community of passionate gamers who love to share our love for gaming with others. We have a wide variety of games to choose from, and we are always updating our selection to keep up with the latest and greatest.</p>
      </section>

      <section className="p-4">
        <h2 className="text-2xl font-bold">Our Games</h2>
        <p className="mt-4">We have a wide variety of games to choose from, including action, adventure, strategy, and more. We also have a variety of genres to choose from, so you can find the perfect game for you.</p>
      </section>
    </div>
  );
};

export default GeneratedComponent;