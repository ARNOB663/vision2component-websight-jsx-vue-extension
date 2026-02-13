import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white shadow">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="https://picsum.photos/seed/34/300/300" alt="Logo" className="w-10 h-10" />
            <span className="ml-3 text-xl">Restaurant Name</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#about" className="mr-5 hover:text-gray-900">About Us</a>
            <a href="#menu" className="mr-5 hover:text-gray-900">Menu</a>
            <a href="#reservations" className="mr-5 hover:text-gray-900">Reservations</a>
            <a href="#contact" className="mr-5 hover:text-gray-900">Contact Us</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Reserve Now
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <main className="flex-grow">
        {/* Your content here */}
      </main>
      <footer className="bg-white">
        {/* Your footer content here */}
      </footer>
    </div>
  );
};

export default GeneratedComponent;