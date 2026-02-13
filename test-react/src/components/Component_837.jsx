import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-gray-100">
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/architecture/1600x900/38.webp')" }}>
        <div className="flex items-center justify-center h-full text-center">
          <div>
            <img className="h-16" src="https://static.photos/architecture/300x300/39.webp" alt="Construction Company Logo" />
            <nav className="mt-8">
              <a className="text-white mx-4" href="#services">Services</a>
              <a className="text-white mx-4" href="#projects">Projects</a>
              <a className="text-white mx-4" href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section id="services" className="py-12">
          <h2 className="text-4xl text-center">Our Services</h2>
          <p className="text-xl text-center mt-8">We provide a wide range of construction services including residential, commercial, and industrial projects. Our team of experienced professionals is dedicated to delivering high-quality work on time and within budget.</p>
          <button className="block mx-auto mt-8 px-4 py-2 text-white bg-yellow-500 rounded">Learn More</button>
        </section>

        <section id="projects" className="py-12">
          <h2 className="text-4xl text-center">Our Projects</h2>
          <p className="text-xl text-center mt-8">We have completed numerous projects across the country. From small renovations to large commercial buildings, our team has the skills and experience to deliver successful projects.</p>
          <button className="block mx-auto mt-8 px-4 py-2 text-white bg-yellow-500 rounded">View Projects</button>
        </section>

        <section id="contact" className="py-12">
          <h2 className="text-4xl text-center">Contact Us</h2>
          <p className="text-xl text-center mt-8">Ready to start your next project? Contact us today to discuss your needs and we'll get back to you as soon as possible.</p>
          <button className="block mx-auto mt-8 px-4 py-2 text-white bg-yellow-500 rounded">Get in Touch</button>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;