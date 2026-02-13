import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/art/1600x900/162.webp')" }}>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Non-Profit Organization</span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a href="#stories" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Stories
              </a>
              <a href="#impact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Impact
              </a>
              <a href="#opportunities" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Opportunities
              </a>
            </div>
          </div>
        </nav>
        <div className="text-center pt-40">
          <h1 className="text-4xl text-white font-bold">Our Mission</h1>
          <p className="text-xl text-white mt-4">
            We are a non-profit organization dedicated to making a difference in the world. We believe in the power of community and strive to create a better world for all.
          </p>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <section id="stories" className="my-12">
          <h2 className="text-3xl">Stories</h2>
          {/* Add your stories here */}
        </section>
        <section id="impact" className="my-12">
          <h2 className="text-3xl">Impact</h2>
          {/* Add your impact here */}
        </section>
        <section id="opportunities" className="my-12">
          <h2 className="text-3xl">Opportunities</h2>
          {/* Add your opportunities here */}
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-6">
        {/* Add your footer content here */}
      </footer>
    </div>
  );
};

export default GeneratedComponent;