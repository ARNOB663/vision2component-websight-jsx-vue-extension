import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="block h-8 w-auto" src="https://static.photos/business/300x300/49.webp" alt="Workflow" />
              </div>
            </div>
            <nav className="flex items-center space-x-4">
              <a href="#" className="text-gray-900 hover:text-gray-900">Accounts</a>
              <a href="#" className="text-gray-900 hover:text-gray-900">Loans</a>
              <a href="#" className="text-gray-900 hover:text-gray-900">Investments</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Welcome to our banking site</h2>
          <p className="mt-4 text-lg text-gray-500">
            We are a leading provider of banking services. Our team of experts is dedicated to providing you with the best possible service.
          </p>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
          <div className="mt-10">
            {/* Add your service cards here */}
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 py-8 md:flex md:items-center md:justify-between">
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">&copy; 2022 Banking Site. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;