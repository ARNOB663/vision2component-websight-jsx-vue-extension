import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-green-800 text-white">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <img src="https://picsum.photos/seed/132/300/300" alt="Logo" className="h-10" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-green-300">Home</a></li>
              <li><a href="#" className="hover:text-green-300">Menu</a></li>
              <li><a href="#" className="hover:text-green-300">About Us</a></li>
              <li><a href="#" className="hover:text-green-300">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl mb-4">Welcome to our Food Delivery Service</h1>
            <p className="mb-4">
              At our food delivery service, we believe in the power of food to bring people together. Our mission is to provide fresh, healthy, and delicious meals to your doorstep. We source our ingredients from local farms and markets to ensure the highest quality and taste. We offer a wide variety of dishes, from classic comfort food to unique and exotic cuisine. Our team of experienced chefs and delivery drivers work hard to ensure that every meal is prepared with care and delivered on time. We believe in transparency and honesty, and we strive to make every customer's experience with us a positive one.
            </p>
            <a href="#" className="bg-white text-green-800 px-4 py-2 rounded hover:bg-green-300">Order Now</a>
          </div>
          <div className="w-full md:w-1/2">
            <img src="https://picsum.photos/seed/132/900/600" alt="Food" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;