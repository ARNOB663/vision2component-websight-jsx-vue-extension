import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-900 text-white">
      <header className="bg-white text-black p-4">
        <h1 className="text-3xl font-bold">News and Media Company</h1>
        <nav className="flex justify-between items-center">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-500">Home</a></li>
            <li><a href="#" className="hover:text-gray-500">About</a></li>
            <li><a href="#" className="hover:text-gray-500">Contact</a></li>
          </ul>
          <form>
            <input type="text" placeholder="Search..." className="border rounded p-2"/>
          </form>
        </nav>
      </header>

      <main className="flex p-4">
        <aside className="w-1/4 p-4">
          <h2 className="text-2xl font-bold">Recent Posts</h2>
          <ul>
            <li><a href="#" className="hover:text-gray-500">Post 1</a></li>
            <li><a href="#" className="hover:text-gray-500">Post 2</a></li>
            <li><a href="#" className="hover:text-gray-500">Post 3</a></li>
          </ul>
        </aside>

        <section className="w-3/4 p-4">
          <h2 className="text-2xl font-bold">Articles</h2>
          <article className="mb-4">
            <h3 className="text-xl font-bold">Article 1</h3>
            <p>This is the first article. It's a great read.</p>
          </article>
          <article className="mb-4">
            <h3 className="text-xl font-bold">Article 2</h3>
            <p>This is the second article. It's also a great read.</p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;