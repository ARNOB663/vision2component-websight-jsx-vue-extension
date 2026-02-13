import React from 'react';

const FinancialServices = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Financial Services</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div className="container mx-auto">
        <h1 className="my-6 text-2xl">Welcome to our financial services site</h1>
        <p className="my-6">
          At our financial services site, we provide a wide range of financial services to meet your needs. Whether you're looking for personal finance advice, investment advice, or financial planning, we're here to help.
        </p>
        {/* Add your live financial data display here */}
      </div>
    </div>
  );
};

export default FinancialServices;