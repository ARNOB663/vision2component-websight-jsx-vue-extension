import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Food Delivery Service</h1>
          <nav>
            <button className="hamburger">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <img src="https://static.photos/art/900x600/98.webp" alt="Food Image" className="w-full"/>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700">
              At Food Delivery Service, we are committed to providing our customers with the best food delivery service in the city. We offer a wide variety of food options from local restaurants to international cuisines. Our delivery service is fast, reliable, and affordable. We are dedicated to ensuring that our customers are satisfied with their food delivery every time.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-xl font-bold mb-4">Newsletter Sign-up</h2>
          <form>
            <input type="email" placeholder="Enter your email" className="w-full p-2 mb-4"/>
            <button type="submit" className="bg-pink-500 text-white p-2">Sign Up</button>
          </form>
          <p className="text-gray-700 mt-4">
            Our delivery service works by receiving your order, preparing the food, and delivering it to your doorstep. We use the latest technology to ensure that your food is hot and fresh when it arrives.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;