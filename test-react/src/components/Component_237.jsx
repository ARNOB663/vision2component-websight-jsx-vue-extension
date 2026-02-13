import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-gray-500 text-white text-center py-16">
        <h1 className="text-4xl">Welcome to Our Educational Institution</h1>
        <p className="mt-4 text-xl">"Education is the passport to the future, for tomorrow belongs to those who prepare for it today." - Malcolm X</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl mb-4">About Us</h2>
          <p className="text-lg">Our educational institution is dedicated to providing a high-quality education to all students. We believe in the power of education to change lives and the future.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl mb-4">Our Programs</h2>
          <p className="text-lg">We offer a variety of programs to meet the needs of all students. These include:</p>
          <ul className="list-disc pl-6">
            <li>Elementary Education</li>
            <li>Middle School</li>
            <li>High School</li>
            <li>College</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl mb-4">Our Faculty</h2>
          <p className="text-lg">Our faculty is composed of highly qualified and experienced professionals who are committed to providing the best possible education.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl mb-4">Student Testimonials</h2>
          <p className="text-lg">Here are some testimonials from our students:</p>
          {/* Add testimonials here */}
        </section>
      </main>

      <footer className="bg-gray-500 text-white text-center py-4">
        <p>© 2022 Educational Institution. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;