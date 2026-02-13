import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Non-profit Organization</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#cause" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Cause
            </a>
            <a href="#getting-involved" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Getting Involved
            </a>
            <a href="#donations" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Donations
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl text-center">Welcome to our Non-profit Organization</h1>
        <p className="text-lg text-center mt-4">
          We are a compassionate and inclusive organization dedicated to helping people in need. Our mission is to provide a safe and supportive environment where everyone can find the help they need.
        </p>

        <h2 id="cause" className="text-2xl text-center mt-8">Our Cause</h2>
        <p className="text-lg text-center mt-4">
          We believe in the power of compassion and kindness. We strive to create a world where everyone has the opportunity to live their best lives.
        </p>

        <h2 id="getting-involved" className="text-2xl text-center mt-8">Getting Involved</h2>
        <p className="text-lg text-center mt-4">
          We are always looking for volunteers who are passionate about making a difference. Whether you're a professional in need of a helping hand or a student looking to gain experience, there's a place for you here.
        </p>

        <h2 id="donations" className="text-2xl text-center mt-8">Donations</h2>
        <p className="text-lg text-center mt-4">
          Your donation will help us provide the help we promise. Every little bit counts and can make a big difference in the lives of those we serve.
        </p>
      </div>
    </div>
  );
};

export default GeneratedComponent;