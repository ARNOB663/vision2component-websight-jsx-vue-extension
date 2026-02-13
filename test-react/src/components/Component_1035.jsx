import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="flex">
        <div className="w-1/4 p-10">
          <img src="https://static.photos/fashion/300x300/37.webp" alt="Logo" className="h-16" />
        </div>
        <div className="w-3/4 p-10">
          <nav className="flex flex-col">
            <a href="#section1" className="text-purple-500 py-2 border-b border-gray-300">Section 1</a>
            <a href="#section2" className="text-purple-500 py-2 border-b border-gray-300">Section 2</a>
            <a href="#section3" className="text-purple-500 py-2 border-b border-gray-300">Section 3</a>
          </nav>
        </div>
      </div>
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/fashion/1600x900/36.webp')" }}>
        <section id="section1" className="py-20">
          <h2 className="text-4xl text-center">Section 1</h2>
          <p className="text-center">This is the first section of our fashion brand.</p>
          <img src="https://static.photos/fashion/900x600/38.webp" alt="Section 1 Image" className="mx-auto my-10" />
        </section>
        <section id="section2" className="py-20">
          <h2 className="text-4xl text-center">Section 2</h2>
          <p className="text-center">This is the second section of our fashion brand.</p>
          <img src="https://static.photos/fashion/900x600/39.webp" alt="Section 2 Image" className="mx-auto my-10" />
        </section>
        <section id="section3" className="py-20">
          <h2 className="text-4xl text-center">Section 3</h2>
          <p className="text-center">This is the third section of our fashion brand.</p>
          <img src="https://static.photos/fashion/900x600/40.webp" alt="Section 3 Image" className="mx-auto my-10" />
        </section>
      </div>
    </div>
  );
};

export default GeneratedComponent;