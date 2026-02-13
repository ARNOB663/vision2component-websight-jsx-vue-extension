import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-red-100">
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center bg-red-500 text-white p-4 mb-4">
          <input type="text" placeholder="Search properties..." className="w-full md:w-1/2 p-2 rounded" />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <img src="https://picsum.photos/seed/210/900/600" alt="Property Image" className="w-full" />
          </div>
          <div className="w-full md:w-1/2 p-4 bg-red-200">
            <h2 className="text-2xl mb-2">Property Information</h2>
            <p className="mb-2">This is a beautiful property located in the heart of the city. It features a spacious living area, modern kitchen, and a private garden. The property is perfect for families or individuals who love to spend time in nature.</p>
            <p className="mb-2">The property is located in a quiet neighborhood, with easy access to public transportation and a variety of local shops and restaurants. The area is also close to popular tourist attractions.</p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-red-500 text-white p-4 mt-4">
          <div className="flex flex-col md:flex-row">
            <a href="#" className="mr-4">FAQs</a>
            <a href="#" className="mr-4">About Us</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;