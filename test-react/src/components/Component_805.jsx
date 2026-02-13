import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-yellow-500">
      <header className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/travel/1600x900/6.webp')" }}>
        <nav className="flex justify-end p-4">
          <a href="#" className="px-4 py-2 text-white hover:text-yellow-300">Home</a>
          <a href="#" className="px-4 py-2 text-white hover:text-yellow-300">Packages</a>
          <a href="#" className="px-4 py-2 text-white hover:text-yellow-300">Testimonials</a>
          <a href="#" className="px-4 py-2 text-white hover:text-yellow-300">Blog</a>
        </nav>
      </header>
      <main className="flex justify-center p-8">
        <div className="w-full max-w-screen-lg flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-2xl font-bold">Travel Packages</h2>
            <p className="mt-2">Discover our wide range of travel packages. From luxury vacations to budget-friendly trips, we have something for everyone.</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-2xl font-bold">Testimonials</h2>
            <p className="mt-2">Hear what our satisfied customers have to say about our services.</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-2xl font-bold">Blog</h2>
            <p className="mt-2">Stay updated with our latest travel tips and advice.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;