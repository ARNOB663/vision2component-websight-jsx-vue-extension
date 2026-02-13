import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <div>
          <input type="text" placeholder="Search properties..." className="border rounded p-2" />
        </div>
        <nav>
          <ul className="flex">
            <li className="mr-4"><a href="#" className="text-purple-500">Home</a></li>
            <li className="mr-4"><a href="#" className="text-purple-500">About</a></li>
            <li><a href="#" className="text-purple-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex">
        <div className="w-1/2">
          <img src="https://picsum.photos/seed/276/900/600" alt="Property Image" className="w-full" />
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-2xl mb-4">Properties for Sale</h2>
          <ul>
            <li className="mb-2">123 Main St, Anytown USA</li>
            <li className="mb-2">456 Oak St, Anytown USA</li>
            <li className="mb-2">789 Pine St, Anytown USA</li>
          </ul>
        </div>
      </main>

      <footer className="bg-white p-4 flex justify-between items-center">
        <div>
          <p>123 Real Estate St, Anytown USA</p>
          <p>(123) 456-7890</p>
        </div>
        <div>
          <a href="#" className="text-purple-500 mr-2">Facebook</a>
          <a href="#" className="text-purple-500 mr-2">Twitter</a>
          <a href="#" className="text-purple-500">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;