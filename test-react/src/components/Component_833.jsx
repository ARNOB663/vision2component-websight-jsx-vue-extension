import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-white">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src="https://static.photos/architecture/300x300/35.webp" alt="Logo" className="w-12 h-12" />
          <h1 className="ml-4 text-2xl font-bold">Architecture Firm</h1>
        </div>
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center h-screen">
        <img src="https://static.photos/architecture/900x600/36.webp" alt="Hero Image" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <h2 className="relative text-4xl font-bold text-white">Welcome to our Architecture Firm</h2>
      </main>
      <section className="p-4">
        <h2 className="text-2xl font-bold">Our Projects</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="relative">
            <img src="https://static.photos/architecture/900x600/37.webp" alt="Project 1" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <h3 className="text-2xl font-bold text-white">Project 1</h3>
            </div>
          </div>
          {/* Repeat the above div for each project */}
        </div>
      </section>
    </div>
  );
};

export default GeneratedComponent;