import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-white font-sans leading-normal tracking-normal">
      <div className="flex items-center justify-center h-screen">
        <img src="https://static.photos/architecture/300x300/182.webp" alt="Architecture Logo" className="w-1/2" />
      </div>
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl mb-4">Welcome to Our Architecture Firm</h1>
        <p className="text-center mb-8">
          We are a leading architecture firm specializing in creating unique and innovative designs. Our team of experienced architects and designers work closely with our clients to understand their needs and translate them into beautiful, functional spaces. We believe in the power of design to transform the world around us and we are committed to making that a reality.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="relative">
            <img src="https://static.photos/architecture/900x600/183.webp" alt="Portfolio 1" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-xl">Portfolio 1</p>
            </div>
          </div>
          <div className="relative">
            <img src="https://static.photos/architecture/900x600/184.webp" alt="Portfolio 2" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-xl">Portfolio 2</p>
            </div>
          </div>
          <div className="relative">
            <img src="https://static.photos/architecture/900x600/185.webp" alt="Portfolio 3" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-xl">Portfolio 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;