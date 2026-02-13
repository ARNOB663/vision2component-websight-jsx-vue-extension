import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white">
        <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img src="https://picsum.photos/seed/48/300/300" alt="Logo" />
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Home
              </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Case Studies
              </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Team's Portfolio
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-grow">
        {/* Main content goes here */}
      </main>
      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6">
              <a className="text-white font-bold text-xl" href="#/">Architecture Firm</a>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-0">Links</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#/" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Home</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#/" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Case Studies</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#/" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Team's Portfolio</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;