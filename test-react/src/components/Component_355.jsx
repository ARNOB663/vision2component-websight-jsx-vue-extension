import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <img src="https://picsum.photos/seed/355/300/300" alt="Company Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="py-10">
        <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://picsum.photos/seed/355/1600/900')" }}>
          <div className="text-center pt-40">
            <h1 className="text-5xl text-white">Welcome to our travel agency</h1>
            <p className="text-xl text-white mt-4">We offer the best deals on flights, hotels, and tours</p>
            <button className="mt-6 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Book Now</button>
          </div>
        </section>

        {/* Add more sections as needed */}
      </main>

      <footer className="bg-white p-4 text-center">
        <p className="text-gray-600">© 2022 Travel Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;