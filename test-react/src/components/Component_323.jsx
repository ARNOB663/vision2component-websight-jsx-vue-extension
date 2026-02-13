import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-purple-100">
      <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Healthcare Provider</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Services
            </a>
            <a href="#amenities" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Amenities
            </a>
            <a href="#appointment" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Appointment
            </a>
          </div>
        </div>
      </nav>

      <section id="services" className="text-center p-10">
        <h1 className="text-3xl mb-4">Our Services</h1>
        <p className="text-lg">We provide a wide range of services to ensure you receive the best care possible. Our team of experienced healthcare providers are dedicated to providing you with the highest quality of care.</p>
      </section>

      <section id="amenities" className="text-center p-10">
        <h1 className="text-3xl mb-4">Our Amenities</h1>
        <p className="text-lg">We understand the importance of comfort and relaxation. That's why we provide a variety of amenities to ensure you have a comfortable and relaxing experience.</p>
      </section>

      <section id="appointment" className="text-center p-10">
        <h1 className="text-3xl mb-4">Appointment</h1>
        <p className="text-lg">Schedule your appointment today and experience the best healthcare provider has to offer.</p>
      </section>
    </div>
  );
};

export default GeneratedComponent;