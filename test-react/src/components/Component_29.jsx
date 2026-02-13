import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/29/1600/900')" }}>
      <header className="bg-gray-900 text-white p-4">
        <h1 className="text-4xl">Healthcare Provider</h1>
      </header>
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#insurance">Insurance Providers</a></li>
        </ul>
      </nav>
      <main className="max-w-4xl mx-auto p-4">
        <section id="services" className="my-8">
          <h2 className="text-2xl">Our Services</h2>
          <p>We provide a wide range of healthcare services to meet your needs. From primary care to specialty care, we have you covered.</p>
        </section>
        <section id="testimonials" className="my-8">
          <h2 className="text-2xl">Patient Testimonials</h2>
          <p>Hear what our patients have to say about our services.</p>
        </section>
        <section id="insurance" className="my-8">
          <h2 className="text-2xl">Insurance Providers</h2>
          <p>We are partnered with many insurance providers to ensure you get the care you need.</p>
        </section>
      </main>
      <footer className="bg-gray-900 text-white p-4">
        <p>Phone: 123-456-7890</p>
        <ul className="flex space-x-4">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default GeneratedComponent;