import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=84')" }}>
        <div className="text-center p-5 text-white">
          <h1 className="text-5xl">Welcome to our Travel Agency</h1>
          <p className="text-2xl my-4">Experience the world with us. We offer a wide range of travel packages to suit every taste and budget.</p>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Book Now</button>
        </div>
      </div>

      <div className="container mx-auto p-5">
        <h2 className="text-3xl my-4">Popular Destinations</h2>
        <div className="flex flex-wrap -mx-2 overflow-hidden">
          <div className="my-2 px-2 w-full overflow-hidden md:w-1/3">
            <img className="rounded" src="https://picsum.photos/900/600?image=85" alt="Beach"/>
            <h3 className="text-xl my-2">Beach Destinations</h3>
            <p>Discover the best beaches in the world.</p>
          </div>
          {/* Repeat the above div for each destination */}
        </div>

        <h2 className="text-3xl my-4">Customer Testimonials</h2>
        <div className="flex flex-wrap -mx-2 overflow-hidden">
          <div className="my-2 px-2 w-full overflow-hidden md:w-1/3">
            <img className="rounded-full" src="https://picsum.photos/900/600?image=86" alt="Person"/>
            <h3 className="text-xl my-2">John Doe</h3>
            <p>"I had the best trip ever with this agency. Highly recommend!"</p>
          </div>
          {/* Repeat the above div for each testimonial */}
        </div>
      </div>
    </>
  );
};

export default GeneratedComponent;