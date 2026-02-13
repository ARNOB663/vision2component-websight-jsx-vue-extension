import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/technology/1600x900/171.webp')" }}>
      <header className="relative w-full h-screen">
        <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
        <div className="container relative flex items-center px-6 py-32 mx-auto">
          <div className="flex flex-col w-full mx-auto text-center">
            <h1 className="text-4xl font-bold text-white uppercase">Welcome to our Digital Marketing Agency</h1>
            <p className="mt-4 text-xl text-white">We are a full-service digital marketing agency that helps businesses of all sizes to reach their goals.</p>
            <a href="#services" className="mt-8 px-4 py-2 text-sm font-bold text-gray-800 bg-white rounded">Learn More</a>
          </div>
        </div>
      </header>

      <section id="services" className="container px-6 py-16 mx-auto">
        <h2 className="text-2xl font-bold text-center">Our Services</h2>
        {/* Add your services here */}
      </section>

      <section className="container px-6 py-16 mx-auto">
        <h2 className="text-2xl font-bold text-center">Our Projects</h2>
        {/* Add your projects here */}
      </section>

      <section className="container px-6 py-16 mx-auto">
        <h2 className="text-2xl font-bold text-center">Testimonials</h2>
        {/* Add your testimonials here */}
      </section>

      <section className="container px-6 py-16 mx-auto">
        <h2 className="text-2xl font-bold text-center">Contact Us</h2>
        {/* Add your contact details here */}
      </section>
    </div>
  );
};

export default GeneratedComponent;