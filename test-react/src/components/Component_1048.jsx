import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="flex items-center justify-between bg-white p-4">
        <img src="https://static.photos/food/300x300/50.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-yellow-500 hover:text-yellow-700">Home</a></li>
            <li><a href="#" className="text-yellow-500 hover:text-yellow-700">Menu</a></li>
            <li><a href="#" className="text-yellow-500 hover:text-yellow-700">About</a></li>
            <li><a href="#" className="text-yellow-500 hover:text-yellow-700">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <section className="my-8">
          <h2 className="text-2xl font-bold">Featured Meals</h2>
          {/* Add your featured meals here */}
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold">Offers</h2>
          {/* Add your offers here */}
        </section>
      </main>
      <footer className="bg-white p-4 text-center text-gray-500">
        <p>© 2022 Food Delivery Service. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;