import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/travel/1600x900/1.webp')" }}>
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex items-center justify-between">
            <li><a href="#" className="text-white hover:text-green-200">Home</a></li>
            <li><a href="#" className="text-white hover:text-green-200">About</a></li>
            <li><a href="#" className="text-white hover:text-green-200">Trips</a></li>
            <li><a href="#" className="text-white hover:text-green-200">Testimonials</a></li>
            <li><a href="#" className="text-white hover:text-green-200">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="container mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold mb-4">Featured Trips</h2>
        {/* Add your trips here */}
      </section>

      <section className="container mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
        {/* Add your testimonials here */}
      </section>

      <section className="container mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold mb-4">Search for Destinations</h2>
        {/* Add your search bar here */}
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© 2022 Travel Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;