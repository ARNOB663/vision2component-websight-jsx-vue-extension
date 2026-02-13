import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-green-100">
      <header className="bg-green-600 text-white text-center py-12">
        <h1 className="text-4xl">Education Platform</h1>
        <img src="https://static.photos/education/300x300/197.webp" alt="School Logo" className="my-4" />
        <button className="bg-white text-green-600 px-4 py-2 rounded">Get Started</button>
      </header>
      <nav className="bg-green-800 text-white p-4">
        <ul className="flex justify-around">
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Testimonials</a></li>
        </ul>
      </nav>
      <main className="flex p-4">
        <section className="w-1/3 bg-green-200 p-4">
          <h2 className="text-2xl mb-4">Course Offerings</h2>
          {/* Course offerings go here */}
        </section>
        <section className="w-2/3 bg-green-300 p-4">
          <h2 className="text-2xl mb-4">Student Testimonials</h2>
          {/* Student testimonials go here */}
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;