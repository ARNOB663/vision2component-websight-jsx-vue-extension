import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/architecture/900x600/140.webp')" }}>
        <div className="container px-8 pt-12 pb-8 mx-auto bg-white opacity-80 backdrop-blur-lg">
          <div className="flex flex-wrap">
            <div className="w-full mb-6 lg:mb-0 lg:w-1/2">
              <h2 className="text-2xl font-bold leading-none text-gray-800">Welcome to our Architectural Firm</h2>
              <p className="text-gray-600">
                We are a leading architectural firm specializing in residential, commercial, and institutional design. Our team of experienced architects and designers work closely with our clients to create spaces that are not only beautiful but also functional and sustainable.
              </p>
              <button className="mt-4 px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700">
                Contact Us
              </button>
            </div>
            <div className="w-full lg:w-1/2">
              <img className="w-full" src="https://static.photos/architecture/900x600/140.webp" alt="Architecture" />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-8 py-12 mx-auto">
        <h2 className="mb-6 text-2xl font-bold leading-none text-gray-800">Our Projects</h2>
        <div className="flex overflow-x-auto">
          <div className="px-4">
            <img className="w-64 h-48" src="https://static.photos/architecture/900x600/141.webp" alt="House" />
          </div>
          <div className="px-4">
            <img className="w-64 h-48" src="https://static.photos/architecture/900x600/142.webp" alt="Office" />
          </div>
          <div className="px-4">
            <img className="w-64 h-48" src="https://static.photos/architecture/900x600/143.webp" alt="Museum" />
          </div>
          {/* Add more project images as needed */}
        </div>
      </div>

      <div className="container px-8 py-12 mx-auto bg-gray-100">
        <h2 className="mb-6 text-2xl font-bold leading-none text-gray-800">Contact Us</h2>
        <p className="mb-2 text-gray-600">
          Phone: 123-456-7890
        </p>
        <p className="mb-2 text-gray-600">
          Email: info@architecturalfirm.com
        </p>
        <p className="mb-2 text-gray-600">
          Address: 123 Main St, City, State, Zip
        </p>
      </div>
    </>
  );
};

export default GeneratedComponent;