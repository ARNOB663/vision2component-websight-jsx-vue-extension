import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between">
          <a href="#" className="flex items-center text-black no-underline hover:text-red-dark">
            <img src="https://static.photos/technology/300x300/107.webp" alt="Logo" className="h-10" />
          </a>
          <div className="flex items-center">
            <button className="text-black hover:text-red-dark focus:outline-none">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <header className="bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: "url('https://static.photos/technology/1600x900/106.webp')" }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl text-white leading-tight">Welcome to our Digital Marketing Agency</h1>
          <p className="text-2xl text-white">We are a full-service digital marketing agency that helps businesses grow.</p>
          <div className="mt-8">
            <a href="#" className="bg-white text-red-dark font-bold no-underline text-lg py-2 px-4 rounded">Learn More</a>
            <a href="#" className="bg-transparent hover:bg-red-dark text-white hover:text-white font-bold no-underline text-lg py-2 px-4 ml-4 border-2 border-white hover:border-transparent rounded">Contact Us</a>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {/* Add your sections here */}
      </main>
      <footer className="bg-black text-white text-center py-8">
        <p>© 2022 Digital Marketing Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;