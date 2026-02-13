import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-indigo-900 text-white">
      <header className="flex items-center justify-between p-4 bg-indigo-800">
        <h1 className="text-2xl">Tech Company</h1>
        <button className="p-2 bg-indigo-600 text-white rounded">Menu</button>
      </header>

      <main className="flex flex-col items-center justify-center h-screen relative">
        <img src="https://static.photos/business/900x600/40.webp" alt="Circuit Board" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 p-4 bg-indigo-800 bg-opacity-75 rounded">
          <h2 className="text-3xl">Welcome to Tech Company</h2>
          <p className="text-lg">
            At Tech Company, we are committed to providing innovative and efficient solutions for your technology needs. Our team of experts is dedicated to delivering the best possible service, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </main>

      <footer className="p-4 bg-indigo-800">
        <p className="text-center">© 2022 Tech Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;