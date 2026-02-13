import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans leading-normal tracking-normal">
      <header className="flex items-center justify-between bg-white border-b-2 border-gray-200 p-4">
        <img src="https://picsum.photos/seed/89/300/300" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex">
            <li className="mr-6">
              <a href="#" className="text-yellow-500 hover:text-yellow-800">Home</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-yellow-500 hover:text-yellow-800">Services</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-yellow-500 hover:text-yellow-800">Projects</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-yellow-500 hover:text-yellow-800">Testimonials</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <section className="my-8">
          <h2 className="text-2xl">Our Services</h2>
          {/* Add your services here */}
        </section>
        <section className="my-8">
          <h2 className="text-2xl">Completed Projects</h2>
          {/* Add your projects here */}
        </section>
        <section className="my-8">
          <h2 className="text-2xl">Client Testimonials</h2>
          {/* Add your testimonials here */}
        </section>
      </main>
      <footer className="bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full">
        © 2022 Construction Company
      </footer>
    </div>
  );
};

export default GeneratedComponent;