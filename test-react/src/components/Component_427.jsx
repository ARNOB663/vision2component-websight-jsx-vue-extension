import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/food/1600x900/28.webp')" }}>
        <div className="container mx-auto px-6 md:flex md:items-center md:justify-between py-4">
          <div className="text-center text-white">
            <h1 className="font-bold uppercase text-5xl pt-20 md:pt-0">Welcome to our Food Delivery Service</h1>
            <p className="text-2xl pt-10">We offer the best food delivery service in town. Our menu is carefully curated to provide you with the best dishes from all around the world.</p>
            <button className="bg-white text-gray-800 font-bold rounded-full mt-10 px-4 py-3">Order Now</button>
          </div>
        </div>
      </header>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-center font-bold">Featured Menu Items</h2>
          {/* Add your menu items here */}
        </div>
      </section>
      <footer className="bg-gray-800 text-white text-center py-8">
        <div className="container mx-auto px-6">
          <p>Follow us on social media</p>
          {/* Add your social media links here */}
          <p className="mt-4">Contact us at: info@fooddelivery.com</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;