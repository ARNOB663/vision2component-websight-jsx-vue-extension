import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-indigo-500 text-white text-center py-16">
        <h1 className="text-4xl">Welcome to our Travel Agency</h1>
        <p className="mt-4">We offer the best travel experiences for your next adventure.</p>
        <button className="mt-8 bg-white text-indigo-500 px-4 py-2 rounded">Book Now</button>
      </header>

      <main className="flex flex-wrap">
        <section className="w-full md:w-2/3 p-8">
          <h2 className="text-2xl mb-4">Featured Destinations</h2>
          {/* Add your featured destinations here */}
        </section>

        <aside className="w-full md:w-1/3 p-8 bg-gray-200">
          <h2 className="text-2xl mb-4">Travel Tips</h2>
          {/* Add your travel tips here */}
        </aside>
      </main>

      <footer className="bg-indigo-500 text-white text-center py-4">
        <p>&copy; 2022 Our Travel Agency</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;