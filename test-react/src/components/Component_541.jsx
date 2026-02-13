import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Non-Profit Organization</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#donate" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Donate
            </a>
            <a href="#volunteer" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Volunteer
            </a>
            <a href="#mission" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Mission
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4">
        <img src="https://static.photos/people/900x600/143.webp" alt="People in action" className="w-full"/>
        <h1 className="text-3xl mt-4">About Us</h1>
        <p className="mt-4">
          At Non-Profit Organization, we believe in the power of community and the importance of giving back. We are a non-profit organization dedicated to making a difference in the world. We believe in the transformative power of human beings and strive to create a better world for all.
        </p>
        {/* Add more content here */}
      </div>
    </div>
  );
};

export default GeneratedComponent;