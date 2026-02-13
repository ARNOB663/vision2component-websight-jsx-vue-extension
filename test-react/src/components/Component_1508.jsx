import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <img src="https://static.photos/art/300x300/110.webp" alt="Logo" className="h-10" />
        <input type="text" placeholder="Search..." className="border rounded p-2" />
      </header>

      <main className="flex">
        <aside className="bg-white w-1/5 p-4">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <ul>
            <li className="mb-2"><a href="#" className="text-red-500 hover:text-red-700">Pop</a></li>
            <li className="mb-2"><a href="#" className="text-red-500 hover:text-red-700">Rock</a></li>
            <li className="mb-2"><a href="#" className="text-red-500 hover:text-red-700">Jazz</a></li>
          </ul>
        </aside>

        <section className="w-4/5 p-4">
          <h1 className="text-2xl font-bold mb-4">Featured Artist</h1>
          <img src="https://static.photos/art/900x600/111.webp" alt="Featured Artist" className="mb-4" />
          <p className="text-lg">
            Music Streaming Service is a modern platform that offers a wide range of music genres. We have a vast collection of artists from around the world, and our goal is to provide the best possible listening experience to our users. Whether you're a casual listener or a serious music fan, we have something for everyone.
          </p>
        </section>
      </main>

      <footer className="bg-white p-4 text-center">
        <h2 className="text-lg font-bold mb-4">Popular Playlists</h2>
        <ul className="flex justify-center">
          <li className="mr-4"><a href="#" className="text-red-500 hover:text-red-700">Rock Classics</a></li>
          <li className="mr-4"><a href="#" className="text-red-500 hover:text-red-700">Jazz Bangers</a></li>
          <li className="mr-4"><a href="#" className="text-red-500 hover:text-red-700">Pop Hits</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default GeneratedComponent;