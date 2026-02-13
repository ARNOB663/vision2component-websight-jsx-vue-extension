import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-red-100">
      <header className="flex flex-col items-center justify-center h-screen text-white bg-gradient-to-r from-orange-500 to-red-500">
        <h1 className="text-4xl font-bold">E-Learning Platform</h1>
        <p className="mt-3 text-xl">
          Welcome to our e-learning platform, where you can learn from the best. Our courses are designed to help you reach your goals.
        </p>
        <button className="px-4 py-2 mt-5 font-bold text-white bg-red-500 rounded hover:bg-red-700">
          Start Learning Now
        </button>
      </header>

      <nav className="flex items-center justify-center p-6 space-x-4 bg-red-500">
        <a href="#" className="text-white hover:text-red-200">Home</a>
        <a href="#" className="text-white hover:text-red-200">Courses</a>
        <a href="#" className="text-white hover:text-red-200">About Us</a>
        <a href="#" className="text-white hover:text-red-200">Contact</a>
      </nav>

      <section className="p-6 text-center">
        <h2 className="text-2xl font-bold">Popular Courses</h2>
        {/* Add your course cards here */}
      </section>

      <footer className="p-6 text-center bg-red-500 text-white">
        <p>&copy; 2022 E-Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;