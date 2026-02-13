import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex items-center justify-between">
        <img src="https://picsum.photos/seed/41/300/300" alt="Logo" className="h-10" />
        <form>
          <input type="text" placeholder="Search articles..." className="border p-2 rounded" />
        </form>
      </header>

      <main className="container mx-auto p-4 flex">
        <div className="w-3/4">
          <h2 className="text-2xl mb-4">Trending Articles</h2>
          <div className="grid grid-cols-2 gap-4">
            <article className="bg-white p-4">
              <h3 className="text-xl mb-2">Article Title</h3>
              <p>Article summary goes here. This should be a brief summary of the article.</p>
            </article>
            {/* More articles here */}
          </div>
        </div>

        <aside className="w-1/4 ml-4">
          <h2 className="text-2xl mb-4">Categories</h2>
          <ul>
            <li>Category 1</li>
            <li>Category 2</li>
            {/* More categories here */}
          </ul>
        </aside>
      </main>

      <footer className="bg-white p-4 text-center">
        <p>Advertising information goes here.</p>
        <a href="/contact" className="block mt-2">Contact Us</a>
        <div className="mt-2">
          <a href="#">Facebook</a>
          <a href="#" className="ml-2">Twitter</a>
          <a href="#" className="ml-2">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;