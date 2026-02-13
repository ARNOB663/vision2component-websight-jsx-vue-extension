import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-green-500 text-white p-4">
        <nav className="flex justify-between">
          <div>
            <a href="#" className="mr-4">Home</a>
            <a href="#" className="mr-4">News</a>
            <a href="#" className="mr-4">Sports</a>
          </div>
          <div>
            <a href="#" className="mr-4">Login</a>
            <a href="#">Sign Up</a>
          </div>
        </nav>
      </header>

      <section className="w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/art/1600x900/15.webp')" }}>
      </section>

      <main className="container mx-auto p-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 p-4">
            <img src="https://static.photos/art/900x600/16.webp" alt="Article Image" className="mb-4"/>
            <h2 className="text-xl font-bold mb-2">Article Headline</h2>
            <p className="mb-4">This is a brief summary of the article. It provides a brief overview of the main points of the article.</p>
            <a href="#" className="bg-green-500 text-white px-4 py-2">Read More</a>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <img src="https://static.photos/art/900x600/17.webp" alt="Article Image" className="mb-4"/>
            <h2 className="text-xl font-bold mb-2">Article Headline</h2>
            <p className="mb-4">This is a brief summary of the article. It provides a brief overview of the main points of the article.</p>
            <a href="#" className="bg-green-500 text-white px-4 py-2">Read More</a>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <img src="https://static.photos/art/900x600/18.webp" alt="Article Image" className="mb-4"/>
            <h2 className="text-xl font-bold mb-2">Article Headline</h2>
            <p className="mb-4">This is a brief summary of the article. It provides a brief overview of the main points of the article.</p>
            <a href="#" className="bg-green-500 text-white px-4 py-2">Read More</a>
          </div>
        </div>
      </main>
    </>
  );
};

export default GeneratedComponent;