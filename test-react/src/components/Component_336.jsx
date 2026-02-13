import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <div className="bg-fixed bg-center bg-cover h-screen" style={{ backgroundImage: "url('https://picsum.photos/seed/336/1600/900')" }}>
        <div className="flex justify-center items-center h-screen">
          <img src="https://picsum.photos/seed/336/300/300" alt="Logo" className="h-16" />
        </div>
      </div>
      <nav className="flex justify-center items-center h-16 bg-gray-800 text-white">
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Features</a></li>
          <li><a href="#" className="hover:underline">Testimonials</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl mb-2">Features</h2>
            <p className="mb-2">Our technology startup offers a wide range of features designed to meet the needs of modern businesses. From powerful analytics to intuitive user interfaces, we've got you covered.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl mb-2">Testimonials</h2>
            <p className="mb-2">"I couldn't be happier with my decision to choose our technology startup. The team is incredibly knowledgeable and responsive, and the product is top-notch."</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read More</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
      </div>
    </>
  );
};

export default GeneratedComponent;