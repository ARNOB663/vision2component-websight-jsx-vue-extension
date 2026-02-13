import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/people/1600x900/115.webp')" }}>
      </div>
      <div className="w-full md:w-1/2 bg-gray-200 p-10">
        <nav className="flex justify-end">
          <a href="#donate" className="px-4 py-2 text-gray-800 hover:text-gray-600">Donate</a>
          <a href="#volunteer" className="px-4 py-2 text-gray-800 hover:text-gray-600">Volunteer</a>
          <a href="#contact" className="px-4 py-2 text-gray-800 hover:text-gray-600">Contact</a>
        </nav>
        <main className="mt-10">
          <section id="about" className="mb-10">
            <h1 className="text-3xl mb-5">About Us</h1>
            <p className="mb-5">We are a non-profit organization dedicated to providing support and resources to those in need. Our mission is to make a difference in the world, one person at a time.</p>
            <a href="#donate" className="px-4 py-2 bg-indigo-500 text-white hover:bg-indigo-700">Donate Now</a>
          </section>
          <section id="donate" className="mb-10">
            <h1 className="text-3xl mb-5">Donate</h1>
            <p className="mb-5">Your donation will help us provide essential services to those in need.</p>
            <a href="#donate" className="px-4 py-2 bg-indigo-500 text-white hover:bg-indigo-700">Donate Now</a>
          </section>
          <section id="volunteer" className="mb-10">
            <h1 className="text-3xl mb-5">Volunteer</h1>
            <p className="mb-5">We are always looking for volunteers to help us in our mission.</p>
            <a href="#volunteer" className="px-4 py-2 bg-indigo-500 text-white hover:bg-indigo-700">Join Us</a>
          </section>
          <section id="contact" className="mb-10">
            <h1 className="text-3xl mb-5">Contact Us</h1>
            <p className="mb-5">For more information, please contact us.</p>
            <a href="#contact" className="px-4 py-2 bg-indigo-500 text-white hover:bg-indigo-700">Contact</a>
          </section>
        </main>
      </div>
    </div>
  );
};

export default GeneratedComponent;