import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-200">
      <header className="flex items-center justify-between p-4 bg-white">
        <img src="https://static.photos/travel/300x300/173.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex">
            <li className="mr-4"><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li className="mr-4"><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
            <li className="mr-4"><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="relative">
          <img src="https://static.photos/travel/900x600/174.webp" alt="Travel" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl text-white">Welcome to our travel agency</h1>
          </div>
        </section>
        <section className="p-4 text-center">
          <h2 className="text-2xl mb-4">About Us</h2>
          <p className="mb-4">We are a team of experienced travel experts who are passionate about helping you plan your next adventure. Our mission is to provide you with the best travel experience possible, whether you're looking for a relaxing beach vacation, an action-packed adventure, or a cultural exchange.</p>
          <a href="#" className="inline-block px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">Book Now</a>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;