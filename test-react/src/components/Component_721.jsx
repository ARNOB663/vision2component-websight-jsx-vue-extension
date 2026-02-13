import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <img src="https://static.photos/people/300x300/123.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="flex p-4">
        <div className="w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4">Welcome to our Non-Profit Organization</h1>
          <p className="text-gray-600 mb-4">
            We are a non-profit organization dedicated to making a difference in the world. We believe in the power of community and strive to create a world where everyone has the opportunity to thrive.
          </p>
          <img src="https://static.photos/people/900x600/124.webp" alt="People" className="mb-4" />
        </div>

        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Donate Now</h2>
          <form>
            {/* Add your donation form fields here */}
          </form>
        </div>
      </section>

      <footer className="bg-white p-4 text-center">
        <p className="text-gray-600">
          © 2022 Non-Profit Organization. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;