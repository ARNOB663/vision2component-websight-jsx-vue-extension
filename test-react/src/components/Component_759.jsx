import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/business/1600x900/160.webp')" }}>
        <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
          <div className="mt-16 md:mt-0 md:w-full">
            <h1 className="text-5xl font-bold mt-0 mb-2 text-white">Welcome to Our Food and Beverage Company</h1>
            <p className="text-2xl text-white">Experience the best in culinary delights with us.</p>
            <button className="bg-white font-bold rounded-full py-4 px-8 shadow mt-8">Order Now</button>
          </div>
        </div>
      </header>

      <section className="py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Our Menus</h2>
          {/* Add your menus here */}
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6">
          <p className="text-center">© 2022 Food and Beverage Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;