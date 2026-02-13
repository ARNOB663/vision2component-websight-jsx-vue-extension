import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-green-200">
      <header className="bg-green-500 text-white p-4">
        <h1 className="text-3xl font-bold">Event Planning Company</h1>
        <nav className="flex justify-center space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
        </nav>
      </header>

      <main className="p-4">
        <section id="home">
          <h2 className="text-2xl font-bold">Welcome to our Event Planning Company</h2>
          <p>We are a team of passionate event planners dedicated to creating unforgettable experiences for our clients.</p>
        </section>

        <section id="about">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p>We have been in the event planning industry for over 10 years and have a wealth of experience.</p>
        </section>

        <section id="services">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <p>We offer a wide range of services including event planning, venue selection, catering, and more.</p>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p>Get in touch with us today to discuss your event planning needs.</p>
        </section>
      </main>

      <footer className="bg-green-500 text-white p-4">
        <p>Follow us on social media:</p>
        <nav className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </nav>
      </footer>
    </div>
  );
};

export default GeneratedComponent;