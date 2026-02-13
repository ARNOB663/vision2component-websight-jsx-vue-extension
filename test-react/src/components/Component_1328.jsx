import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen antialiased bg-gray-200">
      <aside className="bg-white w-full md:w-60">
        <nav className="px-4 py-6">
          <ul>
            <li><a href="#" className="text-red-500 hover:text-red-700">Home</a></li>
            <li><a href="#" className="text-red-500 hover:text-red-700">About</a></li>
            <li><a href="#" className="text-red-500 hover:text-red-700">Contact</a></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4">
        <div className="bg-cover bg-center h-64" style={{ backgroundImage: "url('https://static.photos/people/1600x900/129.webp')" }}>
          <div className="flex items-center justify-center h-full text-white text-center text-3xl">
            <h1 className="bg-black bg-opacity-50 p-4">Join our mission to make a difference</h1>
          </div>
        </div>
        <div className="my-8">
          <h2 className="text-2xl mb-4">About Us</h2>
          <p className="text-gray-700">
            We are a non-profit organization dedicated to making a difference in the world. We believe in the power of community and strive to create a world where everyone has the opportunity to thrive. We are committed to using our skills and resources to make a positive impact in our community and beyond.
          </p>
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;