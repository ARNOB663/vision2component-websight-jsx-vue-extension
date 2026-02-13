import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 shadow">
        <h1 className="text-3xl font-bold">Discover New Worlds</h1>
        <nav className="flex justify-between mt-4">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-yellow-500 hover:text-yellow-700">Categories</a></li>
            <li><a href="#" className="text-yellow-500 hover:text-yellow-700">Authors</a></li>
          </ul>
          <div>
            <input type="text" placeholder="Search..." className="px-2 py-1 border rounded"/>
          </div>
        </nav>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <p className="text-lg mb-4">Welcome to our publishing house, where we publish books that explore new worlds and challenge our understanding of the world around us. Our books are not just about the physical world, but also about the spiritual, emotional, and intellectual worlds. We believe that by exploring these worlds, we can gain a deeper understanding of ourselves and the world around us.</p>
      </main>

      <footer className="bg-white p-4 mt-8 shadow-inner">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-bold">Contact</h2>
            <p>123 Main St<br/>Anytown, USA<br/>123-456-7890<br/>info@publishinghouse.com</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Social Media</h2>
            <p>Facebook: facebook.com/publishinghouse<br/>Twitter: twitter.com/publishinghouse<br/>Instagram: instagram.com/publishinghouse</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;