import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style={{ backgroundImage: "url('https://picsum.photos/seed/340/1600/900')" }}>
      <header className="bg-white text-center p-12">
        <h1 className="text-5xl">Software Development Company</h1>
        <p className="text-2xl mt-4">We specialize in creating innovative software solutions for businesses of all sizes.</p>
      </header>

      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex justify-around">
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main className="max-w-4xl mx-auto p-4">
        <section id="services" className="my-8">
          <h2 className="text-3xl mb-4">Our Services</h2>
          <p>We offer a wide range of software development services, including web application development, mobile app development, and custom software development.</p>
        </section>

        <section id="testimonials" className="my-8">
          <h2 className="text-3xl mb-4">Testimonials</h2>
          <p>Coming soon...</p>
        </section>

        <section id="contact" className="my-8">
          <h2 className="text-3xl mb-4">Contact Us</h2>
          <p>Coming soon...</p>
        </section>
      </main>
    </div>
  );
};

export { GeneratedComponent };