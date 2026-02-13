import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Architecture Firm</span>
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

      <header className="bg-white text-gray-800">
        <div className="container mx-auto text-center py-24 px-6">
          <h1 className="text-5xl font-bold mt-0 mb-6">Welcome to our Architecture Firm</h1>
          <h3 className="text-3xl font-bold mb-8">We are a team of experienced architects dedicated to creating beautiful and functional spaces.</h3>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </header>

      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-8">
              <div className="rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://picsum.photos/seed/142/900/600" alt="Architecture"/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Architecture</div>
                  <p className="text-gray-700 text-base">
                    We design buildings and spaces that are not just beautiful, but also functional and sustainable.
                  </p>
                </div>
              </div>
            </div>
            {/* Repeat the above div for each service */}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-8">
        <p>© 2022 Architecture Firm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;