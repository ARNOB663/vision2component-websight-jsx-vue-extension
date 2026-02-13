import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-cover bg-center h-screen flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('https://static.photos/restaurant/1600x900/94.webp')" }}>
        <div>
          <h1 className="text-4xl">Welcome to Our Restaurant</h1>
          <p className="text-xl mt-3">We are a family-owned restaurant dedicated to providing the best food in the city.</p>
          <button className="mt-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Make a Reservation
          </button>
        </div>
      </header>

      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4 justify-center">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">Menu</a></li>
          <li><a href="#" className="hover:text-gray-300">About Us</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
        </ul>
      </nav>

      <main className="max-w-4xl mx-auto p-4">
        {/* Your main content here */}
      </main>

      <footer className="bg-gray-800 text-white p-4">
        {/* Your footer content here */}
      </footer>
    </>
  );
};

export default GeneratedComponent;