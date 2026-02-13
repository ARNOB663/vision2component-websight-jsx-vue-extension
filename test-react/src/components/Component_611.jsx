import React from 'react';

const PropertyCard = ({ imageUrl, title, description }) => (
  <div className="bg-white p-4 shadow-md">
    <img src={imageUrl} alt="Property Image" className="w-full h-64 object-cover" />
    <h3 className="text-2xl mt-4">{title}</h3>
    <p className="mt-2">{description}</p>
  </div>
);

const GeneratedComponent = () => (
  <div className="bg-yellow-500">
    <header className="bg-green-500 text-white text-center py-16">
      <h1 className="text-4xl">Welcome to Our Real Estate Company</h1>
      <p className="mt-4 text-xl">We are a leading real estate company in the industry, offering a wide range of properties for sale and rent. Our team of experienced realtors is dedicated to providing you with the best service possible.</p>
    </header>

    <section className="py-16">
      <h2 className="text-3xl text-center mb-8">Properties for Sale</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PropertyCard 
          imageUrl="https://static.photos/real-estate/900x600/13.webp" 
          title="Beautiful House for Sale" 
          description="This is a beautiful house located in the heart of the city. It has 3 bedrooms and 2 bathrooms."
        />
        {/* Add more PropertyCard components for other properties */}
      </div>
    </section>

    <section className="py-16 bg-green-500 text-white">
      <h2 className="text-3xl text-center mb-8">Properties for Rent</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PropertyCard 
          imageUrl="https://static.photos/real-estate/900x600/14.webp" 
          title="Spacious Apartment for Rent" 
          description="This is a spacious apartment located in the city center. It has 2 bedrooms and 1 bathroom."
        />
        {/* Add more PropertyCard components for other properties */}
      </div>
    </section>
  </div>
);

export default GeneratedComponent;