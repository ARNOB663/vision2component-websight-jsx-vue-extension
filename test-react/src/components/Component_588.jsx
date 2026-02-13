import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 shadow">
        <h1 className="text-2xl font-bold">Travel Agency</h1>
      </header>

      <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <section className="bg-white p-4 shadow">
          <h2 className="text-xl font-bold">Destinations</h2>
          {/* Destinations content goes here */}
        </section>

        <section className="bg-white p-4 shadow">
          <h2 className="text-xl font-bold">Packages</h2>
          {/* Packages content goes here */}
        </section>

        <section className="bg-white p-4 shadow">
          <h2 className="text-xl font-bold">Blog</h2>
          {/* Blog content goes here */}
        </section>

        <section className="bg-white p-4 shadow">
          <h2 className="text-xl font-bold">Contact Information</h2>
          {/* Contact Information content goes here */}
        </section>
      </main>

      <footer className="bg-white p-4 shadow text-center">
        <p>© 2022 Travel Agency</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;