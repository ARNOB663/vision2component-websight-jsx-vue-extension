import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-red-500 text-white p-4">
        <nav className="flex justify-between items-center">
          <div>
            <a href="#" className="mr-4">Home</a>
            <a href="#" className="mr-4">About Us</a>
            <a href="#" className="mr-4">Get Involved</a>
            <a href="#" className="mr-4">Donate</a>
          </div>
          <div>
            <a href="#" className="mr-4">Login</a>
            <a href="#">Sign Up</a>
          </div>
        </nav>
      </header>

      <main className="p-4">
        <section className="mb-4">
          <h1 className="text-3xl mb-2">Welcome to Our Non-Profit Organization</h1>
          <p className="mb-4">
            We are a non-profit organization dedicated to making a difference in the world. We believe in the power of love and kindness, and we strive to create a world where everyone has the opportunity to live their best lives.
          </p>
          <img src="https://static.photos/people/900x600/183.webp" alt="People making a difference" className="w-full"/>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl mb-2">Our Mission</h2>
          <p className="mb-4">
            Our mission is to provide a platform for individuals to make a difference in their communities. We believe that everyone has the power to make a difference, regardless of their background or circumstances.
          </p>
        </section>

        {/* Add more sections as needed */}
      </main>

      <footer className="bg-red-500 text-white p-4">
        <p className="mb-2">
          Our mission is to provide a platform for individuals to make a difference in their communities. We believe that everyone has the power to make a difference, regardless of their background or circumstances.
        </p>
        {/* Add your newsletter sign-up form and volunteer form here */}
      </footer>
    </div>
  );
};

export default GeneratedComponent;