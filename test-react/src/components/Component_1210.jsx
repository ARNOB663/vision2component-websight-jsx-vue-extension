import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-gray-500 text-white p-4">
        <img src="https://static.photos/education/300x300/12.webp" alt="Education Provider Logo" className="h-16" />
      </header>
      <nav className="bg-gray-600 text-white p-4">
        <ul className="flex space-x-4">
          <li><a href="#campus" className="text-white hover:text-gray-200">Campus Information</a></li>
          <li><a href="#faculty" className="text-white hover:text-gray-200">Faculty Profiles</a></li>
          <li><a href="#testimonials" className="text-white hover:text-gray-200">Student Testimonials</a></li>
        </ul>
      </nav>
      <main className="p-4">
        <section id="campus" className="my-4">
          <h2 className="text-2xl">Campus Information</h2>
          <p>At our education provider, we believe in the power of education to transform lives. Our campus is designed to provide a supportive and engaging learning environment, where students can thrive and reach their full potential.</p>
        </section>
        <section id="faculty" className="my-4">
          <h2 className="text-2xl">Faculty Profiles</h2>
          <p>Our faculty is a diverse group of dedicated professionals who are passionate about teaching and learning. Each member of our faculty brings a unique perspective and a wealth of knowledge to the classroom.</p>
        </section>
        <section id="testimonials" className="my-4">
          <h2 className="text-2xl">Student Testimonials</h2>
          <p>Hear what our students have to say about their experience at our education provider.</p>
        </section>
      </main>
      <footer className="bg-gray-500 text-white p-4">
        <p>© 2022 Education Provider. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;