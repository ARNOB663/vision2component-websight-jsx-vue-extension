import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="flex items-center justify-center h-24 bg-white">
        <img src="https://static.photos/business/300x300/118.webp" alt="Logo" className="h-16" />
      </header>

      <nav className="flex justify-center items-center h-16 bg-gray-800 text-white">
        <ul className="flex space-x-6">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <main className="container mx-auto p-4">
        <h1 className="text-4xl text-center my-8">Welcome to Our Tech Company</h1>

        <p className="text-lg text-justify">
          At our tech company, we are dedicated to providing the best solutions for your technological needs. We are a team of experienced professionals who are passionate about what we do. We specialize in a wide range of services, including software development, IT consulting, and cybersecurity. Our goal is to help our clients achieve their business goals by leveraging the latest technologies.
        </p>

        {/* Add more sections as needed */}
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2022 Tech Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;