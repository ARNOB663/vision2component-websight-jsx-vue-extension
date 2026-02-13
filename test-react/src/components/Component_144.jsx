import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://picsum.photos/seed/144/1600/900')" }}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl text-white font-bold mb-4">Welcome to Our Education Platform</h1>
            <p className="text-xl text-white mb-6">We offer a wide range of courses to help you reach your educational goals.</p>
            <a href="#" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Enroll Now</a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-3/4 pr-0 lg:pr-4">
            <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
            {/* Featured courses go here */}
          </div>

          <div className="w-full lg:w-1/4 pl-0 lg:pl-4">
            <h2 className="text-3xl font-bold mb-4">Course Categories</h2>
            {/* Course categories go here */}

            <h2 className="text-3xl font-bold mb-4 mt-8">Pricing Information</h2>
            {/* Pricing information goes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;