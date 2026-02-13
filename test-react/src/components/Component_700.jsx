import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://static.photos/real-estate/1600x900/101.webp")' }}>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/5 p-4">
          <nav className="flex flex-col">
            <a href="#" className="my-2 text-lg font-bold text-blue-500 hover:text-blue-700">Home</a>
            <a href="#" className="my-2 text-lg font-bold text-blue-500 hover:text-blue-700">Listings</a>
            <a href="#" className="my-2 text-lg font-bold text-blue-500 hover:text-blue-700">About Us</a>
            <a href="#" className="my-2 text-lg font-bold text-blue-500 hover:text-blue-700">Contact Us</a>
          </nav>
        </div>
        <div className="w-full md:w-4/5 p-4">
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Welcome to Our Real Estate Company</h1>
            <p className="text-xl text-center mt-4">We are a leading real estate company specializing in finding your dream home. With a team of experienced realtors on hand, we can help you find the perfect property.</p>
          </div>
          <div className="flex flex-wrap mt-8">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <img src="https://static.photos/real-estate/900x600/102.webp" alt="House" className="w-full h-64 object-cover"/>
              <h2 className="text-2xl font-bold mt-2">Beautiful House</h2>
              <p className="mt-2">This is a beautiful house with a lot of space and a great location.</p>
            </div>
            {/* Repeat the above div for each listing */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;