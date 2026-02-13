import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-gray-200">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/4 p-4">
          {/* Sidebar content */}
          <h2 className="text-lg font-bold">Contact Information</h2>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@constructioncompany.com</p>
          <h2 className="text-lg font-bold">Services</h2>
          <p>Residential construction</p>
          <p>Commercial construction</p>
        </div>
        <div className="w-full lg:w-3/4 p-4">
          {/* Main content */}
          <h1 className="text-2xl font-bold">Welcome to Our Construction Company</h1>
          <p>We are a leading construction company specializing in residential and commercial construction. Our team of experienced professionals is dedicated to delivering high-quality, reliable construction services. We pride ourselves on our attention to detail and our commitment to safety.</p>
          {/* Portfolio grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4">
              <h2 className="text-lg font-bold">Project 1</h2>
              <img src="https://picsum.photos/seed/63/900/600" alt="Project 1"/>
            </div>
            <div className="bg-white p-4">
              <h2 className="text-lg font-bold">Project 2</h2>
              <img src="https://picsum.photos/seed/63/900/600" alt="Project 2"/>
            </div>
            {/* Add more projects as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { GeneratedComponent };