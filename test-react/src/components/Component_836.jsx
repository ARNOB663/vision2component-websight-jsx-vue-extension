import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/real-estate/1600x900/37.webp')" }}>
      <header className="flex items-center justify-between flex-wrap p-6 bg-teal-500">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Real Estate Business</span>
        </div>
        <nav className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#properties" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Properties
            </a>
            <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About
            </a>
          </div>
        </nav>
      </header>
      <main className="flex flex-wrap">
        <section id="properties" className="w-full lg:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">Properties for Sale</h2>
          {/* Add your properties here */}
        </section>
        <section id="about" className="w-full lg:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            We are a real estate business that specializes in finding the perfect home for you. With our extensive network of properties, we are able to provide you with a wide range of options. Whether you are looking for a single-family home, a condo, or a luxury estate, we have something for everyone.
          </p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;