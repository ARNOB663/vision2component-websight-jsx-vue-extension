import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans bg-gray-800 text-gray-200">
      <header className="relative">
        <img 
          src="https://static.photos/architecture/900x600/193.webp" 
          alt="Construction Image" 
          className="w-full h-96 object-cover"
        />
        <nav className="absolute top-0 w-full">
          <ul className="flex justify-center p-4">
            <li className="px-4">
              <a href="#" className="text-gray-200 hover:text-white">Home</a>
            </li>
            <li className="px-4">
              <a href="#" className="text-gray-200 hover:text-white">About</a>
            </li>
            <li className="px-4">
              <a href="#" className="text-gray-200 hover:text-white">Services</a>
            </li>
            <li className="px-4">
              <a href="#" className="text-gray-200 hover:text-white">Projects</a>
            </li>
            <li className="px-4">
              <a href="#" className="text-gray-200 hover:text-white">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <h1 className="text-4xl text-center mb-4">Welcome to Our Construction Company</h1>
        <p className="text-lg mb-4">
          At our construction company, we specialize in building projects that are both beautiful and functional. We pride ourselves on our attention to detail, our commitment to quality, and our dedication to delivering projects on time and within budget. Whether you're looking for a new home, a commercial building, or a renovation, we're here to help.
        </p>
        {/* Add more sections as needed */}
      </main>
    </div>
  );
};

export default GeneratedComponent;