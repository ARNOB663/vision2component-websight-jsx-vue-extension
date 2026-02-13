import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <div className="font-sans font-bold break-normal pt-6 pb-2 text-gray-900 px-4 md:px-0">
            <div className="text-center">
              <p className="text-5xl">Welcome to our Food Delivery Service</p>
              <p className="text-2xl">We offer a wide variety of appetizing food options, carefully curated to satisfy your cravings.</p>
            </div>
          </div>
          <div className="py-6 px-6">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white text-gray-800 p-6 rounded-lg shadow-md">
                  <p className="text-2xl font-bold">Filter by Dietary Preferences</p>
                  {/* Add your filter options here */}
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white text-gray-800 p-6 rounded-lg shadow-md">
                  <p className="text-2xl font-bold">Filter by Location</p>
                  {/* Add your filter options here */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white text-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-2xl font-bold">Our Food</p>
                {/* Add your food images here */}
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-6">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;