import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <a className="text-xl text-black font-bold" href="#">Real Estate Agency</a>
          </div>
          <div className="flex space-x-4">
            <a className="text-black hover:text-pink-500" href="#">Properties for Sale</a>
            <a className="text-black hover:text-pink-500" href="#">Properties for Rent</a>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl text-center font-bold mb-6">Welcome to our Real Estate Agency</h1>
        <p className="text-lg text-center mb-6">
          We are a professional real estate agency specializing in finding your dream home. 
          Whether you're looking for a luxury condo, a cozy cottage, or a spacious villa, 
          we have the perfect property for you. We understand that buying a home is a big decision, 
          which is why we provide a wide range of properties to choose from.
        </p>
        {/* Add your property listings here */}
      </div>
    </div>
  );
};

export default GeneratedComponent;