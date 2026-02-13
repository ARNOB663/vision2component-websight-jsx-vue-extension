import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-green-500 text-white text-center py-16">
        <h1 className="text-4xl">Welcome to Our Delicious Food Delivery Service</h1>
        <p className="mt-4 text-xl">We offer a wide variety of delicious meals, prepared fresh daily.</p>
      </header>

      <nav className="bg-green-500 text-white text-center py-4">
        <ul className="flex justify-center space-x-8">
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>

      <section className="py-16 text-center">
        <h2 className="text-3xl mb-8">Featured Dishes</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <img src="https://static.photos/art/900x600/73.webp" alt="Pizza" />
            <h3 className="text-2xl mt-4">Pizza</h3>
            <p className="mt-2">A delicious pizza made with fresh ingredients.</p>
          </div>
          <div>
            <img src="https://static.photos/art/900x600/74.webp" alt="Burger" />
            <h3 className="text-2xl mt-4">Burger</h3>
            <p className="mt-2">A juicy burger with a crispy bun and fresh vegetables.</p>
          </div>
        </div>
      </section>

      <footer className="bg-green-500 text-white text-center py-8">
        <p>&copy; 2022 Our Delicious Food Delivery Service. All rights reserved.</p>
      </footer>
    </>
  );
};

export default GeneratedComponent;