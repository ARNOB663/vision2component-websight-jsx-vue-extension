import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white text-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Tech Company</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#about" className="mr-5 hover:text-gray-900">About</a>
            <a href="#services" className="mr-5 hover:text-gray-900">Services</a>
            <a href="#contact" className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="about" className="bg-white py-16">
          <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">About Us</h2>
            <p className="text-gray-800 text-lg mx-auto leading-relaxed">
              At Tech Company, we are dedicated to providing the best technology solutions for our clients. Our team of experts is committed to delivering high-quality, reliable, and innovative products and services. We are passionate about technology and are always looking for new ways to improve and innovate.
            </p>
          </div>
        </section>

        <section id="services" className="bg-gray-200 py-16">
          <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Our Services</h2>
            <p className="text-gray-800 text-lg mx-auto leading-relaxed">
              We offer a wide range of services including software development, web design, mobile app development, and more. Our team of experts is skilled in a variety of programming languages and technologies.
            </p>
          </div>
        </section>

        <section id="contact" className="bg-white py-16">
          <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Contact Us</h2>
            <p className="text-gray-800 text-lg mx-auto leading-relaxed">
              We would love to hear from you. Please contact us using the form below or give us a call at 123-456-7890.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <div className="w-full">
            <p className="text-center">© 2022 Tech Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;