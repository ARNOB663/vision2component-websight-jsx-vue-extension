import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-200">
      <nav className="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Law Firm</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="text-gray-700 p-8">
        <h2 className="text-2xl font-medium mb-2">Our Services</h2>
        <div className="flex flex-wrap -mx-2 overflow-hidden">
          <div className="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="bg-white rounded-lg overflow-hidden">
              <img className="w-full" src="https://static.photos/art/900x600/120.webp" alt="Law"/>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Legal Advice</h3>
                <p className="text-base">We provide professional legal advice to help you navigate the legal system. Our team of experienced lawyers can provide advice on a wide range of legal issues.</p>
              </div>
            </div>
          </div>
          {/* Repeat the above section for each service */}
        </div>
      </section>
    </div>
  );
};

export default GeneratedComponent;