import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <nav className="bg-red-800 text-white p-4">
        <ul className="flex space-x-4 justify-center">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      <section id="about" className="p-8 text-center">
        <h1 className="text-4xl mb-4">Welcome to Our Hospital</h1>
        <p className="text-lg">We are a leading provider of quality healthcare services. Our experienced staff and state-of-the-art facilities ensure that you receive the best care possible.</p>
      </section>

      <section id="services" className="p-8 text-center">
        <h2 className="text-3xl mb-4">Our Services</h2>
        <p className="text-lg">We offer a wide range of services including emergency care, primary care, specialty care, and more.</p>
      </section>

      <section id="contact" className="p-8 text-center">
        <h2 className="text-3xl mb-4">Contact Us</h2>
        <p className="text-lg">We would love to hear from you. Please call us at 123-456-7890 or email us at info@ourhospital.com.</p>
      </section>
    </>
  );
};

export default GeneratedComponent;