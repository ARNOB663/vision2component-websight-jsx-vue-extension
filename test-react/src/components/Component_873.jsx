import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-900 text-white">
      <header className="flex justify-between items-center p-4">
        <h1 className="text-2xl">Tech Company</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-green-400">Home</a></li>
            <li><a href="#" className="hover:text-green-400">About</a></li>
            <li><a href="#" className="hover:text-green-400">Services</a></li>
            <li><a href="#" className="hover:text-green-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex p-4">
        <section className="w-2/3">
          <img src="https://static.photos/business/900x600/75.webp" alt="Tech Image" className="w-full"/>
          <h2 className="text-xl my-4">Welcome to Tech Company</h2>
          <p className="text-lg">
            At Tech Company, we are dedicated to providing the best technology solutions for your business needs. Our team of experts is committed to delivering innovative, reliable, and efficient solutions that help our clients grow and succeed. Whether you're looking for a new website, a custom software solution, or a digital marketing strategy, we're here to help.
          </p>
        </section>

        <aside className="w-1/3 p-4">
          <h3 className="text-lg mb-4">Latest News</h3>
          <article className="mb-4">
            <h4 className="text-green-400">New Product Launch</h4>
            <p>We're excited to announce the launch of our new product. This innovative solution will help you achieve your business goals.</p>
          </article>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </aside>
      </main>

      <footer className="bg-gray-800 p-4 text-center">
        <p>&copy; 2022 Tech Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;