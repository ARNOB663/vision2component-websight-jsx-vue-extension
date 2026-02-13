import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-200">
      <header className="relative">
        <img 
          src="https://static.photos/architecture/900x600/9.webp" 
          alt="Architecture" 
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-start p-4">
          <nav className="hidden">
            {/* Navigation links here */}
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <h1 className="text-4xl mb-4">Welcome to Our Architecture Firm</h1>
        <p className="mb-4">
          At our firm, we specialize in creating innovative and sustainable designs for a wide range of projects. Our team of experienced architects and designers work closely with our clients to understand their needs and translate them into beautiful, functional spaces. We believe that architecture is more than just a profession - it's a way of life. We strive to create spaces that are not just beautiful, but also practical, efficient, and environmentally friendly.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {/* Projects here */}
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;