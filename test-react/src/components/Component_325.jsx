import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Consulting Firm</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About
            </a>
            <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Services
            </a>
            <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <header className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-bg">
        <h1 className="text-5xl text-white font-bold leading-tight">
          We provide top-notch consulting services for your business.
        </h1>
      </header>

      <main className="container mx-auto px-4 py-6">
        <section id="about">
          <h2 className="text-3xl">About Us</h2>
          <p>
            At Consulting Firm, we are committed to providing high-quality consulting services to help our clients achieve their business goals. Our team of experienced professionals is dedicated to delivering innovative solutions that meet the unique needs of each client.
          </p>
        </section>

        <section id="services">
          <h2 className="text-3xl">Our Services</h2>
          <p>
            We offer a wide range of consulting services, including strategic planning, business development, financial analysis, and more. Our services are designed to help our clients make informed decisions and achieve their business objectives.
          </p>
        </section>

        <section id="contact">
          <h2 className="text-3xl">Contact Us</h2>
          <p>
            If you're interested in learning more about our services or how we can help your business, please don't hesitate to contact us. We'd be happy to answer any questions you may have and discuss how we can help you.
          </p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;