import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="flex items-center justify-between bg-white p-4">
        <img src="https://static.photos/business/300x300/84.webp" alt="Company Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-800 hover:text-yellow-500">Home</a></li>
            <li><a href="#" className="text-gray-800 hover:text-yellow-500">About</a></li>
            <li><a href="#" className="text-gray-800 hover:text-yellow-500">Services</a></li>
            <li><a href="#" className="text-gray-800 hover:text-yellow-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="relative">
          <img src="https://static.photos/business/900x600/85.webp" alt="Hero Image" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl text-white">Welcome to Our Tech Company</h1>
          </div>
        </section>

        <section className="py-12 px-4">
          <h2 className="text-3xl text-center">About Us</h2>
          <p className="text-lg text-center mt-4">
            At our tech company, we are dedicated to providing innovative and reliable technology solutions to our clients. Our team of experts is committed to delivering the best possible service, and we are always looking for new ways to improve our products and services. We believe in the power of technology to transform the world, and we are committed to being at the forefront of this revolution.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2022 Tech Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;