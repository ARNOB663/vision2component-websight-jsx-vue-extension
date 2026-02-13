import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-red-500 text-white p-4">
        <img src="https://static.photos/health/300x300/31.webp" alt="Company Logo" className="h-10" />
        <button className="bg-white text-red-500 px-4 py-2 ml-4 rounded">Schedule an Appointment</button>
      </header>

      <div className="relative">
        <img src="https://static.photos/health/900x600/32.webp" alt="Background Image" className="w-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl">
          "Fitness is not about being better than someone else. It's about being better than you used to be." - Quincy Adams
        </div>
      </div>

      <nav className="bg-red-500 text-white p-4">
        <ul className="flex justify-center">
          <li className="px-4"><a href="#about" className="text-white">About</a></li>
          <li className="px-4"><a href="#services" className="text-white">Services</a></li>
          <li className="px-4"><a href="#contact" className="text-white">Contact</a></li>
        </ul>
      </nav>

      <section id="about" className="p-4">
        <h2 className="text-2xl mb-4">About Us</h2>
        <p className="mb-4">We are a team of certified fitness professionals dedicated to helping you achieve your health and fitness goals. Our state-of-the-art facilities and experienced trainers ensure that you receive the best possible care.</p>
      </section>

      <section id="services" className="p-4">
        <h2 className="text-2xl mb-4">Our Services</h2>
        <p className="mb-4">We offer a wide range of services including personal training, group classes, nutrition coaching, and more. Our trainers are experienced in a variety of fitness disciplines.</p>
      </section>

      <section id="contact" className="p-4">
        <h2 className="text-2xl mb-4">Contact Us</h2>
        <p className="mb-4">Phone: 123-456-7890</p>
        <p className="mb-4">Email: info@fitnessclinic.com</p>
      </section>
    </div>
  );
};

export default GeneratedComponent;