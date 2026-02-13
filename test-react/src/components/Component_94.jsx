import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-pink-500 text-white p-4">
        <h1 className="text-2xl font-bold">Real Estate Company</h1>
        <div className="mt-4">
          <input type="text" placeholder="Search properties..." className="w-full p-2 rounded" />
        </div>
      </header>

      <main className="flex flex-col md:flex-row p-4">
        <section className="w-full md:w-1/3 p-4 bg-red-200">
          <h2 className="text-xl font-bold mb-4">Properties</h2>
          <p>We have a wide range of properties for sale and rent. Whether you're looking for a luxury home, a cozy apartment, or a spacious office space, we have something for everyone.</p>
        </section>

        <section className="w-full md:w-1/3 p-4 bg-green-200">
          <h2 className="text-xl font-bold mb-4">Testimonials</h2>
          <p>Our clients love us. They have been thrilled with our service and the properties we have provided. They have been happy with their new homes and offices.</p>
        </section>

        <section className="w-full md:w-1/3 p-4 bg-pink-200">
          <h2 className="text-xl font-bold mb-4">Company Information</h2>
          <p>We are a real estate company that has been in business for over 20 years. We have a team of experienced realtors who are dedicated to providing you with the best service possible.</p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;