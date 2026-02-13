import React from 'react';

const GeneratedComponent = () => {
  return (
    <div>
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/fashion/1600x900/72.webp')" }}>
        <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <h1 className="mt-0 text-4xl font-bold text-white leading-tight">Welcome to our Fashion Brand</h1>
            <p className="text-white">We are a fashion brand that offers high-quality, stylish clothing and accessories. Our collections are designed to make you feel confident and beautiful.</p>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4">
            <img className="w-full" src="https://static.photos/fashion/900x600/73.webp" alt="Dress"/>
            <h3 className="text-xl font-bold mb-2">Dress</h3>
            <p>A beautiful dress that will make you feel like a princess.</p>
          </div>
          <div className="bg-white p-4">
            <img className="w-full" src="https://static.photos/fashion/900x600/74.webp" alt="Shirt"/>
            <h3 className="text-xl font-bold mb-2">Shirt</h3>
            <p>A comfortable shirt that will keep you warm and stylish.</p>
          </div>
          <div className="bg-white p-4">
            <img className="w-full" src="https://static.photos/fashion/900x600/75.webp" alt="Shoes"/>
            <h3 className="text-xl font-bold mb-2">Shoes</h3>
            <p>Stylish shoes that will make you feel like a million bucks.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneratedComponent;