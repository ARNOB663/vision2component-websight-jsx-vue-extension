import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-6 flex justify-center">
        <img src="https://static.photos/architecture/300x300/45.webp" alt="Construction Company Logo" className="h-16" />
      </header>

      <section className="py-10">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Our Construction Company</h1>
          <p className="text-lg text-center mb-10">
            We are a professional and industrial design company dedicated to creating unique and innovative structures. Our team of experienced architects, engineers, and designers work together to bring your vision to life. We specialize in a wide range of construction projects, from residential to commercial, industrial, and more. Whether you're looking for a new office building, a renovation of your home, or a custom design for your business, we're here to help.
          </p>
          <div className="flex justify-center">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Projects</h2>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <img src="https://static.photos/architecture/900x600/46.webp" alt="Construction Project" className="w-full" />
            </div>
            {/* Repeat the above div for each project */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneratedComponent;