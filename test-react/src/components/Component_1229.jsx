import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-indigo-100">
      <header className="flex justify-center items-center h-screen bg-indigo-500">
        <img src="https://static.photos/business/900x600/31.webp" alt="Header Image" />
      </header>
      <nav className="flex justify-center items-center h-16 bg-indigo-600 text-white">
        {/* Navigation links go here */}
      </nav>
      <main className="flex justify-center items-center h-screen">
        <div className="flex flex-col w-1/3 p-4 bg-white m-4">
          <h2 className="text-2xl mb-4">Features</h2>
          <p>Real and long sentences about the features of the business.</p>
        </div>
        <div className="flex flex-col w-1/3 p-4 bg-white m-4">
          <h2 className="text-2xl mb-4">Services</h2>
          <p>Real and long sentences about the services of the business.</p>
        </div>
        <div className="flex flex-col w-1/3 p-4 bg-white m-4">
          <h2 className="text-2xl mb-4">About Us</h2>
          <p>Real and long sentences about the company.</p>
        </div>
      </main>
      <footer className="flex justify-center items-center h-16 bg-indigo-600 text-white">
        <button className="bg-white hover:bg-indigo-500 text-indigo-500 hover:text-white font-bold py-2 px-4 rounded">
          Call to Action
        </button>
      </footer>
    </div>
  );
};

export default GeneratedComponent;