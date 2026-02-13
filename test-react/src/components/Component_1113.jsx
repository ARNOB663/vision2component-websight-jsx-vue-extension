import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-blue-100 font-sans leading-normal tracking-normal">
      <header className="bg-white p-4 flex justify-between items-center">
        <img src="https://static.photos/business/300x300/115.webp" alt="Bank Logo" />
        <nav>
          <ul className="flex">
            <li className="mr-4">
              <a href="#" className="text-blue-500 hover:text-blue-800">Home</a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-blue-500 hover:text-blue-800">About</a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-blue-500 hover:text-blue-800">Services</a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:text-blue-800">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex p-4">
        <section className="w-2/3 mr-4">
          <h1 className="text-3xl mb-4">Welcome to Our Banking & Finance Site</h1>
          <p className="mb-4">At our banking and finance site, we provide a wide range of services to meet your financial needs. Whether you're looking for personal banking, business banking, investments, or insurance, we have the solutions to help you achieve your financial goals.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
        </section>

        <section className="w-1/3 bg-white p-4">
          <h2 className="text-2xl mb-4">Login</h2>
          <form>
            <input type="text" placeholder="Username" className="mb-2 w-full p-2 border" />
            <input type="password" placeholder="Password" className="mb-4 w-full p-2 border" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Login</button>
          </form>
        </section>
      </main>

      <footer className="bg-white p-4 text-center">
        <p>© 2022 Banking & Finance Site. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;