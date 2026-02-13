import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-cover bg-center h-64" style={{ backgroundImage: "url('https://static.photos/art/1600x900/113.webp')" }}>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Food Delivery Service</span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a href="#menu" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Menu
              </a>
              <a href="#order" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Order
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section id="menu" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Our Menu</h2>
          {/* Menu items go here */}
        </section>
        <section id="order" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Order Now</h2>
          {/* Order form goes here */}
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto">
          <a href="#faq" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            FAQs
          </a>
          <a href="#testimonials" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Testimonials
          </a>
          <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;