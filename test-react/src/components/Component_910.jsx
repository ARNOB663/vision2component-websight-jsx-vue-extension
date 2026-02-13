import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-white text-gray-800 py-4">
        <nav className="container mx-auto flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Travel Agency</span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Home
              </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Destinations
              </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="flex flex-col items-center justify-center text-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/1500x900")' }}>
          <h1 className="text-5xl font-bold text-white">Welcome to our travel agency</h1>
          <p className="text-xl text-white mt-4">We offer a wide range of travel packages to exotic destinations around the world.</p>
          <div className="mt-8">
            <a href="#responsive-header" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Book Now
            </a>
            <a href="#responsive-header" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-4">
              Explore Destinations
            </a>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <p className="text-teal-200">Contact us: info@travelagency.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GeneratedComponent;