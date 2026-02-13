import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <img src="https://static.photos/education/300x300/80.webp" alt="Educational Logo" className="w-32 h-32 mb-4" />
          <nav className="flex justify-center space-x-4">
            <a href="#programs" className="text-green-500 hover:text-green-700">Programs</a>
            <a href="#courses" className="text-green-500 hover:text-green-700">Courses</a>
            <a href="#faculty" className="text-green-500 hover:text-green-700">Faculty</a>
            <a href="#achievements" className="text-green-500 hover:text-green-700">Achievements</a>
          </nav>
        </div>
        <div id="programs" className="mt-8 p-4 bg-white rounded shadow">
          <h2 className="text-2xl mb-4">Programs</h2>
          <p>Our programs are designed to provide students with a comprehensive education in a variety of subjects.</p>
        </div>
        <div id="courses" className="mt-8 p-4 bg-white rounded shadow">
          <h2 className="text-2xl mb-4">Courses</h2>
          <p>We offer a wide range of courses in various fields.</p>
        </div>
        <div id="faculty" className="mt-8 p-4 bg-white rounded shadow">
          <h2 className="text-2xl mb-4">Faculty</h2>
          <p>Our faculty are experts in their respective fields.</p>
        </div>
        <div id="achievements" className="mt-8 p-4 bg-white rounded shadow">
          <h2 className="text-2xl mb-4">Achievements</h2>
          <p>Our students have achieved great things.</p>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;