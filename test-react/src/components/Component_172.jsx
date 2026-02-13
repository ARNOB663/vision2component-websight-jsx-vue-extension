import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style={{ backgroundImage: "url('https://picsum.photos/seed/172/1600/900')" }}>
      <header className="bg-green-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl">Travel Agency</h1>
          <div className="flex items-center">
            <input type="text" placeholder="Search" className="mr-2 p-2 border border-white rounded" />
            <button className="bg-white text-green-800 p-2 rounded">Book Now</button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section className="my-8">
          <h2 className="text-3xl mb-4">Destinations</h2>
          {/* Destination content goes here */}
        </section>

        <section className="my-8">
          <h2 className="text-3xl mb-4">Tours</h2>
          {/* Tours content goes here */}
        </section>

        <section className="my-8">
          <h2 className="text-3xl mb-4">Testimonials</h2>
          {/* Testimonials content goes here */}
        </section>
      </main>

      <footer className="bg-green-800 text-white p-4 text-center">
        <p>© 2022 Travel Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;