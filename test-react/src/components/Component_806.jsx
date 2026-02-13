import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-800 text-white container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Welcome to Our Media Company</h1>
      <p className="text-xl text-center">
        At our media company, we are dedicated to providing the best in entertainment and media. We are committed to creating high-quality content that is both engaging and informative. Our team of experienced professionals is dedicated to delivering the best possible service to our clients. We are proud to be a leading media company in our industry.
      </p>
      {/* Video Header */}
      <div className="relative w-full h-screen">
        <video controls className="w-full h-full object-cover">
          <source src="https://static.photos/business/900x600/8.webp" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Logo */}
      <div className="flex justify-center mt-8">
        <img src="https://static.photos/business/900x600/9.webp" alt="Company Logo" className="max-w-full h-auto" />
      </div>

      {/* Navigation Bar */}
      <nav className="flex justify-center mt-8">
        <ul className="space-x-6">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">News</a></li>
          <li><a href="#" className="hover:text-blue-500">Videos</a></li>
          <li><a href="#" className="hover:text-blue-500">Social</a></li>
        </ul>
      </nav>

      {/* Three Column Layout */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {/* Latest News */}
        <div className="bg-gray-700 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Latest News</h2>
          <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Featured Videos */}
        <div className="bg-gray-700 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Featured Videos</h2>
          <iframe width="100%" height="200px" src="https://static.photos/business/900x600/10.webp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        {/* Social Media Feeds */}
        <div className="bg-gray-700 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Social Media</h2>
          <ul className="list-disc pl-5">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;