import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://picsum.photos/seed/143/1600/900')" }}>
        <div className="container mx-auto px-6 md:flex md:items-center md:justify-between py-4">
          <div className="text-center text-white">
            <h1 className="font-bold uppercase text-5xl pt-20 md:pt-0">Welcome to our Food Delivery Service</h1>
            <p className="text-xl pt-10">We offer the best food delivery service in town. Enjoy our mouth-watering dishes and promotions.</p>
            <button className="bg-white text-gray-800 font-bold rounded-full mt-10 px-4 py-3 mb-4">Order Now</button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white text-gray-800 rounded-t rounded-b-none overflow-hidden shadow">
              <h2 className="w-full p-6 text-gray-800 text-xl font-bold">Menu Categories</h2>
              <div className="w-full p-6">
                {/* Add your menu categories here */}
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 p-6">
            <div className="flex-1 bg-white rounded-t rounded-r overflow-hidden shadow">
              <h2 className="w-full p-6 text-gray-800 text-xl font-bold">Featured Dishes</h2>
              <div className="w-full p-6">
                {/* Add your featured dishes here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneratedComponent;