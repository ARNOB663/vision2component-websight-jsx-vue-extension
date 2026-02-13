import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-4xl mb-5">Welcome to Our Technology Company</h1>
          <p className="mb-5">
            At our technology company, we are dedicated to providing innovative and efficient solutions for all your technological needs. We strive to stay at the forefront of the latest advancements in technology, ensuring our clients are always equipped with the most cutting-edge tools and services.
          </p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl mb-5">Our Services</h2>
          <div className="flex items-center mb-5">
            <img className="w-10 h-10 mr-5" src="https://picsum.photos/seed/171/900/600" alt="Technology Icon" />
            <p>
              We offer a wide range of services including software development, IT consulting, and cybersecurity.
            </p>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 mr-5" src="https://picsum.photos/seed/171/900/600" alt="Innovation Icon" />
            <p>
              We are committed to staying at the forefront of innovation, constantly researching and developing new technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;