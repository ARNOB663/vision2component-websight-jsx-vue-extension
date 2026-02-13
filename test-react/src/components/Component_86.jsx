import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="fixed top-0 right-0 w-full bg-white shadow-md">
        <nav className="flex justify-end p-4">
          <a href="#" className="px-4 py-2 text-gray-800 hover:text-gray-600">Home</a>
          <a href="#" className="px-4 py-2 text-gray-800 hover:text-gray-600">New Items</a>
          <a href="#" className="px-4 py-2 text-gray-800 hover:text-gray-600">Bestsellers</a>
          <a href="#" className="px-4 py-2 text-gray-800 hover:text-gray-600">Latest Trends</a>
        </nav>
      </header>

      <main className="container mx-auto pt-20 pb-10">
        <section className="flex justify-between mb-10">
          <div className="w-1/3 p-4 bg-white shadow-md">
            <h2 className="text-2xl mb-4">New Items</h2>
            {/* Add your new items here */}
          </div>

          <div className="w-1/3 p-4 bg-white shadow-md">
            <h2 className="text-2xl mb-4">Bestsellers</h2>
            {/* Add your bestsellers here */}
          </div>

          <div className="w-1/3 p-4 bg-white shadow-md">
            <h2 className="text-2xl mb-4">Latest Trends</h2>
            {/* Add your latest trends here */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;