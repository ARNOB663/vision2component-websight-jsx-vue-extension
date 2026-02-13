import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-200">
      <header className="bg-white p-4 flex justify-between items-center">
        <img src="https://static.photos/health/300x300/45.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="p-4">
        <section className="bg-white p-4 mb-4">
          <h1 className="text-2xl mb-2">Welcome to Our Health & Wellness Clinic</h1>
          <p className="text-gray-600">
            At our clinic, we are committed to providing you with a safe, supportive, and healing environment. Our experienced therapists and therapeutic modalities are designed to help you feel better and improve your overall health and well-being. We offer a wide range of services, including therapeutic massage, bodywork, and counseling.
          </p>
        </section>
        <section className="bg-white p-4">
          <h2 className="text-xl mb-2">Book an Appointment Today</h2>
          <p className="text-gray-600">
            Schedule your appointment today and experience the difference that our therapies can make. We look forward to welcoming you to our clinic.
          </p>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
            Book Now
          </button>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;