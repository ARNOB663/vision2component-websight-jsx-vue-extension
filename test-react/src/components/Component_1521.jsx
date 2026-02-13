import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://static.photos/business/1600x900/122.webp')" }}>
        <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-no-shrink text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Food Company</span>
          </div>
          <div>
            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Order Now</a>
          </div>
        </nav>
      </header>
      <main className="text-center p-10">
        <h1 className="text-5xl mb-4">Welcome to Food Company</h1>
        <p className="text-2xl mb-8">We are a family-owned business dedicated to providing the best food in the world. Our mission is to make people happy by serving delicious meals.</p>
        <img src="https://static.photos/business/900x600/123.webp" alt="Popular Dish" className="mx-auto mb-8"/>
      </main>
      <footer className="bg-gray-800 text-white text-center p-10">
        <p className="mb-4">Follow us on social media:</p>
        <div className="flex justify-center">
          <a href="#" className="text-2xl mx-2">Facebook</a>
          <a href="#" className="text-2xl mx-2">Twitter</a>
          <a href="#" className="text-2xl mx-2">Instagram</a>
        </div>
        <p className="mt-4">Contact us:</p>
        <p>123 Main St, Anytown, USA</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@foodcompany.com</p>
        <form className="mt-4">
          <input type="text" placeholder="Name" className="p-2 mr-2"/>
          <input type="email" placeholder="Email" className="p-2 mr-2"/>
          <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Submit</button>
        </form>
      </footer>
    </div>
  );
};

export default GeneratedComponent;