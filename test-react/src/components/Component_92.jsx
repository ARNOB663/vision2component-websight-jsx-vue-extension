import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ul>
          <li className="mb-2"><a href="#">Pizza</a></li>
          <li className="mb-2"><a href="#">Burger</a></li>
          <li className="mb-2"><a href="#">Sushi</a></li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 mt-8">Categories</h2>
        <ul>
          <li className="mb-2"><a href="#">Vegetarian</a></li>
          <li className="mb-2"><a href="#">Non-Vegetarian</a></li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 mt-8">Filter Options</h2>
        <ul>
          <li className="mb-2"><a href="#">Price</a></li>
          <li className="mb-2"><a href="#">Rating</a></li>
        </ul>
      </div>
      <div className="w-3/4 p-4">
        <img src="https://picsum.photos/seed/92/900/600" alt="Popular Dish" className="w-full"/>
        <div className="mt-4">
          <h1 className="text-4xl font-bold mb-4">Our Popular Dish</h1>
          <p className="mb-4">
            Our popular dish is a delicious combination of fresh ingredients. It's made with the finest quality ingredients, ensuring a perfect blend of taste and nutrition. The dish is perfect for any occasion, whether it's a romantic dinner for two, a family dinner, or a special occasion.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
            Order Now
          </button>
          <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;