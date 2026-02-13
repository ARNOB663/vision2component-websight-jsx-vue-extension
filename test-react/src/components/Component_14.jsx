import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-green-100">
      <header className="bg-green-500 text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Florist</h1>
          <p className="text-sm">Welcome to our Florist, where we specialize in creating beautiful and unique arrangements for any occasion.</p>
        </div>
        <div>
          <input type="text" placeholder="Search..." className="p-2 rounded-md" />
        </div>
      </header>
      <main className="p-4">
        <h2 className="text-xl font-bold mb-4">Featured Arrangements</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://picsum.photos/seed/14/900/600" alt="Flowers" className="w-full h-64 object-cover" />
            <h3 className="text-lg font-bold mt-2">Flowers</h3>
            <p className="text-sm">A beautiful bouquet of flowers for any occasion.</p>
          </div>
          {/* Add more arrangements here */}
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;