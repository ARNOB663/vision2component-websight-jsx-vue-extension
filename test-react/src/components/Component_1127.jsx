import React, { useState } from 'react';

const GeneratedComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: "url('https://static.photos/business/1600x900/128.webp')" }}>
        <img src="https://static.photos/business/300x300/129.webp" alt="Logo" className="w-32" />
      </header>
      <nav className="bg-gray-800 text-white p-4 relative">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="absolute right-4 top-4 md:hidden">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        <ul className={`flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
          <li><a href="#" className="text-white hover:text-purple-300">Home</a></li>
          <li><a href="#" className="text-white hover:text-purple-300">About</a></li>
          <li><a href="#" className="text-white hover:text-purple-300">Services</a></li>
          <li><a href="#" className="text-white hover:text-purple-300">Contact</a></li>
        </ul>
      </nav>
      <main className="flex-grow p-4">
        <h1 className="text-4xl text-center my-8">Welcome to Our Tech Company</h1>
        <p className="text-lg text-justify">
          At our tech company, we are dedicated to providing the best in technology solutions. We specialize in a wide range of services, from software development to cybersecurity, and everything in between. Our team of experts is committed to delivering high-quality, reliable solutions that meet and exceed our clients' expectations. Whether you're a small business or a large corporation, we're here to help you leverage the power of technology to achieve your goals.
        </p>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        © 2022 Tech Company. All rights reserved.
      </footer>
    </div>
  );
};

export default GeneratedComponent;