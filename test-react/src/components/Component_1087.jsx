import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="flex items-center justify-between bg-white p-4">
        <img src="https://static.photos/art/300x300/89.webp" alt="Logo" className="h-10" />
        <div className="md:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center p-5">
        <img src="https://static.photos/art/900x600/90.webp" alt="Interior Design" className="w-full h-64 object-cover" />
        <h1 className="text-3xl my-5">Welcome to Our Interior Design Firm</h1>
        <p className="text-lg">
          At our interior design firm, we specialize in creating beautiful, functional spaces that reflect the individuality and style of each client. Our team of experienced designers work closely with clients to understand their needs and preferences, and then create a design that is both aesthetically pleasing and practical. We believe that a well-designed space can enhance a person's comfort, productivity, and overall quality of life.
        </p>
      </main>
      <footer className="bg-white p-4">
        <ul className="flex justify-center">
          <li className="mx-2">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Design Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Testimonials
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default GeneratedComponent;