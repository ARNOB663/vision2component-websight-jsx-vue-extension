import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal relative h-screen overflow-hidden">
      <div className="absolute w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('path/to/your/background-image.jpg')" }}>
        {/* Background Image */}
      </div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Architectural Firm</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Services
            </a>
            <a href="#projects" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Projects
            </a>
            <a href="#clients" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Clients
            </a>
          </div>
        </div>
      </nav>
      <div className="container mx-auto relative z-10 pt-[20%] pb-16">
        <h1 className="my-8 text-4xl text-center text-white">Welcome to Architectural Firm</h1>
        <p className="my-8 text-lg text-justify text-white">
          At Architectural Firm, we are dedicated to creating unique and innovative designs that meet the needs of our clients. Our team of experienced architects and designers work closely with our clients to understand their vision and translate it into a design that is both beautiful and functional. We believe in the power of design to transform spaces, and we are committed to using our skills to make a positive impact in the world.
        </p>
        <div className="text-center">
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;