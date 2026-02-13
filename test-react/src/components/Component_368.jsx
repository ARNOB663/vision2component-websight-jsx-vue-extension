import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4">
        <img src="https://picsum.photos/seed/368/900/600" alt="Header Image" className="w-full" />
      </header>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to our Fashion Brand</h1>
        <p className="mb-4">
          At our fashion brand, we believe in the power of style to elevate the everyday. Our collection is a fusion of the latest trends, mixing classic silhouettes with modern flair. We offer a wide range of styles for every occasion, from casual wear to formal attire. Our products are made with high-quality materials and are designed to last.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add your product cards here */}
        </div>
      </main>

      <footer className="bg-white p-4">
        <h2 className="text-2xl font-bold mb-4">Follow us on Instagram</h2>
        {/* Add your Instagram feed here */}
      </footer>
    </div>
  );
};

export default GeneratedComponent;