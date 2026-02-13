import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Tech Startup</span>
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

      <section className="py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6">
            <h1 className="font-bold text-4xl my-4">Welcome to Tech Startup</h1>
            <p className="leading-normal mb-4">
              At Tech Startup, we are dedicated to providing innovative and high-quality solutions to our clients. Our team of experts is committed to delivering the best possible service to our clients. We are always looking for new challenges and opportunities to grow and improve.
            </p>
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img src="https://picsum.photos/900/600?random" alt="Tech Startup" />
          </div>
        </div>
      </section>
    </>
  );
};

export default GeneratedComponent;