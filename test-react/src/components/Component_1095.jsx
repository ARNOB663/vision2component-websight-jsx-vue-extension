import React from 'react';

const PropertyCard = ({ imageSrc, title, description }) => (
  <div className="flex flex-wrap">
    <div className="w-full md:w-1/2 p-4 md:p-2">
      <img className="block h-auto" src={imageSrc} alt="House" />
    </div>
    <div className="w-full md:w-1/2 p-4 md:p-2">
      <h2 className="text-2xl font-bold py-4">{title}</h2>
      <p className="text-base">{description}</p>
    </div>
  </div>
);

const GeneratedComponent = () => (
  <div className="bg-gray-100 font-sans leading-normal tracking-normal">
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style={{ fontFamily: "'Merriweather', serif;" }}>
        <div className="font-sans font-bold break-normal pt-6 pb-2 text-gray-900 px-4 md:px-20">
          <h2 className="text-4xl">Welcome to Our Real Estate Agency</h2>
        </div>
        <div className="text-lg px-4 md:px-20">
          <p className="py-2">
            At our real estate agency, we are committed to providing our clients with the best possible service. We understand that buying or selling a home is a big decision, and we are here to help you every step of the way. Whether you're looking for a new home, selling your current one, or investing in real estate, we have the resources and expertise to help you.
          </p>
        </div>
      </div>
      <PropertyCard 
        imageSrc="https://static.photos/real-estate/900x600/97.webp" 
        title="Property 1" 
        description="This is a beautiful property located in the heart of the city. It features a spacious open plan living area, modern kitchen, and a private garden. It's perfect for those who are looking for a home with a lot of character and style."
      />
      {/* Repeat the above PropertyCard for each property */}
    </div>
  </div>
);

export default GeneratedComponent;