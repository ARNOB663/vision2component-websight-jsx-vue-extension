import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white">
        <div className="container mx-auto flex justify-between items-center py-4">
          <img src="https://picsum.photos/seed/189/300/300" alt="Logo" className="h-10" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-800 hover:text-indigo-500">Home</a></li>
              <li><a href="#" className="text-gray-800 hover:text-indigo-500">About</a></li>
              <li><a href="#" className="text-gray-800 hover:text-indigo-500">Services</a></li>
              <li><a href="#" className="text-gray-800 hover:text-indigo-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/189/1600/900')" }}></div>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Creative Agency</h1>
          <p className="text-lg mb-8">
            At our creative agency, we believe in the power of design to transform businesses and create meaningful connections. We are a full-service creative agency, offering a wide range of services including branding, web design, graphic design, and more. Our team of experienced professionals is dedicated to helping our clients achieve their goals and create a lasting impact.
          </p>
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2022 Creative Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export { GeneratedComponent };