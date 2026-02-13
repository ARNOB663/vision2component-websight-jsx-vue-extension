import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/83/1600/900')" }}>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Travel Agency</span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a href="#destinations" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Destinations
              </a>
              <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                About Us
              </a>
              <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section id="destinations" className="my-8">
          <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
          {/* Add your destinations here */}
        </section>
        <section id="about" className="my-8">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            At Travel Agency, we are passionate about travel and helping our clients discover the world. We believe that travel is not just about reaching a destination, but about experiencing different cultures, landscapes, and people. We offer a wide range of travel packages to suit every taste and budget. Whether you're looking for a romantic getaway, a family vacation, or an adventure, we're here to help you plan your next trip.
          </p>
        </section>
        <section id="contact" className="my-8">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          {/* Add your contact form here */}
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;