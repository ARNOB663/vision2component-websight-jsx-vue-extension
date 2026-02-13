import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-3 flex justify-between">
          <div className="flex items-center">
            <img src="https://static.photos/business/300x300/89.webp" alt="Logo" className="h-10" />
            <input type="text" placeholder="Search..." className="ml-4 px-2 py-1 border rounded" />
          </div>
          <nav>
            <ul className="flex">
              <li className="mr-6"><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li className="mr-6"><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-3">
        <section className="mb-6">
          <img src="https://static.photos/business/900x600/90.webp" alt="Hero Image" className="w-full h-64 object-cover" />
        </section>

        <section className="mb-6">
          <h2 className="text-2xl mb-3">Latest Posts</h2>
          <div className="flex">
            <div className="w-2/3 mr-6">
              {/* Latest blog posts go here */}
            </div>
            <aside className="w-1/3">
              {/* Sidebar content goes here */}
            </aside>
          </div>
        </section>
      </main>

      <footer className="bg-white shadow mt-6 py-6">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-600">&copy; 2022 Food Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;