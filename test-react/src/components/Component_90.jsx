import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <img src="https://picsum.photos/seed/90/300/300" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Artists</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Exhibitions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Purchase</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-2xl mb-4">Featured Artists</h2>
          {/* Artist information goes here */}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl mb-4">Exhibitions</h2>
          {/* Exhibition information goes here */}
        </section>

        <section>
          <h2 className="text-2xl mb-4">Purchase Information</h2>
          {/* Purchase information goes here */}
        </section>
      </main>

      <footer className="bg-white p-4 text-center text-gray-600">
        <p>© 2022 Art Gallery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;