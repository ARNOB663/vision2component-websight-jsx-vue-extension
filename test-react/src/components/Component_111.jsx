import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style={{ backgroundImage: "url('https://picsum.photos/seed/111/1600/900')" }}>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-semibold text-xl tracking-tight">Travel Agency</span>
        </div>
        <div className="block">
          <div className="flex items-center">
            <a href="#destinations" className="mr-6">Destinations</a>
            <a href="#packages" className="mr-6">Packages</a>
            <a href="#testimonials" className="mr-6">Testimonials</a>
          </div>
        </div>
      </nav>

      <section className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl mb-4">Welcome to our travel agency</h1>
          <p className="text-xl mb-6">We offer the best travel experiences for your next adventure.</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      </section>

      <section id="destinations" className="py-12">
        <h2 className="text-3xl mb-6">Destinations</h2>
        {/* Destinations content here */}
      </section>

      <section id="packages" className="py-12">
        <h2 className="text-3xl mb-6">Packages</h2>
        {/* Packages content here */}
      </section>

      <section id="testimonials" className="py-12">
        <h2 className="text-3xl mb-6">Testimonials</h2>
        {/* Testimonials content here */}
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p>Contact us at: info@travelagency.com</p>
        <p>Sign up for our newsletter:</p>
        {/* Newsletter signup form here */}
      </footer>
    </div>
  );
};

export { GeneratedComponent };