import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="flex justify-between items-center p-4 bg-white">
        <img src="https://static.photos/art/300x300/81.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-pink-500 hover:text-pink-700">Home</a></li>
            <li><a href="#" className="text-pink-500 hover:text-pink-700">Menu</a></li>
            <li><a href="#" className="text-pink-500 hover:text-pink-700">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="p-4">
        <section className="mb-4">
          <img src="https://static.photos/art/900x600/82.webp" alt="Hero Image" className="w-full h-64 object-cover" />
        </section>
        <section className="mb-4">
          <h1 className="text-2xl font-bold mb-2">Welcome to our Food Delivery Service</h1>
          <p className="text-gray-700">We are a team of passionate food lovers who love to share our love of food with the world. Our mission is to bring the best of the best food to your doorstep. We believe in the power of food to bring people together and create lasting memories.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Our Most Popular Dishes</h2>
          {/* Add your popular dishes here */}
        </section>
      </main>
      <footer className="p-4 bg-white">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-700">Contact us: info@fooddelivery.com</p>
          </div>
          <div>
            {/* Add your social media icons here */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;