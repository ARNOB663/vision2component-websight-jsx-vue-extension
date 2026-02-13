import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-red-500 text-white">
      <header className="p-4 text-center">
        <h1 className="text-4xl">Welcome to Our Automotive Workshop</h1>
        <p className="text-xl mt-4">We provide top-notch services for all your car needs. From routine maintenance to major repairs, we're here to help.</p>
        <button className="mt-4 bg-white text-red-500 px-4 py-2 rounded">Request Service</button>
      </header>

      <section className="p-4">
        <h2 className="text-2xl text-center">Our Services</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="p-4 bg-white text-red-500">
            <h3 className="text-xl">Oil Changes</h3>
            <p>We offer professional oil changes to keep your car running smoothly.</p>
          </div>
          <div className="p-4 bg-white text-red-500">
            <h3 className="text-xl">Tire Rotations</h3>
            <p>We perform tire rotations to ensure your tires are properly aligned and balanced.</p>
          </div>
          <div className="p-4 bg-white text-red-500">
            <h3 className="text-xl">Brake Pads</h3>
            <p>We replace brake pads to ensure your car's brakes are working properly.</p>
          </div>
        </div>
      </section>

      <footer className="p-4 text-center">
        <h2 className="text-2xl">Testimonials</h2>
        <p className="mt-4">"I was very impressed with the service I received at your workshop. They were professional, efficient, and did a great job on my car." - John Doe</p>
        <p className="mt-4">"I highly recommend this workshop. They're knowledgeable and trustworthy." - Jane Doe</p>
        <h2 className="text-2xl mt-4">Contact Us</h2>
        <p className="mt-4">Phone: 123-456-7890</p>
        <p className="mt-4">Email: info@automotiveworkshop.com</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;