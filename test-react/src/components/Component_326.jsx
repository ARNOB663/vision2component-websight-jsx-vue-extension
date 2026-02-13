import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans">
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-center">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex justify-center p-4">
        <img src="https://picsum.photos/seed/326/900/600" alt="Hero Image" className="w-full h-auto"/>
      </main>

      <section className="flex justify-center p-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="bg-gray-200 p-4 w-full md:w-1/3">
            <h2 className="text-xl mb-2">Our Mission</h2>
            <p>At our tech company, we are committed to providing innovative and efficient solutions to our clients. We believe in the power of technology to transform businesses and improve lives.</p>
          </div>
          <div className="bg-gray-300 p-4 w-full md:w-1/3">
            <h2 className="text-xl mb-2">Our Vision</h2>
            <p>Our vision is to be the leading provider of technology solutions in the industry, recognized for our quality, innovation, and customer satisfaction.</p>
          </div>
          <div className="bg-gray-200 p-4 w-full md:w-1/3">
            <h2 className="text-xl mb-2">Our Values</h2>
            <p>We value integrity, collaboration, and continuous learning. We strive to create a culture of excellence and innovation, where our employees can thrive and our clients can benefit from our services.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneratedComponent;