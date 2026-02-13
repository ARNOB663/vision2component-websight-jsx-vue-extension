import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="flex items-center justify-between bg-white p-4">
        <img src="https://static.photos/art/300x300/88.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex">
            <li className="mr-6"><a href="#" className="text-pink-500 hover:text-pink-800">Home</a></li>
            <li className="mr-6"><a href="#" className="text-pink-500 hover:text-pink-800">About</a></li>
            <li><a href="#" className="text-pink-500 hover:text-pink-800">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <section className="text-center">
          <h1 className="text-4xl mb-4">Welcome to Our Non-Profit Organization</h1>
          <p className="mb-8">We are a dedicated group of individuals who believe in the power of community and the importance of giving back. Our mission is to make a positive impact in the world, one person at a time.</p>
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Donate Now</button>
        </section>
      </main>

      <footer className="bg-white p-4 text-center text-gray-500 text-sm">
        <p>Follow us on social media:</p>
        <ul className="flex justify-center">
          <li className="mr-2"><a href="#" className="text-pink-500 hover:text-pink-800">Facebook</a></li>
          <li className="mr-2"><a href="#" className="text-pink-500 hover:text-pink-800">Twitter</a></li>
          <li><a href="#" className="text-pink-500 hover:text-pink-800">Instagram</a></li>
        </ul>
        <p className="mt-4">Donate to our cause:</p>
        <form>
          <input type="text" placeholder="Amount" className="border border-gray-400 p-2 mt-2" />
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-2">Donate</button>
        </form>
      </footer>
    </div>
  );
};

export default GeneratedComponent;