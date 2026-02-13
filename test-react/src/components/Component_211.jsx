import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-indigo-100">
      <header className="relative">
        <img src="https://picsum.photos/seed/211/900/600" alt="Nonprofit Organization" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Donate Now
          </button>
        </div>
      </header>

      <nav className="bg-green-500 text-white p-4">
        <ul className="flex space-x-4 justify-center">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <main className="container mx-auto p-4">
        {/* Your content here */}
      </main>

      <footer className="bg-green-500 text-white p-4">
        <div className="container mx-auto">
          <p>Contact Information:</p>
          <p>Email: info@nonprofit.org</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;