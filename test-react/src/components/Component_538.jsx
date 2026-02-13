import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-green-500 text-white">
      <nav className="flex justify-center p-4 bg-green-800">
        <a href="#about" className="px-4">About Us</a>
        <a href="#services" className="px-4">Services</a>
        <a href="#contact" className="px-4">Contact</a>
      </nav>

      <div className="flex justify-center p-10">
        <img src="https://static.photos/health/900x600/140.webp" alt="Healthy lifestyle" />
      </div>

      <div id="about" className="p-10 text-center">
        <h1 className="text-3xl mb-4">About Us</h1>
        <p className="text-lg">We are a team of health and wellness experts dedicated to promoting a healthy lifestyle. Our mission is to help people lead healthier lives by providing the best health and wellness advice and services.</p>
      </div>

      <div id="services" className="p-10 text-center bg-green-700">
        <h1 className="text-3xl mb-4">Our Services</h1>
        <p className="text-lg">We offer a wide range of health and wellness services including but not limited to personal training, nutrition coaching, and mental health support.</p>
      </div>

      <div id="contact" className="p-10 text-center">
        <h1 className="text-3xl mb-4">Contact Us</h1>
        <p className="text-lg">If you have any questions or need further information about our services, please don't hesitate to contact us.</p>
        <button className="bg-white text-green-800 px-4 py-2 mt-4">Contact Us</button>
      </div>
    </div>
  );
};

export default GeneratedComponent;