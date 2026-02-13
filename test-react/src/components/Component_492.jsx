import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://static.photos/education/300x300/94.webp" alt="Logo" className="h-10" />
          </div>
          <div>
            <form className="flex items-center">
              <input type="text" placeholder="Search..." className="border rounded px-2 py-1" />
              <button type="submit" className="bg-purple-500 text-white px-2 py-1 rounded ml-2">Search</button>
            </form>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Education Institute</h1>
        <p className="mb-4">
          At our education institute, we are committed to providing high-quality education to our students. We offer a wide range of courses in various subjects, and our experienced and dedicated teachers ensure that our students receive the best possible education.
        </p>
        {/* Add more content here */}
      </main>

      <footer className="bg-white shadow mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Newsletter</h2>
              <form>
                <input type="email" placeholder="Enter your email" className="border rounded px-2 py-1 mb-2" />
                <button type="submit" className="bg-purple-500 text-white px-2 py-1 rounded">Subscribe</button>
              </form>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Links</h2>
              <ul>
                <li><a href="#" className="text-purple-500 hover:underline">About Us</a></li>
                <li><a href="#" className="text-purple-500 hover:underline">Contact Us</a></li>
                {/* Add more links here */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;