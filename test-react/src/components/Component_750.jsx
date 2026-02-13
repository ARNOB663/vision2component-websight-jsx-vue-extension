import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white p-4">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white">
            <span className="font-bold uppercase text-xl">Creative Studio</span>
          </div>
          <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li className="mr-3">
                <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Team</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Services</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Social Media</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <p className="text-lg leading-loose">
          At Creative Studio, we specialize in visually dynamic design. Our team of skilled designers and developers work together to create unique and engaging experiences that push the boundaries of what's possible. Whether you're looking for a new website, a brand refresh, or a custom application, we're here to help.
        </p>
        {/* Carousel goes here */}
      </main>
      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6">
              <a className="text-gray-800 no-underline hover:text-gray-900 hover:underline" href="#">Creative Studio</a>
            </div>
            <div className="flex-1">
              <p className="text-right">© 2022 Creative Studio. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;