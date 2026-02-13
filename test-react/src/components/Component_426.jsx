import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white">
        <nav className="container mx-auto flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Travel Agency</span>
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
            <form className="lg:flex lg:items-center">
              <input type="text" placeholder="Search" className="px-4 py-2 rounded-lg mr-3" />
              <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
      <main className="flex-grow">
        <div className="w-full bg-cover bg-center h-96" style={{ backgroundImage: "url('https://static.photos/travel/1600x900/27.webp')" }}>
          <div className="container mx-auto px-6 md:px-12 xl:px-48">
            <h2 className="text-xl text-white font-bold leading-tight">Welcome to our travel agency</h2>
            <h1 className="text-5xl text-white font-bold leading-tight">Discover the world</h1>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-6">
              Book Now
            </button>
          </div>
        </div>
      </main>
      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6">
              <a className="text-red-600 hover:text-red-800 text-xl font-bold">Travel Agency</a>
            </div>
            <div className="flex-1">
              <p className="text-red-600">We are a travel agency dedicated to providing you with the best service and experience. We are committed to making your journey as smooth as possible.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;