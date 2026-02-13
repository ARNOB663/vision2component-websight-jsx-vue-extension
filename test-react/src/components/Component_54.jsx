import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-bold">
      <div className="relative">
        <video autoPlay muted loop id="myVideo">
          <source src="https://picsum.photos/seed/54/900/600" type="video/mp4" />
        </video>
        <div className="absolute top-0 w-full h-full bg-black opacity-50"></div>
      </div>
      <nav className="sticky top-0 z-10 bg-white py-4 px-6 flex justify-between">
        <a href="#" className="text-lg">Tech Startup</a>
        <div className="flex">
          <a href="#" className="px-4">Facebook</a>
          <a href="#" className="px-4">Twitter</a>
          <a href="#" className="px-4">Instagram</a>
        </div>
      </nav>
      <div className="container mx-auto py-10 px-6">
        <h1 className="text-4xl mb-6">Welcome to Tech Startup</h1>
        <p className="mb-6">
          At Tech Startup, we are dedicated to providing innovative and cutting-edge solutions to the world's most complex problems. Our team of experts is comprised of the brightest minds in their respective fields, each with a wealth of experience and a passion for technology. We believe in the power of technology to transform the world, and we are committed to using our skills and knowledge to make that a reality.
        </p>
        {/* Add more paragraphs as needed */}
      </div>
    </div>
  );
};

export default GeneratedComponent;