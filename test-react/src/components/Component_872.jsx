import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white text-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Creative Agency</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#work" className="mr-5 hover:text-gray-900">Our Work</a>
            <a href="#contact" className="mr-5 hover:text-gray-900">Contact Us</a>
          </nav>
        </div>
      </header>

      <section className="text-gray-700 p-8">
        <h1 className="text-3xl mb-4">Welcome to Creative Agency</h1>
        <p className="mb-4">
          At Creative Agency, we believe in the power of design to create meaningful experiences. 
          Our team of talented designers, developers, and strategists work together to bring your vision to life. 
          We specialize in creating engaging, user-friendly websites and applications that not only look great, 
          but also effectively communicate your message. Whether you're looking for a simple brochure website, 
          a complex web application, or a brand new mobile app, we're here to help.
        </p>
      </section>

      <section id="work" className="text-gray-700 p-8">
        <h2 className="text-2xl mb-4">Our Work</h2>
        {/* Add your work here */}
      </section>

      <section id="contact" className="text-gray-700 p-8">
        <h2 className="text-2xl mb-4">Contact Us</h2>
        {/* Add your contact form here */}
      </section>

      <footer className="bg-white text-gray-800 p-8">
        {/* Add your footer content here */}
      </footer>
    </div>
  );
};

export default GeneratedComponent;