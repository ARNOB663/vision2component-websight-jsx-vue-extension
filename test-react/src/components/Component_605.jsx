import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-pink-100">
      <header className="bg-green-600 text-white p-4">
        <img src="https://static.photos/health/300x300/7.webp" alt="Healthcare Clinic Logo" className="h-16" />
        <nav className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </nav>
      </header>

      <main className="p-4">
        <section className="mt-8">
          <h2 className="text-2xl text-green-600 mb-4">Meet Our Doctors</h2>
          {/* Doctor bios go here */}
        </section>

        <section className="mt-8">
          <h2 className="text-2xl text-green-600 mb-4">Patient Testimonials</h2>
          {/* Patient testimonials go here */}
        </section>
      </main>

      <footer className="bg-green-600 text-white p-4 text-center">
        <p>© 2022 Healthcare Clinic. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;