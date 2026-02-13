import React from 'react';

const PropertyCard = ({ imageUrl, title, description }) => (
  <div className="bg-white p-4">
    <img src={imageUrl} alt={title} className="w-full h-auto mb-4" />
    <h2 className="text-xl mb-2">{title}</h2>
    <p>{description}</p>
  </div>
);

const GeneratedComponent = () => (
  <div className="bg-gray-100 font-sans leading-normal tracking-normal">
    <header className="bg-white text-center py-10">
      <img src="https://static.photos/real-estate/300x300/182.webp" alt="Real Estate Logo" className="inline-block" />
    </header>
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl mb-5">Welcome to Real Estate</h1>
      <p className="mb-10">At Real Estate, we are committed to providing our clients with the best possible service. We understand that buying or selling a home is a big decision, and we are here to help you every step of the way. Whether you're looking for a new home, selling your current one, or simply looking for advice, we're here to help.</p>
      <div className="grid grid-cols-3 gap-4">
        <PropertyCard 
          imageUrl="https://static.photos/real-estate/900x600/183.webp" 
          title="House for Sale" 
          description="This beautiful house is waiting for you to make it your own."
        />
        {/* Add more PropertyCard components for each property listing */}
      </div>
    </main>
  </div>
);

export default GeneratedComponent;