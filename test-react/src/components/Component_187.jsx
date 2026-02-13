import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Health and Wellness Company</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#mission" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Mission
            </a>
            <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Services
            </a>
            <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              About
            </a>
          </div>
        </div>
      </nav>

      <header className="bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: "url('https://picsum.photos/seed/187/1600/900')" }}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mt-0 mb-12 text-white">
            Welcome to Health and Wellness Company
          </h1>
        </div>
      </header>

      <section id="mission" className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
          <p className="text-lg leading-loose text-center text-gray-700">
            At Health and Wellness Company, our mission is to provide a safe and supportive environment for all our clients. We believe in the power of wellness and strive to create a community where everyone feels heard and valued.
          </p>
        </div>
      </section>

      <section id="services" className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
          <p className="text-lg leading-loose text-center text-gray-700">
            We offer a variety of services to help our clients reach their health and wellness goals. These include personalized workout plans, nutrition advice, and mental health support.
          </p>
        </div>
      </section>

      <section id="about" className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
          <p className="text-lg leading-loose text-center text-gray-700">
            Health and Wellness Company was founded in 2005 with the goal of creating a space where people can find the support they need to live their best lives.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GeneratedComponent;