import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-yellow-50 text-white">
      <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/fashion/1600x900/170.webp')" }}></div>
      <div className="container mx-auto px-4 py-8 flex flex-wrap">
        <div className="w-full md:w-1/4 px-4">
          <h2 className="text-2xl mb-4">Product Categories</h2>
          <ul className="list-disc pl-4">
            <li>Basketballs</li>
            <li>Basketball Hoops</li>
            <li>Basketball Shorts</li>
            <li>Basketball Jerseys</li>
          </ul>
        </div>
        <div className="w-full md:w-3/4 px-4">
          <h2 className="text-2xl mb-4">Product Listings</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <img className="mb-4" src="https://static.photos/fashion/900x600/171.webp" alt="Basketball"/>
              <h3 className="text-xl mb-2">Basketball</h3>
              <p>A basketball is a spherical inflated ball used in basketball games. Basketballs typically range in size from 9.4 to 10.6 inches in diameter and are used in men's, women's, and mixed-sex games.</p>
            </div>
            {/* Repeat the above div for each product */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;