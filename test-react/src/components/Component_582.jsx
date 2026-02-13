import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-green-100">
      <nav className="bg-green-500 text-white p-4">
        <ul className="flex space-x-4">
          <li><a href="#services">Services</a></li>
          <li><a href="#departments">Departments</a></li>
        </ul>
      </nav>

      <main className="p-4">
        <h1 className="text-3xl text-center my-8">Welcome to Our Healthcare Provider</h1>
        <p className="text-lg text-center">
          At our healthcare provider, we are committed to providing the highest quality care to our patients. Our team of experienced doctors, nurses, and support staff are dedicated to ensuring that you receive the best possible care. We offer a wide range of services and departments, including but not limited to, emergency care, primary care, mental health, and more.
        </p>
        <div className="flex justify-center my-8">
          <a href="#schedule" className="bg-green-500 text-white px-4 py-2 rounded">Schedule Appointment</a>
        </div>
      </main>

      <footer className="bg-green-500 text-white p-4">
        <p className="text-center">
          Contact us: 123-456-7890 | Email: info@healthcareprovider.com
        </p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;