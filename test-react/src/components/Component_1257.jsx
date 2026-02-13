import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white py-4">
        <div className="container mx-auto flex justify-center">
          <img src="https://static.photos/nature/300x300/59.webp" alt="Logo" />
        </div>
      </header>

      <nav className="bg-green-500 text-white">
        <div className="container mx-auto flex justify-center">
          <ul className="flex">
            <li className="px-4">Home</li>
            <li className="px-4">About</li>
            <li className="px-4">Services</li>
            <li className="px-4">Contact</li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto my-8">
        <section className="mb-8">
          <h2 className="text-2xl mb-4">About Us</h2>
          <p>Write your about us text here.</p>
          <button className="bg-green-500 text-white px-4 py-2">Learn More</button>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl mb-4">Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" className="block border w-full p-2 mb-2" />
            <input type="email" placeholder="Email" className="block border w-full p-2 mb-2" />
            <textarea placeholder="Message" className="block border w-full p-2 mb-2" />
            <button type="submit" className="bg-green-500 text-white px-4 py-2">Submit</button>
          </form>
        </section>
      </main>

      <footer className="bg-green-500 text-white py-4">
        <div className="container mx-auto">
          <p>Contact Information</p>
          <p>Testimonials</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;