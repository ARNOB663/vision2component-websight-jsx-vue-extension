import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-purple-500 text-white p-4">
        <h1 className="text-2xl font-bold">Welcome to our travel site</h1>
        <p className="mt-2">We offer the best deals on your dream vacation. From luxury resorts to budget-friendly getaways, we have something for everyone.</p>
      </header>

      <main className="flex flex-col md:flex-row p-4">
        <section className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-bold mb-2">Destination Options</h2>
          {/* Add your destination options here */}
        </section>

        <section className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-bold mb-2">Booking Form</h2>
          {/* Add your booking form here */}
        </section>
      </main>

      <footer className="bg-purple-500 text-white p-4">
        <h3 className="text-xl font-bold mb-2">Contact Us</h3>
        <p>Email: info@travelsite.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 1234 Travel St, Anytown, USA</p>
      </footer>
    </>
  );
};

export default GeneratedComponent;