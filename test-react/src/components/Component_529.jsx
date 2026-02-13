import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <div className="font-sans font-bold break-normal pt-6 pb-2 text-center">
            <h1 className="text-4xl">Welcome to Our Creative Agency</h1>
          </div>
          <p className="py-6">
            At our creative agency, we are dedicated to helping businesses and individuals create unique and engaging content. Whether you're looking for a new logo, a website, or a video, we've got you covered. We specialize in a wide range of services, from graphic design to video production, and everything in between. Our team of experienced professionals is committed to delivering high-quality work that meets and exceeds your expectations.
          </p>
          <div className="flex items-center justify-between flex-wrap pb-4">
            <div className="w-full md:w-1/3 p-3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="w-full" src="https://static.photos/art/900x600/131.webp" alt="Design"/>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">Graphic Design</h2>
                  <p className="text-gray-700 text-base">
                    We create stunning designs that will help your brand stand out.
                  </p>
                </div>
              </div>
            </div>
            {/* Repeat the above div for each service */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;