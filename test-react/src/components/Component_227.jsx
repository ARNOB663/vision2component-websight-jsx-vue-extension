import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="w-full">
        <img src="https://picsum.photos/seed/227/900/600" alt="Header Image" className="w-full" />
      </header>
      <nav className="bg-white p-4 shadow flex justify-end">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Products</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
        </ul>
      </nav>
      <main className="container mx-auto p-4 flex">
        <aside className="w-1/4 p-4">
          <h2 className="text-xl mb-4">Filters</h2>
          {/* Add your filters here */}
        </aside>
        <section className="w-2/4 p-4">
          <h2 className="text-xl mb-4">Products</h2>
          {/* Add your products here */}
        </section>
        <aside className="w-1/4 p-4">
          <h2 className="text-xl mb-4">Related Products</h2>
          {/* Add your related products here */}
        </aside>
      </main>
      <footer className="bg-white p-4 shadow text-center">
        <p className="text-gray-600">© 2022 Fashion Brand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;