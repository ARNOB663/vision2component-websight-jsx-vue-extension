import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 bg-red-500 text-white p-4">
          <h2 className="text-2xl">Menu</h2>
          {/* Menu items go here */}
        </div>
        <div className="w-full md:w-3/4 p-4">
          <div className="bg-red-500 text-white p-4 mb-4">
            <h1 className="text-4xl">Welcome to our Food Truck</h1>
            <p className="text-xl">We offer a wide variety of delicious food made fresh daily. Come try our food and enjoy our friendly service.</p>
            <button className="bg-white text-red-500 p-2 mt-4">Order Now</button>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <img src="https://picsum.photos/seed/193/900/600" alt="Food" />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <img src="https://picsum.photos/seed/193/900/600" alt="Food" />
            </div>
            {/* More food images go here */}
          </div>
          <div className="p-4">
            <h2 className="text-2xl">Testimonials</h2>
            {/* Testimonials go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;