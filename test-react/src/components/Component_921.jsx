import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-yellow-500 text-white text-center py-20">
        <h1 className="text-4xl">School Name</h1>
        <p className="text-xl">Tagline</p>
      </header>

      <nav className="bg-white p-4">
        <ul className="flex justify-center space-x-8">
          <li><a href="#" className="text-yellow-500 hover:text-yellow-800">Academic Programs</a></li>
          <li><a href="#" className="text-yellow-500 hover:text-yellow-800">Admissions</a></li>
          <li><a href="#" className="text-yellow-500 hover:text-yellow-800">Student Life</a></li>
          <li><a href="#" className="text-yellow-500 hover:text-yellow-800">Faculty</a></li>
          <li><a href="#" className="text-yellow-500 hover:text-yellow-800">News</a></li>
        </ul>
      </nav>

      <main className="grid grid-cols-2 gap-4 p-4">
        {/* Add your image-text tiles here */}
      </main>

      <footer className="bg-yellow-500 text-white text-center py-8">
        <p>Contact Information</p>
        <p>Social Media Links</p>
        {/* Add your search bar here */}
      </footer>
    </div>
  );
};

export default GeneratedComponent;