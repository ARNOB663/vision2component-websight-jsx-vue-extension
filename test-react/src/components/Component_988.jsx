import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal h-screen flex flex-col justify-center items-center">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="https://static.photos/art/900x600/190.webp" type="video/mp4" />
      </video>
      <div className="container w-full md:max-w-3xl mx-auto pt-20 relative z-10">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal font-sans">
          <div className="font-sans font-bold break-normal pt-6 pb-2 text-gray-900 px-4 md:px-0">
            <div className="text-4xl">Welcome to our Creative Agency</div>
            <p className="text-2xl pt-4 pb-2">
              We are a dynamic and innovative agency that specializes in creating unique and engaging digital experiences. Our team of experts is passionate about what they do and are committed to delivering the best results for our clients.
            </p>
          </div>
        </div>
      </div>
      <nav className="fixed bottom-0 w-full bg-black opacity-75 text-white text-center py-4">
        <ul className="flex justify-around">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default GeneratedComponent;