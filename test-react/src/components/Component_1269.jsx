import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/business/1600x900/70.webp')" }}>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Tech Company</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#products" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Products
            </a>
            <a href="#features" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Features
            </a>
            <a href="#testimonials" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Testimonials
            </a>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4">
            <h2 id="products" className="text-2xl font-bold mb-4">Products</h2>
            {/* Add your products here */}
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <h2 id="features" className="text-2xl font-bold mb-4">Features</h2>
            {/* Add your features here */}
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <h2 id="testimonials" className="text-2xl font-bold mb-4">Testimonials</h2>
            {/* Add your testimonials here */}
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
              {/* Add your social media icons here */}
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
              {/* Add your newsletter sign-up form here */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;