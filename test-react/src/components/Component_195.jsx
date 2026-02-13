import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white p-4 flex items-center justify-between">
        <div>
          <img src="https://picsum.photos/seed/195/300/300" alt="Clinic Logo" className="h-10" />
          <span className="ml-4 text-xl font-bold">Healthcare Clinic</span>
        </div>
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
          Book Now
        </button>
      </header>
      <main className="container mx-auto p-4">
        <section className="bg-white p-4 mb-4">
          <h2 className="text-2xl mb-4">Welcome to Healthcare Clinic</h2>
          <p className="mb-4">
            At Healthcare Clinic, we are committed to providing the highest quality of care to our patients. Our clinic is designed to be a comfortable and welcoming environment, with experienced doctors and staff who are dedicated to providing you with the best possible care.
          </p>
          <img src="https://picsum.photos/seed/195/900/600" alt="Healthcare Clinic" className="w-full" />
        </section>
        <section className="bg-white p-4 mb-4">
          <h2 className="text-2xl mb-4">Our Services</h2>
          <p className="mb-4">
            We offer a wide range of services including general check-ups, specialist consultations, and more. Our experienced team of doctors and nurses are here to help you with any health concerns you may have.
          </p>
        </section>
        {/* Add more sections as needed */}
      </main>
    </div>
  );
};

export default GeneratedComponent;