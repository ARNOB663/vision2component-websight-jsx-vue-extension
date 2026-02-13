import React from 'react';

const GeneratedComponent = () => {
  return (
    <div>
      <div className="relative">
        <img src="https://static.photos/restaurant/900x600/25.webp" alt="Restaurant Hero Image" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          Welcome to Our Restaurant
        </div>
      </div>

      <nav className="bg-white p-4 shadow">
        <ul className="flex space-x-4 justify-center">
          <li><a href="#menu" className="text-gray-600 hover:text-gray-800">Menu</a></li>
          <li><a href="#location" className="text-gray-600 hover:text-gray-800">Location</a></li>
          <li><a href="#specials" className="text-gray-600 hover:text-gray-800">Specials</a></li>
          <li><a href="#testimonials" className="text-gray-600 hover:text-gray-800">Testimonials</a></li>
        </ul>
      </nav>

      <main className="max-w-screen-lg mx-auto p-4">
        <section id="menu" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          {/* Add your menu items here */}
        </section>

        <section id="location" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Location</h2>
          {/* Add your location details here */}
        </section>

        <section id="specials" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Specials</h2>
          {/* Add your specials here */}
        </section>

        <section id="testimonials" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Customer Testimonials</h2>
          {/* Add your testimonials here */}
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;