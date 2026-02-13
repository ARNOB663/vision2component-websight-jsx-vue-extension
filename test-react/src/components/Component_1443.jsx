import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="relative">
        <img src="https://static.photos/cars/900x600/45.webp" alt="Car Header Image" className="w-full" />
        <nav className="absolute top-0 w-full">
          <ul className="flex justify-end p-4">
            <li className="mr-6"><a href="#" className="text-white">Home</a></li>
            <li className="mr-6"><a href="#" className="text-white">Services</a></li>
            <li className="mr-6"><a href="#" className="text-white">About Us</a></li>
            <li className="mr-6"><a href="#" className="text-white">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <h1 className="text-4xl mb-4">Welcome to Our Automotive Repair Shop</h1>
        <p className="mb-4">
          At our automotive repair shop, we are committed to providing top-notch service to our customers. Our team of skilled technicians is dedicated to ensuring your vehicle is in the best possible condition. We offer a wide range of services, from routine maintenance to complex repairs. We use only the highest quality parts to ensure your vehicle is always in top condition.
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Schedule an Appointment
        </button>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <p>Contact Us:</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@automotiverepairshop.com</p>
        <p>Address: 123 Automotive St, City, State, Zip</p>
        <p>Follow us on social media:</p>
        <p>Facebook | Twitter | Instagram</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;