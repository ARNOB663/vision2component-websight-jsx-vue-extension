import React from 'react';

const GeneratedComponent = () => (
  <div>
    <header className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('https://picsum.photos/seed/157/1600/900')" }}>
      <div className="text-center">
        <img className="inline-block h-16 w-16 rounded-full mb-4" src="https://picsum.photos/seed/157/300/300" alt="Logo" />
        <h1 className="text-5xl font-bold text-white">Food Delivery Service</h1>
      </div>
    </header>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Food Delivery Service</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#menu" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Menu
          </a>
          <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About
          </a>
          <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
    <main className="container mx-auto px-4 py-8">
      <p className="text-lg leading-relaxed mb-4">
        Welcome to our food delivery service, where we strive to provide the best meals to our customers. We use only the freshest ingredients and the best chefs to prepare them. Our meals are not only delicious, but also healthy and nutritious. We are committed to providing a safe and enjoyable experience for our customers.
      </p>
    </main>
    <footer className="bg-gray-800 text-white p-6">
      <div className="flex items-center justify-between flex-wrap">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#facebook" className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
              Facebook
            </a>
            <a href="#twitter" className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
              Twitter
            </a>
            <a href="#instagram" className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white">
              Instagram
            </a>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm">
            Sign up for our newsletter:
          </p>
          <input className="bg-gray-900 text-white p-2 mt-2" type="email" placeholder="Your email" />
          <button className="bg-white text-gray-900 p-2 mt-2">Subscribe</button>
        </div>
      </div>
    </footer>
  </div>
);

export default GeneratedComponent;