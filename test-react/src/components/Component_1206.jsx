import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-red-500 text-white text-center py-12">
        <h1 className="text-4xl">Restaurant Chain</h1>
        <img src="https://static.photos/restaurant/900x600/8.webp" alt="Popular dish" className="mt-4" />
      </header>

      <nav className="bg-yellow-500 text-white text-center py-4">
        <ul className="flex justify-center space-x-8">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">About</a></li>
          <li><a href="#" className="text-white">Menu</a></li>
          <li><a href="#" className="text-white">Contact</a></li>
        </ul>
      </nav>

      <main className="py-8">
        <section className="text-center">
          <h2 className="text-2xl mb-4">Welcome to our restaurant chain</h2>
          <p className="mb-4">We are a family-owned restaurant chain that specializes in providing high-quality, fresh, and delicious food. Our mission is to create a warm and welcoming environment where people can enjoy their meals with their families and friends.</p>
          <p>Our restaurant locations are spread across the city, each with its unique style and ambiance. Whether you're in the heart of the city or on the outskirts, we have a restaurant that's perfect for you.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl text-center mb-4">Our Restaurants</h2>
          {/* Add your slideshow here */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2022 Restaurant Chain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;