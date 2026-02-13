import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-cover bg-center h-screen flex items-center justify-center text-center text-white" style={{ backgroundImage: 'url("https://static.photos/travel/1600x900/50.webp")' }}>
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold">Welcome to our Travel Agency</h1>
          <p className="text-2xl">We are a premier travel agency specializing in creating unforgettable travel experiences for our clients.</p>
        </div>
      </header>
      <nav className="bg-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-gray-800 text-xl font-bold">Travel Agency</a>
          <div className="hidden md:flex md:items-center md:justify-end md:flex-1 lg:w-auto">
            <a href="#destinations" className="mr-4 text-lg">Destinations</a>
            <a href="#deals" className="mr-4 text-lg">Deals</a>
            <a href="#tips" className="mr-4 text-lg">Travel Tips</a>
            <a href="#contact" className="text-lg">Contact Us</a>
          </div>
        </div>
      </nav>
      <main className="flex-grow">
        {/* Add your sections here */}
      </main>
      <footer className="bg-gray-800 text-white text-center py-8">
        <p>&copy; 2022 Travel Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;