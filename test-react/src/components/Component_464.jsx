import React from 'react';

const GeneratedComponent = () => {
  return (
    <div>
      <header className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white" style={{ backgroundImage: "url('https://static.photos/art/1600x900/65.webp')" }}>
        <h1 className="text-4xl mb-4">Welcome to Our Interior Design Company</h1>
        <p className="text-xl mb-8">We are a leading interior design company, specializing in creating unique and stylish spaces that reflect your individual style and personality.</p>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Book a Consultation
        </button>
      </header>

      <section className="py-12">
        <h2 className="text-3xl text-center mb-8">About Us</h2>
        <p className="text-lg text-center mx-auto max-w-2xl">We are a team of experienced interior designers who are passionate about creating spaces that are not just beautiful, but also functional and comfortable. Our goal is to help you create a space that is perfect for you and your family.</p>
      </section>

      <section className="py-12 bg-gray-200">
        <h2 className="text-3xl text-center mb-8">Portfolio</h2>
        {/* Add your portfolio items here */}
      </section>

      <section className="py-12">
        <h2 className="text-3xl text-center mb-8">Testimonials</h2>
        {/* Add your testimonials here */}
      </section>

      <section className="py-12 bg-gray-200">
        <h2 className="text-3xl text-center mb-8">Services</h2>
        {/* Add your services here */}
      </section>

      <footer className="py-8 bg-gray-800 text-white text-center">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4">
          Contact Us
        </button>
        <p>© 2022 Interior Design Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;