import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/travel/1600x900/149.webp')" }}>
        <div className="container mx-auto px-6 md:flex md:items-center md:justify-between py-4">
          <div className="text-center text-white">
            <h1 className="font-bold uppercase text-5xl pt-20 md:pt-0">Welcome to our travel agency</h1>
            <p className="text-2xl">We offer the best travel packages and deals around the world</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3 p-6">
            <h2 className="text-4xl font-bold text-gray-800 leading-none mb-6">Popular travel packages</h2>
            {/* CTA for popular travel packages and deals */}
          </div>

          <div className="w-full md:w-1/3 p-6">
            <h2 className="text-4xl font-bold text-gray-800 leading-none mb-6">Testimonials</h2>
            {/* Traveler testimonials */}

            <h2 className="text-4xl font-bold text-gray-800 leading-none mb-6 mt-12">Map of the world</h2>
            {/* Map of the world with clickable locations */}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center py-8">
        <p>© 2022 Travel Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;