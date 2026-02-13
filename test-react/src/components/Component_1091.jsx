import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-6 flex items-center justify-center">
        <img src="https://static.photos/health/900x600/93.webp" alt="Healthy lifestyle" className="h-16" />
        <h1 className="text-3xl font-bold mx-4">Health and Wellness</h1>
        <img src="https://static.photos/health/900x600/94.webp" alt="Healthy lifestyle" className="h-16" />
      </header>
      <nav className="bg-white p-4">
        <ul className="flex justify-center space-x-8">
          <li><a href="#health-tips" className="text-green-500 hover:text-green-700">Health Tips</a></li>
          <li><a href="#products" className="text-green-500 hover:text-green-700">Products</a></li>
          <li><a href="#services" className="text-green-500 hover:text-green-700">Services</a></li>
          <li><a href="#testimonials" className="text-green-500 hover:text-green-700">Testimonials</a></li>
        </ul>
      </nav>
      <main className="p-6">
        <section id="health-tips" className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Health Tips</h2>
          <p className="text-lg">Eating a balanced diet, exercising regularly, getting enough sleep, managing stress, and avoiding harmful substances are all important aspects of maintaining good health.</p>
        </section>
        <section id="products" className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <p className="text-lg">We offer a variety of health and wellness products designed to help you maintain your health and wellbeing.</p>
        </section>
        <section id="services" className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <p className="text-lg">We provide a range of health and wellness services to help you achieve your health and wellness goals.</p>
        </section>
        <section id="testimonials" className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          <p className="text-lg">Here are some testimonials from our satisfied customers.</p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;