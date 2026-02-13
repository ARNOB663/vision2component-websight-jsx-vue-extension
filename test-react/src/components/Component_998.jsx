import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-brown text-white">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="https://static.photos/restaurant/300x300/200.webp" alt="Logo" className="h-10 mr-4" />
          <nav>
            <ul className="flex">
              <li className="mr-4"><a href="#" className="text-green">Home</a></li>
              <li className="mr-4"><a href="#" className="text-green">Menu</a></li>
              <li className="mr-4"><a href="#" className="text-green">About</a></li>
              <li><a href="#" className="text-green">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@restaurant.com</p>
        </div>
      </div>
      <div className="relative w-full">
        <img src="https://static.photos/restaurant/900x600/1.webp" alt="Food Image" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl text-white">Restaurant Name</h1>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-2xl text-green mb-4">About Us</h2>
        <p className="mb-4">
          At Restaurant Name, we believe in the power of great food. Our menu features a variety of dishes that are made with the freshest ingredients and cooked to perfection. From classic comfort food to innovative dishes, we have something for everyone.
        </p>
        <p className="mb-4">
          Our restaurant is not just a place to eat, it's a place where you can relax and enjoy the best meal in the comfort of your own home. We offer a cozy atmosphere with a wide selection of drinks and a friendly staff who are always ready to make your visit memorable.
        </p>
        <p>
          We are proud to serve the community of [Your City] and look forward to welcoming you to our restaurant soon.
        </p>
      </div>
    </div>
  );
};

export default GeneratedComponent;