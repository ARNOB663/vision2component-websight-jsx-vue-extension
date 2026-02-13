import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/health/1600x900/134.webp')" }}>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Health & Wellness</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Services
            </a>
            <a href="#testimonials" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Testimonials
            </a>
            <a href="#blog" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Blog
            </a>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <p className="text-gray-600">We provide a wide range of health and wellness services including personal training, nutrition coaching, and mindfulness workshops.</p>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
            <p className="text-gray-600">See what our clients are saying about our services.</p>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <h2 className="text-2xl font-bold mb-4">Blog</h2>
            <p className="text-gray-600">Read our latest health and wellness articles.</p>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
          <form>
            <input type="email" placeholder="Enter your email" className="w-full p-2 mb-4" />
            <button type="submit" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
              Subscribe
            </button>
          </form>
          <a href="#terms" className="block mt-4 text-teal-200 hover:text-white">
            Terms and Conditions
          </a>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;