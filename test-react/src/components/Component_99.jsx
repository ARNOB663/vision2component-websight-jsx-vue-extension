import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://picsum.photos/seed/99/1600/900')" }}>
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center">
            <img src="https://picsum.photos/seed/99/300/300" alt="Logo" className="h-16" />
          </div>
          <nav className="flex justify-center mt-4">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-800 hover:text-gray-600">New Arrivals</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Best Sellers</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Sale</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Add your products here */}
        </div>

        <h2 className="text-2xl font-bold mb-4 mt-8">Best Sellers</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Add your products here */}
        </div>

        <h2 className="text-2xl font-bold mb-4 mt-8">Sale</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Add your products here */}
        </div>
      </div>
    </>
  );
};

export default GeneratedComponent;