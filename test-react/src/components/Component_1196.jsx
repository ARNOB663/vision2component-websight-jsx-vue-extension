import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <nav className="fixed w-full bg-white shadow-md">
        <div className="container mx-auto px-4 py-2">
          <h1 className="text-lg font-bold">E-learning Site for Professionals</h1>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to our e-learning site</h2>
        <p className="mb-4">
          At our e-learning site, we offer a wide range of courses designed to help professionals enhance their skills and knowledge. Whether you're looking to advance your career, learn a new skill, or simply expand your knowledge, we have a course for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://static.photos/business/900x600/198.webp" alt="Business Course" className="w-full"/>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Business Course</h3>
              <p className="text-gray-700">
                This course is designed to help professionals enhance their knowledge and skills in the field of business.
              </p>
            </div>
          </div>

          {/* Repeat the above div for each course */}
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;