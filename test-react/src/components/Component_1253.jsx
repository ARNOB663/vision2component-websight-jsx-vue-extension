import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-6 flex items-center justify-center">
        <img src="https://static.photos/education/300x300/55.webp" alt="Educational Institution Logo" className="h-16" />
      </header>
      <nav className="bg-purple-500 text-white p-4">
        <ul className="flex space-x-4 justify-center">
          <li><a href="#programs" className="hover:underline">Programs</a></li>
          <li><a href="#faculty" className="hover:underline">Faculty</a></li>
          <li><a href="#students" className="hover:underline">Students</a></li>
          <li><a href="#contact" className="hover:underline">Contact Us</a></li>
        </ul>
      </nav>
      <main className="max-w-4xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
        <section id="programs" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Programs</h2>
          <p className="mb-4">At our educational institution, we offer a wide range of programs designed to meet the needs of our students. Whether you're interested in a bachelor's degree, a master's degree, or a certificate program, we have something for you.</p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
        </section>
        <section id="faculty" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Faculty</h2>
          <p className="mb-4">Our faculty is composed of highly qualified and experienced professionals who are committed to providing the best education possible. They are dedicated to their students and are always willing to help them reach their full potential.</p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Meet Our Faculty</button>
        </section>
        <section id="students" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Students</h2>
          <p className="mb-4">We believe that every student has something unique to offer. Our students come from all walks of life and bring a wealth of experiences and perspectives to our classroom.</p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Meet Our Students</button>
        </section>
        <section id="contact" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">We'd love to hear from you. Whether you have questions about our programs, want to learn more about our faculty, or just want to say hello, we're here to help.</p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Contact Us</button>
        </section>
      </main>
      <footer className="bg-purple-500 text-white text-center p-4">
        <p>© 2022 Educational Institution. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;