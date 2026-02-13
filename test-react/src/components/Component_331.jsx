import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <nav className="bg-gray-500 text-white p-4">
        <ul className="flex space-x-4">
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="about" className="p-4 bg-white">
        <h1 className="text-2xl mb-4">About Us</h1>
        <p className="mb-4">We are a leading healthcare provider dedicated to providing high-quality, personalized care to our patients. Our team of experienced doctors, nurses, and support staff are committed to ensuring that every patient receives the best possible care.</p>
        <button className="bg-gray-500 text-white px-4 py-2">Book an Appointment</button>
      </section>

      <section id="services" className="p-4 bg-gray-200">
        <h1 className="text-2xl mb-4">Our Services</h1>
        <p className="mb-4">We offer a wide range of services to meet the needs of our patients. These include primary care, specialty care, and more. Our team of experts is here to help you every step of the way.</p>
        <button className="bg-gray-500 text-white px-4 py-2">Learn More</button>
      </section>

      <section id="contact" className="p-4 bg-white">
        <h1 className="text-2xl mb-4">Contact Us</h1>
        <p className="mb-4">We're here to help. If you have any questions or need further information, please don't hesitate to contact us. Our friendly and knowledgeable staff are here to assist you.</p>
        <button className="bg-gray-500 text-white px-4 py-2">Contact Us</button>
      </section>
    </div>
  );
};

export { GeneratedComponent };