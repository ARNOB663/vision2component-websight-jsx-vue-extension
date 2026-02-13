import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="antialiased bg-gray-200">
      <header className="relative">
        <img src="https://static.photos/nature/900x600/92.webp" alt="People in action" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl text-white">Non-profit Organization</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="flex flex-col items-center justify-center">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-8">
            Donate Now
          </button>
          <p className="text-center text-lg">
            Our mission is to provide a platform for individuals and organizations to come together to make a difference in their communities. We believe in the power of collective action and strive to create a world where everyone has the opportunity to thrive.
          </p>
        </section>
      </main>

      <aside className="w-1/4 p-4">
        <h2 className="text-2xl mb-4">Testimonials</h2>
        {/* Add testimonials here */}
      </aside>
    </div>
  );
};

export default GeneratedComponent;