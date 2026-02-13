import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://picsum.photos/seed/72/300/300" alt="Logo" className="h-10" />
          <nav className="ml-10">
            <a href="#" className="text-gray-600 mr-5">Home</a>
            <a href="#" className="text-gray-600 mr-5">Courses</a>
            <a href="#" className="text-gray-600">About</a>
          </nav>
        </div>
        <div>
          <a href="#" className="text-gray-600 mr-5">Login</a>
          <a href="#" className="text-gray-600">Sign Up</a>
        </div>
      </header>
      <main className="p-4">
        <h1 className="text-3xl mb-4">Welcome to our Online Educational Platform</h1>
        <p className="mb-4">Our platform is designed to provide high-quality education to individuals around the world. We offer a wide range of courses in various fields, from technology to business and beyond. Our courses are designed to be interactive and engaging, allowing you to learn at your own pace.</p>
        {/* Add your course tiles here */}
      </main>
      <footer className="bg-white p-4 text-center text-gray-600">
        <p>© 2022 Online Educational Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;