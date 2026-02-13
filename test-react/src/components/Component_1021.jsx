import React from 'react';

const GeneratedComponent = () => {
  return (
    <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/travel/1600x900/22.webp')" }}>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center h-full">
        <div className="w-full">
          <img src="https://static.photos/travel/300x300/23.webp" alt="Logo" className="mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6 text-center text-white">Welcome to our travel agency</h1>
          <p className="text-2xl text-center text-white mb-6">We are a dynamic and visually appealing travel agency, offering a wide range of exotic locations for your next adventure.</p>
          <div className="flex items-center justify-center">
            <div className="relative w-3/4 lg:w-1/3">
              <input type="text" placeholder="Search for a destination" className="w-full px-4 py-3 rounded-lg focus:outline-none" />
              <button className="absolute right-0 top-0 mt-3 mr-4">
                <svg className="h-4 w-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GeneratedComponent;