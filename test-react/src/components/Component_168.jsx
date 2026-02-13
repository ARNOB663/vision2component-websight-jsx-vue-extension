import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">News and Media</a>
          <ul className="flex">
            <li className="ml-4"><a href="#" className="hover:underline">Home</a></li>
            <li className="ml-4"><a href="#" className="hover:underline">About</a></li>
            <li className="ml-4"><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>

        <div className="mt-8">
          <img src="https://picsum.photos/seed/168/900/600" alt="Main Image" className="w-full"/>
        </div>

        <div className="mt-8">
          <h1 className="text-3xl font-bold">Welcome to News and Media</h1>
          <p className="mt-4">
            At News and Media, we are dedicated to providing the latest news and information to our readers. Our mission is to keep our readers informed and engaged with the latest happenings in their field of interest. We strive to create a clutter-free design with a large main image, a fixed menu, and a clean and readable layout.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Latest News</h2>
          <div className="mt-4">
            {/* Add your latest news here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;