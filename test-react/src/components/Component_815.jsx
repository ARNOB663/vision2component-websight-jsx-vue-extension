import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <nav className="bg-gray-500 text-white p-4">
        <ul className="flex space-x-4">
          <li><a href="#services">Services</a></li>
          <li><a href="#appointments">Appointments</a></li>
          <li><a href="#insurance">Insurance and Fees</a></li>
        </ul>
      </nav>

      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/nature/1600x900/16.webp')" }}>
        <div className="text-center pt-40 text-white text-4xl">
          <h1 className="font-bold">Healthcare Provider</h1>
          <p className="font-light">A soothing and calming design with a left-aligned menu and a full-width background image of nature.</p>
        </div>
      </div>

      <div id="services" className="p-4">
        <h2 className="text-2xl font-bold">Services</h2>
        <p>Your services go here.</p>
      </div>

      <div id="appointments" className="p-4">
        <h2 className="text-2xl font-bold">Appointments</h2>
        <p>Your appointments go here.</p>
      </div>

      <div id="insurance" className="p-4">
        <h2 className="text-2xl font-bold">Insurance and Fees</h2>
        <p>Your insurance and fees go here.</p>
      </div>
    </>
  );
};

export default GeneratedComponent;