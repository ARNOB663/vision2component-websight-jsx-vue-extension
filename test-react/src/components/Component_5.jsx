import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex items-center justify-between">
        <img src="https://picsum.photos/seed/5/300/300" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#vacation-packages" className="text-gray-600 hover:text-gray-900">Vacation Packages</a></li>
            <li><a href="#destinations" className="text-gray-600 hover:text-gray-900">Destinations</a></li>
            <li><a href="#customer-reviews" className="text-gray-600 hover:text-gray-900">Customer Reviews</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <section id="vacation-packages" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Vacation Packages</h2>
          {/* Add your vacation packages here */}
        </section>

        <section id="destinations" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Destinations</h2>
          {/* Add your destinations here */}
        </section>

        <section id="customer-reviews" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          {/* Add your customer reviews here */}
        </section>
      </main>

      <footer className="bg-white p-4 text-center text-gray-600">
        <p>© 2022 Travel Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export { GeneratedComponent };