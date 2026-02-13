import React from 'react';

const PropertyCard = ({ title, imageSrc, description, link }) => (
  <div className="bg-white rounded shadow p-4 w-full md:w-1/3 px-4 mb-8">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <img src={imageSrc} alt={title} className="mb-4" />
    <p className="mb-2">{description}</p>
    <a href={link} className="text-blue-500">{linkText}</a>
  </div>
);

const GeneratedComponent = () => (
  <div className="container mx-auto px-4 py-8 bg-gray-100">
    <h1 className="text-3xl font-bold mb-4">Welcome to Our Real Estate Site</h1>
    <p className="mb-8">
      At our real estate site, we are dedicated to providing our clients with the best possible service. We understand that buying or selling a home can be a big decision, which is why we offer a wide range of services to make the process as smooth as possible. Whether you're looking for a new home, selling your current one, or simply looking for advice, we're here to help.
    </p>
    <div className="flex flex-wrap -mx-4">
      <PropertyCard 
        title="Property 1" 
        imageSrc="https://picsum.photos/seed/145/900/600" 
        description="This is a beautiful property located in the heart of the city. It features a modern design with high-end finishes and plenty of space for all your needs." 
        link="#"
      />
      {/* Repeat the above PropertyCard for each property */}
    </div>
    <footer className="bg-gray-800 text-white p-4">
      <p>© 2022 Real Estate Site. All rights reserved.</p>
    </footer>
  </div>
);

export default GeneratedComponent;