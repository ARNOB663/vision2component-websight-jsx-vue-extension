import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-200">
      <header className="bg-pink-500 text-white p-4">
        <h1 className="text-2xl font-bold">Technology Company</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <button className="md:hidden">
          {/* Hamburger icon */}
        </button>
      </header>
      <main className="flex flex-col items-center justify-center h-screen">
        <img src="https://picsum.photos/seed/9/900/600" alt="Hero Image" className="w-full h-full object-cover"/>
        <h2 className="text-4xl font-bold mt-8">Welcome to our Technology Company</h2>
        <p className="text-lg mt-4">We are a leading provider of cutting-edge technology solutions. Our team of experts is dedicated to delivering innovative and efficient solutions to meet your business needs. Whether you're looking for a new software, a custom hardware solution, or a complete IT infrastructure, we've got you covered.</p>
      </main>
    </div>
  );
};

export { GeneratedComponent };