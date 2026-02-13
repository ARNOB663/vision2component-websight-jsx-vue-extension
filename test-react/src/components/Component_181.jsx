import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style={{ backgroundImage: "url('https://picsum.photos/seed/181/1600/900')" }}>
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between p-6">
          <a href="#" className="text-xl font-bold text-gray-700">Healthcare Site</a>
          <nav>
            <ul className="flex items-center">
              <li><a href="#services" className="px-4 py-2 text-gray-700 hover:text-yellow-500">Services</a></li>
              <li><a href="#team" className="px-4 py-2 text-gray-700 hover:text-yellow-500">Team</a></li>
              <li><a href="#contact" className="px-4 py-2 text-gray-700 hover:text-yellow-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section id="hero" className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Healthcare Site</h1>
            <p className="text-lg mb-6">We provide the best healthcare services in the area. Schedule an appointment today.</p>
            <a href="#contact" className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700">Schedule Now</a>
          </div>
        </section>

        <section id="services" className="my-12">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          {/* Add your services here */}
        </section>

        <section id="team" className="my-12">
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          {/* Add your team here */}
        </section>

        <section id="contact" className="my-12">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          {/* Add your contact form here */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-6">
        <p>&copy; 2022 Healthcare Site. All rights reserved.</p>
      </footer>
    </div>
  );
};

export { GeneratedComponent };