import React from 'react';

const GeneratedComponent = () => {
  return (
    <div>
      <header className="bg-green-500 text-white text-center py-12">
        <img src="https://static.photos/people/300x300/152.webp" alt="Logo" className="h-16 mb-4" />
        <h1 className="text-4xl mb-8">Welcome to our Nonprofit Organization</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Involved
        </button>
      </header>

      <nav className="bg-green-800 text-white text-center py-4">
        <a href="#" className="px-4">Home</a>
        <a href="#" className="px-4">About</a>
        <a href="#" className="px-4">Donate</a>
      </nav>

      <section className="py-12">
        <h2 className="text-3xl text-center mb-8">Our Success Stories</h2>
        {/* Add your testimonials here */}
      </section>

      <footer className="bg-green-900 text-white text-center py-4">
        <p>© 2022 Nonprofit Organization. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;