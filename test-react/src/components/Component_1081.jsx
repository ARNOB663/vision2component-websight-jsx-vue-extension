import React from 'react';

const PropertyCard = ({ imageUrl, title, description }) => (
  <div className="bg-white p-4 rounded">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <h2 className="text-lg font-bold mt-2">{title}</h2>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <img src="https://static.photos/real-estate/300x300/83.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-green-500 hover:text-green-700">Home</a></li>
            <li><a href="#" className="text-green-500 hover:text-green-700">Properties</a></li>
            <li><a href="#" className="text-green-500 hover:text-green-700">About</a></li>
            <li><a href="#" className="text-green-500 hover:text-green-700">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <div className="flex justify-center">
          <input type="text" placeholder="Search properties..." className="px-4 py-2 rounded-full" />
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <PropertyCard 
            imageUrl="https://static.photos/real-estate/900x600/84.webp" 
            title="Beautiful House" 
            description="This is a beautiful house located in the heart of the city. It has a great view and is perfect for families." 
          />
          {/* Add more PropertyCard components as needed */}
        </div>
      </main>

      <footer className="bg-white p-4 mt-8">
        <div className="container mx-auto">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-green-500 hover:text-green-700">Neighborhood Guides</a></li>
            <li><a href="#" className="text-green-500 hover:text-green-700">Mortgage Calculators</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;