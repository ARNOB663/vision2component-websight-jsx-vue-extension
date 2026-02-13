import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex items-center">
        <img src="https://picsum.photos/seed/150/300/300" alt="Logo" className="h-10 w-10" />
        <h1 className="ml-4 text-2xl font-bold">Health Food Site</h1>
        <p className="ml-4 text-gray-600">Warm and inviting design with a full-screen background image of healthy food.</p>
      </header>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          <section>
            <h2 className="text-xl font-bold mb-4">Recipe Sections</h2>
            {/* Recipe sections go here */}
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Product Catalog</h2>
            {/* Product catalog goes here */}
          </section>
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;