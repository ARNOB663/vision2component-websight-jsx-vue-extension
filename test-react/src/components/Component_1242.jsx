import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-6 flex justify-center">
        <img src="https://static.photos/nature/300x300/44.webp" alt="Logo" className="h-16" />
      </header>
      <nav className="bg-yellow-500 text-white p-4">
        <ul className="flex space-x-4 justify-center">
          <li><a href="#about" className="hover:underline">About Us</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#consultation" className="hover:underline">Book a Consultation</a></li>
        </ul>
      </nav>
      <main className="max-w-4xl mx-auto p-6">
        <section id="about" className="mb-6">
          <h2 className="text-2xl mb-2">About Us</h2>
          <p>We are a leading financial services provider, dedicated to providing comprehensive financial solutions to our clients. Our team of experienced professionals is committed to delivering personalized service and creating value for our clients.</p>
        </section>
        <section id="services" className="mb-6">
          <h2 className="text-2xl mb-2">Services</h2>
          <p>We offer a wide range of financial services, including investment advice, tax planning, and financial planning. We also provide assistance with insurance, retirement planning, and estate planning.</p>
        </section>
        <section id="consultation">
          <h2 className="text-2xl mb-2">Book a Consultation</h2>
          <p>Interested in learning more about our services? Schedule a consultation with one of our experts today.</p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;