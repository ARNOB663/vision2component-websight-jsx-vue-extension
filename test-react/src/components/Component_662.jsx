import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="relative bg-cover bg-no-repeat bg-center h-[400px]">
        <img src="https://static.photos/business/900x600/64.webp" alt="Food Image" className="w-full h-full object-cover" />
        <nav className="absolute inset-0 flex items-center justify-center">
          <ul className="flex text-white">
            <li className="px-4">Menu</li>
            <li className="px-4">About</li>
            <li className="px-4">Contact</li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4 mt-[-100px] z-10 relative">
        <div className="flex flex-col items-center justify-center">
          <img src="https://static.photos/business/300x300/65.webp" alt="Logo" className="w-1/4" />
          <h1 className="text-2xl text-center">Welcome to our food business</h1>
          <p className="text-center">We are a family-owned business dedicated to providing the best food in the city. Our menu features a variety of dishes, from classic favorites to unique creations. We use only the freshest ingredients to ensure that every dish is made with love. Come visit us and taste the difference.</p>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-10">
        <div className="container mx-auto flex justify-between">
          <div>
            <h3>Locations</h3>
            <ul>
              <li>123 Main St</li>
              <li>456 Second Ave</li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>Phone: 123-456-7890</li>
              <li>Email: info@foodbusiness.com</li>
            </ul>
          </div>
          <div>
            <h3>Ordering</h3>
            <ul>
              <li>Dine-in</li>
              <li>Take-out</li>
              <li>Delivery</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GeneratedComponent;