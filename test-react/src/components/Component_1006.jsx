import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="relative bg-cover bg-no-repeat bg-center h-[300px]">
        <img src="https://static.photos/mountain/900x600/8.webp" alt="Travel Destination" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl text-white">Welcome to our Travel Agency</h1>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <section className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700">
              We are a team of experienced travel experts who are passionate about helping you discover the world. We specialize in creating unforgettable travel experiences for our clients. Whether you're looking for a relaxing beach vacation, an adventurous trek, or a cultural immersion, we've got you covered.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Reservation Form</h2>
            {/* Your reservation form goes here */}
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2022 Travel Agency. All rights reserved.</p>
      </footer>
    </>
  );
};

export default GeneratedComponent;