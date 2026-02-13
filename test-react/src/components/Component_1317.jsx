import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <header className="bg-white p-4">
        <h1 className="text-2xl font-bold">Art Gallery</h1>
      </header>
      <main className="flex flex-1">
        <aside className="w-1/4 bg-white p-4">
          <h2 className="text-xl font-bold">Artist Information</h2>
          <p>This is where you can put information about the artist.</p>
          <h2 className="text-xl font-bold">Upcoming Exhibitions</h2>
          <p>This is where you can put information about upcoming exhibitions.</p>
        </aside>
        <section className="w-3/4 bg-white p-4">
          <img src="https://static.photos/art/900x600/119.webp" alt="Art Gallery" className="w-full h-full object-cover" />
        </section>
      </main>
      <footer className="bg-white p-4">
        <h2 className="text-xl font-bold">Contact Information</h2>
        <p>This is where you can put contact information.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;