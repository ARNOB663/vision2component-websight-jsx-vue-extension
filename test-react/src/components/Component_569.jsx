import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans leading-normal tracking-normal">
      <header className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/business/1600x900/170.webp')" }}>
        <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-no-shrink text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Event Planning Company</span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Home
              </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                About
              </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl mb-4">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Event cards go here */}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Event cards go here */}
          </div>
        </section>
        <section>
          <h2 className="text-2xl mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Testimonial cards go here */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;