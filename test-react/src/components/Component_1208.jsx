import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex items-center justify-between">
        <img src="https://static.photos/people/300x300/10.webp" alt="Logo" className="h-16" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Donations</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Volunteer Opportunities</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center h-screen relative">
        <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
          <source src="https://static.photos/people/900x600/10.webp" type="video/mp4" />
        </video>
        <div className="relative z-20 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to our Non-Profit Organization</h1>
          <p className="text-lg">We are a community of volunteers dedicated to making a difference in the world.</p>
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;