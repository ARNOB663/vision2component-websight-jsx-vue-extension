import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-800 text-white">
      <header className="bg-gray-900 p-4">
        <h1 className="text-2xl">Construction Company</h1>
      </header>

      <main className="flex flex-row">
        <section className="w-1/2 p-4">
          <img src="https://picsum.photos/seed/166/900/600" alt="Construction Project" />
          <p>Our construction company is dedicated to creating beautiful and functional spaces. We specialize in residential, commercial, and industrial projects.</p>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
        </section>

        <section className="w-1/2 p-4">
          <img src="https://picsum.photos/seed/166/900/600" alt="Architecture Project" />
          <p>We are committed to creating spaces that are not just beautiful, but also functional and efficient. Our projects are designed to meet the needs of our clients.</p>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
        </section>
      </main>

      <footer className="bg-gray-900 p-4">
        <h2 className="text-xl">Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" className="p-2 m-2" />
          <input type="email" placeholder="Email" className="p-2 m-2" />
          <textarea placeholder="Message" className="p-2 m-2" />
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
      </footer>
    </div>
  );
};

export default GeneratedComponent;