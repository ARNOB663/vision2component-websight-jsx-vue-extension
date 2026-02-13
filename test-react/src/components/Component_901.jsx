import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-200 font-sans leading-normal tracking-normal">
      <header className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/restaurant/1600x900/102.webp')" }}>
        <nav className="absolute top-0 w-full">
          <ul className="flex justify-center pt-6">
            <li className="px-3"><a href="#menu" className="text-white no-underline hover:text-yellow-300">Menu</a></li>
            <li className="px-3"><a href="#about" className="text-white no-underline hover:text-yellow-300">About</a></li>
            <li className="px-3"><a href="#contact" className="text-white no-underline hover:text-yellow-300">Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center justify-center h-screen">
          <img src="https://static.photos/restaurant/300x300/103.webp" alt="Restaurant Logo" className="w-1/2"/>
        </div>
      </header>
      <section id="menu" className="py-10">
        <h2 className="text-4xl text-center">Menu</h2>
        {/* Add your menu items here */}
      </section>
      <section id="about" className="py-10 bg-gray-200">
        <h2 className="text-4xl text-center">About Us</h2>
        <p className="text-center">
          At our restaurant, we believe in the power of food to bring people together. Our menu is a celebration of the finest ingredients, carefully sourced from around the world. We use only the freshest produce to create delectable dishes that are not only visually appealing but also satisfying to the palate. Our chefs are passionate about their craft and are dedicated to creating a unique dining experience for every guest.
        </p>
      </section>
      <section id="contact" className="py-10">
        <h2 className="text-4xl text-center">Contact Us</h2>
        {/* Add your contact information here */}
      </section>
    </div>
  );
};

export default GeneratedComponent;