import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Travel Agency</span>
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

      <div className="relative">
        <img className="w-full" src="https://picsum.photos/seed/361/900/600" alt="Travel Destination" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl text-white">Welcome to our Travel Agency</h1>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Book Now
          </button>
        </div>
      </div>

      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 text-xl text-gray-800 leading-normal">
          <p className="pb-4">
            At our travel agency, we specialize in creating unforgettable travel experiences for our clients. We understand that each person has unique travel needs and preferences, which is why we offer a wide range of travel options, from luxury vacations to budget-friendly getaways.
          </p>
          <p className="pb-4">
            Our team of experienced travel consultants are passionate about travel and are committed to providing you with the best service possible. We believe in the power of travel to broaden perspectives, challenge perceptions, and inspire wonder.
          </p>
          <p className="pb-4">
            Whether you're planning a romantic getaway, a family vacation, a business trip, or a solo adventure, we're here to help you plan your next adventure. Book with us today and let us help you create memories that will last a lifetime.
          </p>
        </div>
      </div>
    </>
  );
};

export { GeneratedComponent };