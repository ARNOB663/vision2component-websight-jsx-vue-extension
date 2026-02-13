import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white text-center">
        <div className="text-gray-800 py-20 px-6">
          <h1 className="text-5xl font-bold mt-0 mb-6">Welcome to Our Health Care Provider</h1>
          <p className="text-2xl font-bold mb-8">We are committed to providing the best care for you.</p>
        </div>
      </header>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Our Health Care Provider</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Services
            </a>
            <a href="#appointments" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Appointments
            </a>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-12">
        <section id="services" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <p className="mb-4">We offer a wide range of services to meet your health needs. From primary care to specialty care, we have you covered.</p>
        </section>
        <section id="appointments" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Appointments</h2>
          <p className="mb-4">Schedule your appointments with us today.</p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;