import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style={{ backgroundImage: 'url("https://static.photos/real-estate/1600x900/53.webp")' }}>
      <header className="bg-white text-center p-12">
        <h1 className="text-5xl">Welcome to Our Real Estate Agency</h1>
        <p className="text-xl mt-4">We specialize in finding your dream home.</p>
      </header>
      <nav className="bg-pink-800 text-white p-4">
        <ul className="flex justify-center">
          <li className="mx-2"><a href="#">Home</a></li>
          <li className="mx-2"><a href="#">Listings</a></li>
          <li className="mx-2"><a href="#">Contact</a></li>
        </ul>
      </nav>
      <section className="py-12">
        <h2 className="text-4xl text-center mb-8">Featured Listings</h2>
        {/* Add your listings here */}
      </section>
    </div>
  );
};

export default GeneratedComponent;