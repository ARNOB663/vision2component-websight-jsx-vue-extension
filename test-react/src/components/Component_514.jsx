import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Tech Startup</span>
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

      <section className="py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <div className="w-full md:w-1/2 flex flex-col">
            <h1 className="text-5xl font-bold leading-tight mt-4 mb-2">Welcome to our Tech Startup</h1>
            <p className="leading-normal text-2xl mb-8">
              We are a team of passionate individuals who are dedicated to creating innovative and cutting-edge technology solutions.
            </p>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Get Started</button>
          </div>
          <div className="w-full md:w-1/2">
            <img className="w-full" src="https://static.photos/technology/900x600/116.webp" alt="Tech Image"/>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-center text-white">
        <div className="container px-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-sm text-gray-400">© 2022 Tech Startup. All rights reserved.</p>
            <div>
              <a href="#" className="text-sm text-gray-400 ml-3">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 ml-3">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;