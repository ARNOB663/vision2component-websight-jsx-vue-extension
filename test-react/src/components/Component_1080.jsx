import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <img src="https://static.photos/art/300x300/82.webp" alt="Logo" className="h-10" />
        <div className="flex items-center">
          <input type="text" placeholder="Search..." className="px-2 py-1 border rounded" />
          <nav className="ml-4">
            <ul className="flex">
              <li className="px-2"><a href="#">Home</a></li>
              <li className="px-2"><a href="#">Menu</a></li>
              <li className="px-2"><a href="#">About</a></li>
              <li className="px-2"><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to our Food Delivery Service</h1>
        <p className="mb-4">We are a team of passionate food lovers who love to share our love of food with the world. Our mission is to provide you with the best food delivery service in town. We source our ingredients from local farms and markets to ensure the highest quality and taste.</p>
        <img src="https://static.photos/art/900x600/83.webp" alt="Food Image" className="w-full h-64 object-cover my-4" />
      </main>

      <footer className="bg-white p-4 shadow">
        <h2 className="text-xl font-bold mb-2">Popular Delivery Locations</h2>
        <ul className="mb-4">
          <li><a href="#">New York</a></li>
          <li><a href="#">Los Angeles</a></li>
          <li><a href="#">Chicago</a></li>
        </ul>
        <h2 className="text-xl font-bold mb-2">Promotions</h2>
        <ul>
          <li><a href="#">Special Offers</a></li>
          <li><a href="#">Gift Cards</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default GeneratedComponent;