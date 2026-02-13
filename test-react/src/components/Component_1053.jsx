import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-6">
        <h1 className="text-3xl font-bold mb-2">E-Learning Platform</h1>
        <p className="text-gray-600">
          Welcome to our E-Learning Platform, your one-stop destination for all your learning needs. We offer a wide range of courses in various fields, from technology to business, arts, and much more. Our platform is designed to make learning engaging and interactive, with personalized learning paths and expert-led courses. Whether you're a beginner or an expert, we've got something for everyone.
        </p>
      </header>

      <nav className="bg-indigo-500 text-white p-4">
        <ul className="flex space-x-4">
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>

      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Our Courses</h2>
        {/* Here you can add your courses in a grid format */}
      </main>

      <footer className="bg-white p-6 text-center">
        <p className="text-gray-600">
          © 2022 E-Learning Platform. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;