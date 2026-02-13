import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-center text-2xl">Health and Wellness Site</h1>
      </header>

      <nav className="bg-gray-700 text-white p-4">
        <ul className="flex justify-center space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      <main className="p-4">
        <section className="mb-4">
          <h2 className="text-xl mb-2">Latest Articles</h2>
          {/* Add your articles here */}
        </section>

        <section className="mb-4">
          <h2 className="text-xl mb-2">Services</h2>
          {/* Add your services here */}
        </section>

        <section className="mb-4">
          <h2 className="text-xl mb-2">Testimonials</h2>
          {/* Add your testimonials here */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2022 Health and Wellness Site. All rights reserved.</p>
      </footer>
    </>
  );
};

export default GeneratedComponent;