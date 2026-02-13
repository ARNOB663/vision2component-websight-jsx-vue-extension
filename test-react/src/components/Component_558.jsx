import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-gray-500 text-white p-4">
        <h1 className="text-2xl font-bold">Education Site</h1>
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-xl font-bold mb-4">Articles</h2>
            {/* Article content goes here */}
          </div>
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-xl font-bold mb-4">Resources</h2>
            {/* Resource content goes here */}
          </div>
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-xl font-bold mb-4">Popular Content</h2>
            {/* Popular content goes here */}
          </div>
        </div>
      </main>

      <footer className="bg-gray-500 text-white p-4">
        <p className="text-center">© 2022 Education Site. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;