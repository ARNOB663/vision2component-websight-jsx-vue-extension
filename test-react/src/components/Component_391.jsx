import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-indigo-500 text-white p-4">
        <h1 className="text-2xl font-bold">Education Site</h1>
      </header>

      <nav className="bg-indigo-300 p-4">
        <ul className="flex space-x-4">
          <li><a href="#about" className="text-white">About Us</a></li>
          <li><a href="#programs" className="text-white">Programs & Courses</a></li>
          <li><a href="#testimonials" className="text-white">Testimonials</a></li>
        </ul>
      </nav>

      <main className="p-4">
        <section id="about" className="mb-4">
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <p>We are a leading provider of education services. Our mission is to provide high-quality education to all, regardless of their background or circumstances. We believe in the power of education to change lives and the world.</p>
        </section>

        <section id="programs" className="mb-4">
          <h2 className="text-xl font-bold mb-2">Programs & Courses</h2>
          <p>We offer a wide range of programs and courses. Whether you're interested in computer science, English, or art, we have something for you. Our programs are designed to be flexible and accessible to all.</p>
        </section>

        <section id="testimonials">
          <h2 className="text-xl font-bold mb-2">Testimonials</h2>
          <p>Here are some testimonials from our satisfied customers.</p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;