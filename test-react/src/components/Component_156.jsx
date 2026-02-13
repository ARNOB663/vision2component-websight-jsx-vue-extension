import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Tech Company</h1>
      </header>
      <nav className="bg-gray-200 p-4">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-blue-500 hover:text-blue-700">Home</a></li>
          <li><a href="#" className="text-blue-500 hover:text-blue-700">About</a></li>
          <li><a href="#" className="text-blue-500 hover:text-blue-700">Contact</a></li>
        </ul>
      </nav>
      <main className="flex-grow p-4">
        <h2 className="text-xl font-bold mb-4">Welcome to Tech Company</h2>
        <p className="mb-4">
          At Tech Company, we are dedicated to providing the latest gadgets to our customers. Our mission is to make technology more accessible and affordable for everyone. We believe in the power of technology to transform the world and we are committed to making that a reality.
        </p>
        <p>
          Our team of experts is constantly innovating and developing new products to meet the needs of our customers. We pride ourselves on our commitment to quality and customer satisfaction. We are always here to help you find the perfect gadget for your needs.
        </p>
      </main>
      <aside className="bg-gray-200 w-1/4 p-4">
        <h3 className="text-lg font-bold mb-4">Latest Gadgets</h3>
        {/* Add your latest gadgets here */}
      </aside>
      <footer className="bg-blue-500 text-white p-4">
        <p>© 2022 Tech Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;