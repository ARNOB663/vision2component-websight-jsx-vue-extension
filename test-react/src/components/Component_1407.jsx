import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-red-500 text-white text-center py-12">
        <h1 className="text-4xl">Nonprofit Organization</h1>
        <p className="mt-4">We are a nonprofit organization dedicated to making a difference in the world.</p>
      </header>

      <section className="py-12">
        <h2 className="text-3xl text-center mb-6">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4">
            <h3 className="text-xl mb-2">Story 1</h3>
            <p>We have helped thousands of people in need by providing food, shelter, and education.</p>
          </div>
          <div className="bg-white p-4">
            <h3 className="text-xl mb-2">Story 2</h3>
            <p>We have been able to provide medical care to thousands of patients in need.</p>
          </div>
          <div className="bg-white p-4">
            <h3 className="text-xl mb-2">Story 3</h3>
            <p>We have been able to provide education to thousands of children in need.</p>
          </div>
        </div>
      </section>

      <section className="bg-red-500 text-white text-center py-12">
        <h2 className="text-3xl mb-6">Donate Now</h2>
        <p className="mb-4">Your donation can make a difference.</p>
        <button className="bg-white text-red-500 px-4 py-2 rounded">Donate</button>
      </section>
    </div>
  );
};

export default GeneratedComponent;