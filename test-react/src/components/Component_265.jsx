import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans">
      <header className="bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <img src="https://picsum.photos/seed/265/300/300" alt="Logo" className="h-10" />
          <nav className="flex space-x-4">
            <a href="#team" className="text-gray-600 hover:text-gray-900">Team</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#reviews" className="text-gray-600 hover:text-gray-900">Reviews</a>
          </nav>
        </div>
      </header>

      <section className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/265/1600/900')" }}>
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to our Creative Agency</h1>
            <p className="text-white mb-8">We are a creative agency that specializes in creating unique and engaging digital experiences.</p>
            <a href="#contact" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 border border-gray-400 rounded shadow">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section id="team" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet our team</h2>
          {/* Team members go here */}
        </div>
      </section>

      <section id="services" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our services</h2>
          {/* Services go here */}
        </div>
      </section>

      <section id="reviews" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What our clients say</h2>
          {/* Reviews go here */}
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2022 Creative Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;