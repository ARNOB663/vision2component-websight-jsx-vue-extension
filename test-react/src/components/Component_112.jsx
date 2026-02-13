import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4">
        <img src="https://picsum.photos/seed/112/900/600" alt="Printing & Stationery Store" className="w-full" />
        <nav className="flex justify-center space-x-4 mt-4">
          <a href="#popular" className="text-pink-500 hover:text-pink-700">Popular Products</a>
          <a href="#custom" className="text-pink-500 hover:text-pink-700">Custom Printing</a>
          <a href="#design" className="text-pink-500 hover:text-pink-700">Design Services</a>
        </nav>
      </header>

      <main className="max-w-screen-lg mx-auto p-4">
        <section id="popular" className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Popular Products</h2>
          <p className="mb-4">We offer a wide range of popular products for your printing needs. From stationary to gift items, we have everything you need.</p>
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Shop Now</button>
        </section>

        <section id="custom" className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Custom Printing</h2>
          <p className="mb-4">We understand that every business is unique, which is why we offer custom printing services. Let us help you create a unique and professional design for your business.</p>
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Get a Quote</button>
        </section>

        <section id="design" className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Design Services</h2>
          <p className="mb-4">Our design services include everything from logo design to brochure design. We use the latest design trends to create designs that are not only beautiful, but also effective.</p>
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
        </section>
      </main>

      <footer className="bg-white p-4 text-center">
        <p>© 2022 Printing & Stationery Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;