import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style={{ backgroundImage: "url('https://static.photos/art/1600x900/18.webp')" }}>
      <div className="container w-full md:w-8/12 mx-auto px-6">
        <div className="flex flex-col md:flex-row py-6 md:py-10">
          <div className="md:w-1/2">
            <img className="h-16" src="https://static.photos/art/300x300/19.webp" alt="Logo" />
          </div>
          <nav className="md:w-1/2 flex items-start md:justify-end flex-col md:flex-row">
            <a className="px-4 py-2 rounded hover:bg-pink-200" href="#">Home</a>
            <a className="px-4 py-2 rounded hover:bg-pink-200" href="#">About</a>
            <a className="px-4 py-2 rounded hover:bg-pink-200" href="#">Services</a>
            <a className="px-4 py-2 rounded hover:bg-pink-200" href="#">Contact</a>
          </nav>
        </div>
        <section className="py-10">
          <h1 className="text-4xl">Welcome to Our Law Firm</h1>
          <p className="py-6">
            At our law firm, we are committed to providing our clients with the highest level of service and expertise. Our team of experienced attorneys is dedicated to providing comprehensive legal services to help our clients navigate the complexities of the legal system. We understand that every case is unique, and we strive to provide personalized attention to each client.
          </p>
        </section>
        <section className="py-10">
          <h2 className="text-3xl">Our Services</h2>
          {/* Add your services here */}
        </section>
        <section className="py-10">
          <h2 className="text-3xl">Contact Us</h2>
          {/* Add your contact form here */}
        </section>
      </div>
    </div>
  );
};

export default GeneratedComponent;