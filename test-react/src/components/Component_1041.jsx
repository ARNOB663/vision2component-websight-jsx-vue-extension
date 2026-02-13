import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-indigo-500">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-center items-center h-64">
          <h1 className="text-4xl text-white">News Media Company</h1>
        </header>
        <main className="flex flex-wrap -mx-4">
          <section className="w-full md:w-1/3 px-4 mb-8">
            <h2 className="text-2xl mb-4">Latest News</h2>
            <article className="bg-white p-4 mb-4">
              <h3 className="text-xl mb-2">Article Title</h3>
              <p className="text-gray-700">Article content...</p>
            </article>
            {/* More articles... */}
          </section>
          <aside className="w-full md:w-1/3 px-4 mb-8">
            <h2 className="text-2xl mb-4">Categories</h2>
            <ul className="bg-white p-4">
              <li className="mb-2">Category 1</li>
              <li className="mb-2">Category 2</li>
              {/* More categories... */}
            </ul>
            <h2 className="text-2xl mb-4">Search</h2>
            <form className="bg-white p-4">
              <input type="text" placeholder="Search..." className="w-full p-2" />
              <button type="submit" className="w-full bg-indigo-500 text-white p-2">Search</button>
            </form>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default GeneratedComponent;