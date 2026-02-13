import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="fixed w-full bg-white">
        <div className="container mx-auto flex flex-col p-5 md:flex-row items-center">
          <div className="flex flex-1 flex-col">
            <div className="text-gray-900 font-bold text-2xl">Interior Design</div>
            <div className="text-gray-600">Your tagline here</div>
          </div>
          <nav className="flex flex-1 justify-end">
            <ul className="list-reset flex flex-1 justify-end items-center">
              <li className="mr-3">
                <a className="inline-block py-2 px-4 text-gray-800 font-bold no-underline" href="#">Home</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-gray-800 no-underline hover:text-gray-500 hover:text-underline py-2 px-4" href="#">About</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-gray-800 no-underline hover:text-gray-500 hover:text-underline py-2 px-4" href="#">Services</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-gray-800 no-underline hover:text-gray-500 hover:text-underline py-2 px-4" href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="h-screen">
        <div className="container mx-auto h-full flex items-center">
          <h1 className="text-5xl">Welcome to Interior Design</h1>
        </div>
      </section>
      {/* Add more sections as per your requirements */}
    </>
  );
};

export default GeneratedComponent;