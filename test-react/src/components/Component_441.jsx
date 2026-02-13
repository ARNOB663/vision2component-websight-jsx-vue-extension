import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-3">
              <h1 className="text-4xl font-bold text-center">Welcome to Our Nonprofit Organization</h1>
              <p className="text-center mt-5">
                Our mission is to provide a safe and supportive environment for individuals and families affected by trauma. We believe that everyone deserves a second chance and we are committed to helping them achieve that.
              </p>
              <div className="flex justify-center mt-10">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Donate Now
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-3">
              <h2 className="text-2xl font-bold text-center">Stay Updated</h2>
              <p className="text-center mt-5">
                Sign up for our newsletter to receive updates about our latest events and initiatives.
              </p>
              <form className="mt-10">
                <input className="w-full block appearance-none rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Email"/>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-5 rounded w-full" type="button">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;