import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <nav className="w-full bg-white shadow-md">
        <div className="container mx-auto px-4 py-2">
          <h1 className="text-lg font-bold">Tech Company</h1>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 flex flex-wrap">
        <div className="w-full md:w-2/3 p-4">
          <img src="https://picsum.photos/seed/131/900/600" alt="Technology" className="w-full" />
          <h2 className="text-2xl font-bold my-4">About Us</h2>
          <p className="text-gray-700">
            At Tech Company, we are dedicated to providing innovative and reliable technology solutions to our clients. Our team of experts is committed to delivering the best possible service, ensuring that our clients are always satisfied with our work. We believe in the power of technology to transform businesses and improve lives.
          </p>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-2xl font-bold my-4">Our Services</h2>
          <ul className="list-disc pl-4">
            <li>Software Development</li>
            <li>Web Design</li>
            <li>Cybersecurity</li>
            <li>Data Analysis</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;