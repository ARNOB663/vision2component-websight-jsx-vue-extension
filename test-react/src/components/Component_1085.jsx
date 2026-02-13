import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="flex justify-between items-center p-4 bg-white">
        <img src="https://static.photos/travel/300x300/87.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-purple-500 hover:text-purple-700">Home</a></li>
            <li><a href="#" className="text-purple-500 hover:text-purple-700">Destinations</a></li>
            <li><a href="#" className="text-purple-500 hover:text-purple-700">About Us</a></li>
            <li><a href="#" className="text-purple-500 hover:text-purple-700">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to our travel agency</h1>
        <p className="mb-4">We are a team of travel experts who are passionate about helping you plan your next adventure. Whether you're looking for a relaxing beach getaway, an exhilarating city break, or an adventurous trek, we've got you covered.</p>
        {/* Add your images here */}
      </main>

      <footer className="p-4 bg-white">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Travel Deals</h2>
            <p>Check out our latest travel deals and special offers.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p>Get in touch with us for any inquiries or bookings.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;