import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-green-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Travel Agency</h1>
        <img src="https://static.photos/travel/300x300/55.webp" alt="Logo" className="h-10" />
      </header>

      <div className="flex mt-4">
        <div className="w-1/2 p-4">
          <img src="https://static.photos/travel/900x600/56.webp" alt="Map" className="w-full" />
          <p className="mt-4">
            At our travel agency, we specialize in providing unforgettable travel experiences. We have locations all over the world, and we are dedicated to making your journey as comfortable and enjoyable as possible. Whether you're looking for a relaxing beach vacation, an action-packed adventure, or a cultural experience, we've got you covered.
          </p>
        </div>

        <div className="w-1/2 p-4">
          <div className="relative">
            <img src="https://static.photos/travel/900x600/57.webp" alt="Slideshow" className="w-full" />
            <button className="absolute bottom-0 right-0 bg-green-500 text-white p-2 rounded">Book Now</button>
          </div>
          <p className="mt-4">
            We offer a wide range of travel packages, from budget-friendly to luxury. Our experienced travel agents will help you plan your trip to fit your budget and lifestyle. Whether you're a couple looking for a romantic getaway, a family looking for a family-friendly destination, or a solo traveler looking for an adventure, we have the perfect package for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;