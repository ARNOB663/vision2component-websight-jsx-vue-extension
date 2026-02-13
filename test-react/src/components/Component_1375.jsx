import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-wrap bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="w-full lg:w-1/4 bg-white shadow-lg m-2 p-4">
        <h1 className="text-2xl font-bold mb-4">Architecture Firm</h1>
        <p className="mb-4">
          Welcome to our architecture firm website, where we specialize in creating unique and innovative designs. Our team of experienced architects and designers work closely with our clients to understand their needs and translate them into stunning architectural designs. We believe in the power of design to transform spaces, and we strive to create designs that are not only beautiful, but also functional and sustainable.
        </p>
        <img src="https://static.photos/architecture/900x600/177.webp" alt="Architecture" className="w-full" />
      </div>
      <div className="w-full lg:w-3/4 bg-white shadow-lg m-2 p-4">
        <h2 className="text-xl font-bold mb-4">Our Projects</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <img src="https://static.photos/architecture/900x600/178.webp" alt="Project 1" className="w-full" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <img src="https://static.photos/architecture/900x600/179.webp" alt="Project 2" className="w-full" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <img src="https://static.photos/architecture/900x600/180.webp" alt="Project 3" className="w-full" />
          </div>
          {/* Add more project images as needed */}
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;