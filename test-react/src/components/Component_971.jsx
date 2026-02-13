import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-200">
      <header className="bg-white p-4 flex items-center justify-between">
        <img src="https://static.photos/business/300x300/173.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-gray-900">About Us</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-gray-900">Services</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="py-16 bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/business/1600x900/172.webp')" }}>
          {/* Large image banner */}
        </section>

        <section id="about" className="py-16 text-center">
          <h2 className="text-3xl mb-4">About Us</h2>
          <p className="text-lg">
            At our financial services, we are committed to providing our clients with the highest level of service and expertise. Our team of experienced professionals is dedicated to helping you achieve your financial goals. We offer a wide range of services including investment advice, tax planning, and financial planning.
          </p>
        </section>

        <section id="services" className="py-16 text-center">
          <h2 className="text-3xl mb-4">Our Services</h2>
          <p className="text-lg">
            We offer a comprehensive range of financial services to meet your needs. Our services include investment advice, tax planning, financial planning, and more. We are dedicated to providing you with the information and tools you need to make informed decisions about your finances.
          </p>
        </section>

        <section id="contact" className="py-16 text-center">
          <h2 className="text-3xl mb-4">Contact Us</h2>
          <p className="text-lg">
            We would love to hear from you. Please contact us using the information below.
          </p>
          {/* Contact information */}
        </section>
      </main>

      <footer className="bg-white p-4 text-center">
        <p className="text-gray-600">© 2022 Financial Services. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;