import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-indigo-200">
      <header className="bg-green-600 text-white p-4 flex justify-center items-center">
        <div className="flex items-center">
          <img src="https://static.photos/people/300x300/127.webp" alt="Logo" className="w-12 h-12 mr-4" />
          <div>
            <h1 className="text-2xl">Nonprofit Organization</h1>
            <p className="text-sm">A heartfelt and inspiring design</p>
          </div>
        </div>
      </header>

      <div className="flex p-4">
        <aside className="w-1/4 bg-white p-4 mr-4">
          <h2 className="text-lg mb-4">Recent News</h2>
          {/* Add your news stories here */}
        </aside>

        <main className="w-3/4 bg-white p-4">
          <h2 className="text-lg mb-4">About Us</h2>
          {/* Add your business information here */}
        </main>
      </div>

      <footer className="bg-green-600 text-white p-4 flex justify-between items-center">
        <div>
          <a href="#" className="text-white mr-4">Mission Statement</a>
          <a href="#" className="text-white">History</a>
        </div>

        <div>
          <a href="#" className="text-white mr-4">Facebook</a>
          <a href="#" className="text-white mr-4">Twitter</a>
          <a href="#" className="text-white">Instagram</a>
        </div>

        <button className="bg-white text-green-600 px-4 py-2">Donate Now</button>
      </footer>
    </div>
  );
};

export default GeneratedComponent;