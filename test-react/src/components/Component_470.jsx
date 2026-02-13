import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white p-4 flex justify-between items-center">
        <img src="https://static.photos/business/300x300/72.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-green-500 hover:text-green-700">Home</a></li>
            <li><a href="#" className="text-green-500 hover:text-green-700">About</a></li>
            <li><a href="#" className="text-green-500 hover:text-green-700">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <section className="text-center my-16">
          <h1 className="text-4xl mb-4">Welcome to Our Non-Profit Organization</h1>
          <p className="text-lg mb-8">We are a dedicated group of individuals who believe in the power of community and the importance of giving back. We strive to make a difference in the world, one person at a time.</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Donate Now</button>
        </section>
        <section className="grid grid-cols-2 gap-4 my-16">
          <div>
            <img src="https://static.photos/business/900x600/73.webp" alt="Impact" className="mb-4" />
            <p>Our work has had a profound impact on the lives of countless individuals. We believe that every donation, no matter how small, can make a significant difference.</p>
          </div>
          <div>
            <img src="https://static.photos/business/900x600/74.webp" alt="Story" className="mb-4" />
            <p>We are proud to share the stories of our volunteers and donors. They are the heart and soul of our organization.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;