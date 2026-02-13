import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">IT Consultancy</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-500 hover:text-gray-700">Home</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-700">About</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-700">Services</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-700">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <section className="flex space-x-4">
          <div className="w-1/3 p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">Services</h2>
            {/* Add your services here */}
          </div>

          <div className="w-1/3 p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">Team Members</h2>
            {/* Add your team members here */}
          </div>

          <div className="w-1/3 p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">Client Testimonials</h2>
            {/* Add your testimonials here */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;