import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-yellow-50 font-sans leading-normal tracking-normal">
      <header className="flex items-center justify-center bg-white p-4">
        <img src="https://static.photos/art/300x300/194.webp" alt="Logo" className="h-16" />
      </header>
      <nav className="sticky top-0 bg-white p-4">
        <ul className="flex justify-center space-x-4">
          <li><a href="#" className="text-blue-500 hover:text-blue-700">Order</a></li>
          <li><a href="#" className="text-blue-500 hover:text-blue-700">Delivery</a></li>
        </ul>
      </nav>
      <main className="p-4">
        <section className="mb-4">
          <img src="https://static.photos/art/900x600/195.webp" alt="Hero Image" className="w-full" />
          <h1 className="text-2xl font-bold mb-2">Welcome to our Food Delivery Service</h1>
          <p className="text-gray-700">We offer a wide variety of delicious meals, prepared fresh daily by our expert chefs. Our mission is to bring the joy of cooking to your doorstep.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Popular Dishes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4">
              <img src="https://static.photos/art/900x600/196.webp" alt="Pizza" className="w-full" />
              <h3 className="text-lg font-bold mb-2">Pizza</h3>
              <p className="text-gray-700">A delicious pizza made with fresh ingredients.</p>
            </div>
            {/* Add more dishes here */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;