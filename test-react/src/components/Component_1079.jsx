import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="flex justify-between items-center p-4 bg-white">
        <img src="https://picsum.photos/300/300?image=81" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-800 hover:text-pink-500">Home</a></li>
            <li><a href="#" className="text-gray-800 hover:text-pink-500">Products</a></li>
            <li><a href="#" className="text-gray-800 hover:text-pink-500">About</a></li>
            <li><a href="#" className="text-gray-800 hover:text-pink-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        {/* Your content here */}
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg mb-2">Size Guides</h3>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-white">Men's</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Women's</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Children's</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-2">Contact</h3>
              <p>123 Main St<br />Anytown, USA 12345<br />Phone: (123) 456-7890<br />Email: info@example.com</p>
            </div>
            <div>
              <h3 className="text-lg mb-2">Customer Reviews</h3>
              <p>"I love this brand!" - John Doe</p>
              <p>"The quality is amazing!" - Jane Doe</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;