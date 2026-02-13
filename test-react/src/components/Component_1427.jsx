import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <img src="https://static.photos/real-estate/300x300/29.webp" alt="Company Logo" />
        <button className="bg-white text-blue-500 px-4 py-2 rounded">Search for properties</button>
      </header>

      <div className="flex p-4">
        <div className="w-1/3 bg-white p-4 mr-4">
          <h2 className="text-lg font-bold mb-4">Our Services</h2>
          <p className="mb-4">We provide a wide range of services to our clients, including property listings, property management, and marketing services.</p>
          <h2 className="text-lg font-bold mb-4">Testimonials</h2>
          <p>"I was very happy with the service I received from this agency. They were professional, efficient, and made me a happy client." - John Doe</p>
        </div>

        <div className="w-2/3 bg-white p-4">
          <h1 className="text-2xl font-bold mb-4">Properties for Sale and Rent</h1>
          <div className="mb-4">
            <h2 className="text-lg font-bold">Property 1</h2>
            <img src="https://static.photos/real-estate/900x600/30.webp" alt="Property 1" />
            <p>This is a beautiful house for sale. It is located in a quiet neighborhood with plenty of green space.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-bold">Property 2</h2>
            <img src="https://static.photos/real-estate/900x600/31.webp" alt="Property 2" />
            <p>This is a spacious apartment for rent. It is located in a vibrant neighborhood with plenty of restaurants and shops.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;