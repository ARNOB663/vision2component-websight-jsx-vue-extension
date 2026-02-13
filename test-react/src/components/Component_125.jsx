import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="bg-indigo-500 text-white p-4">
        <form className="flex justify-center">
          <input className="rounded-l p-2" type="text" placeholder="Search properties..." />
          <button className="bg-white text-indigo-500 rounded-r p-2">Search</button>
        </form>
      </nav>
      <main className="flex-grow flex">
        <div className="w-1/2 p-4">
          <img className="w-full" src="https://picsum.photos/seed/125/900/600" alt="Property Image" />
        </div>
        <div className="w-1/2 p-4">
          <h1 className="text-2xl mb-4">Property Details</h1>
          <p className="mb-2">This is a beautiful property located in the heart of the city. It features a modern design with high ceilings and spacious rooms. The property is fully equipped with all modern amenities. The location is perfect for families or couples who love to enjoy the city life.</p>
          <p className="mb-2">The property is located in a quiet neighborhood, only a few minutes walk from the city center. The neighborhood is full of restaurants, shops, and parks. The public transportation is very convenient, and the property is a 10-minute walk from the bus stop.</p>
        </div>
      </main>
      <footer className="bg-indigo-500 text-white p-4">
        <h2 className="text-xl mb-2">Contact Information</h2>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@realestate.com</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;