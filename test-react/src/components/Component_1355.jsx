import React, { useState, useEffect } from 'react';

const GeneratedComponent = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Architecture Firm</span>
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

      <header className={`hero-image ${scrollY > 0 ? 'hidden' : ''}`}>
        <img src="https://static.photos/architecture/900x600/157.webp" alt="Hero Image" />
      </header>

      <section className="py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-8">
            <h1 className="text-5xl text-gray-900 font-bold leading-tight mt-4 mb-2">Welcome to our Architecture Firm</h1>
            <p className="leading-normal text-2xl mb-8">
              We are a team of experienced architects dedicated to creating unique and innovative designs. Our passion for design and our commitment to excellence set us apart from the competition. We believe in the power of design to transform spaces and create meaningful experiences.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="https://static.photos/architecture/900x600/157.webp" className="p-12" alt="Architecture Image" />
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-center text-white py-8">
        <p className="text-xl">Contact us: info@architecturefirm.com</p>
      </footer>
    </>
  );
};

export default GeneratedComponent;