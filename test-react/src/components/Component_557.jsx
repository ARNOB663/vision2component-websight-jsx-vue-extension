import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('https://static.photos/business/1600x900/158.webp')" }}>
        <nav className="absolute top-0 w-full">
          <ul className="flex justify-end p-4">
            <li className="mx-2"><a href="#destinations" className="text-white">Destinations</a></li>
            <li className="mx-2"><a href="#packages" className="text-white">Packages</a></li>
            <li className="mx-2"><a href="#testimonials" className="text-white">Testimonials</a></li>
          </ul>
        </nav>
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Welcome to our travel agency</h1>
          <p className="text-xl text-white mb-8">We offer the best travel packages for your next adventure</p>
          <button className="bg-white text-purple-500 px-4 py-2 rounded">Book Now</button>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <section id="destinations" className="mb-8">
          <h2 className="text-3xl mb-4">Destinations</h2>
          {/* Destinations content here */}
        </section>
        <section id="packages" className="mb-8">
          <h2 className="text-3xl mb-4">Packages</h2>
          {/* Packages content here */}
        </section>
        <section id="testimonials" className="mb-8">
          <h2 className="text-3xl mb-4">Testimonials</h2>
          {/* Testimonials content here */}
        </section>
      </main>
      <footer className="bg-purple-500 text-white p-4">
        {/* Footer content here */}
      </footer>
    </div>
  );
};

export default GeneratedComponent;