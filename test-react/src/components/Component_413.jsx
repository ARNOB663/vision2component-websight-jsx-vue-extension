import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <img src="https://static.photos/technology/300x300/15.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Benefits</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Testimonials</a></li>
          </ul>
        </nav>
      </header>

      <section className="bg-white p-4 flex flex-col items-center">
        <img src="https://static.photos/technology/900x600/16.webp" alt="Product" className="w-full h-64 object-cover" />
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4">
          Learn More
        </button>
      </section>

      <section className="bg-white p-4 flex flex-col items-center">
        <h2 className="text-2xl mb-4">Features</h2>
        <p className="text-gray-600 mb-4">Our product is designed to provide a seamless and efficient experience for our users.</p>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4">
          Learn More
        </button>
      </section>

      <section className="bg-white p-4 flex flex-col items-center">
        <h2 className="text-2xl mb-4">Benefits</h2>
        <p className="text-gray-600 mb-4">Our product offers a number of benefits, including increased efficiency, improved user experience, and cost savings.</p>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4">
          Learn More
        </button>
      </section>
    </div>
  );
};

export default GeneratedComponent;