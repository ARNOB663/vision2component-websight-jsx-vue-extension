import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-indigo-500 text-white text-center py-12">
        <h1 className="text-4xl">Welcome to our Travel Agency</h1>
        <p className="mt-4 text-xl">Experience the world with us. We offer a wide range of travel packages to exotic destinations.</p>
        <button className="mt-8 bg-white text-indigo-500 hover:bg-indigo-600 text-lg py-2 px-8 rounded">Book Now</button>
      </header>
      <section className="py-12">
        <h2 className="text-3xl text-center mb-8">Popular Destinations</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <img src="https://picsum.photos/seed/385/900/600" alt="Beach" className="w-full rounded"/>
            <h3 className="text-2xl mt-4">Beach Destinations</h3>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <img src="https://picsum.photos/seed/385/900/600" alt="Mountain" className="w-full rounded"/>
            <h3 className="text-2xl mt-4">Mountain Destinations</h3>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <img src="https://picsum.photos/seed/385/900/600" alt="City" className="w-full rounded"/>
            <h3 className="text-2xl mt-4">City Destinations</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneratedComponent;