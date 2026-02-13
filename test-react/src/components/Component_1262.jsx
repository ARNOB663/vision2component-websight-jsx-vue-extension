import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">Travel Agency</a>
          <div>
            <a href="#" className="mr-4">Home</a>
            <a href="#" className="mr-4">About</a>
            <a href="#" className="mr-4">Contact</a>
          </div>
        </nav>
      </header>

      <section className="container mx-auto my-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to our Travel Agency</h1>
        <p className="mb-4">We are a travel agency that specializes in providing high-quality travel services to our clients. Our team of experienced travel experts can help you plan your next adventure.</p>
        <img src="https://static.photos/travel/900x600/64.webp" alt="Travel" className="w-full h-64 object-cover my-4" />
      </section>

      <section className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://static.photos/travel/900x600/65.webp" alt="Beach" className="w-full h-32 object-cover" />
          <img src="https://static.photos/travel/900x600/66.webp" alt="Mountain" className="w-full h-32 object-cover" />
          <img src="https://static.photos/travel/900x600/67.webp" alt="City" className="w-full h-32 object-cover" />
          <img src="https://static.photos/travel/900x600/68.webp" alt="Forest" className="w-full h-32 object-cover" />
        </div>
      </section>

      <section className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <div className="bg-white p-4">
          <p className="mb-2">"I had an amazing trip with my family. The staff was very friendly and the hotels were top-notch."</p>
          <p className="text-right font-bold">- John Doe</p>
        </div>
      </section>

      <section className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">Search for Deals</h2>
        <form className="flex">
          <input type="text" placeholder="Search..." className="flex-1 p-2" />
          <button type="submit" className="bg-yellow-500 text-white p-2">Search</button>
        </form>
      </section>

      <footer className="bg-white py-4">
        <div className="container mx-auto">
          <p>© 2022 Travel Agency</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;