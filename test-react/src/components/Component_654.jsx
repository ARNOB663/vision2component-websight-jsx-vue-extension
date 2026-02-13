import React from 'react';

const GeneratedComponent = () => {
  return (
    <div>
      <header className="bg-cover bg-center h-screen flex items-center justify-center text-white" style={{ backgroundImage: "url('https://static.photos/travel/1600x900/55.webp')" }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to our Travel Agency</h1>
          <p className="text-xl">We are a travel agency that offers a wide range of services to make your travel experience unforgettable.</p>
        </div>
      </header>

      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4 justify-center">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      <main className="max-w-screen-lg mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p>We are a team of experienced travel professionals who are passionate about travel. We have been in the industry for over 20 years and have a wide network of partners around the world.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <p>We offer a wide range of services including flight bookings, hotel reservations, travel insurance, and more. We also provide personalized travel plans to suit your needs.</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2022 Travel Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;