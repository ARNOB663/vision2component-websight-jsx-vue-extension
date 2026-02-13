import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="flex justify-center items-center h-24 bg-indigo-500 text-white">
        <h1 className="text-2xl">Travel Agency</h1>
      </header>

      <main className="container mx-auto p-4">
        <section className="flex flex-col md:flex-row items-center justify-around my-8">
          <div className="w-full md:w-1/2 p-4">
            <img src="https://static.photos/business/900x600/129.webp" alt="Beach" className="w-full" />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl mb-2">Beach Destinations</h2>
            <p className="mb-4">Experience the best beaches in the world. From sunny paradises to serene coves, our beach destinations offer a perfect escape from the hustle and bustle of city life.</p>
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </section>

        {/* Repeat the above section for each travel destination */}
      </main>

      <footer className="bg-indigo-500 text-white text-center py-4">
        <p>© 2022 Travel Agency. All rights reserved.</p>
      </footer>
    </>
  );
};

export default GeneratedComponent;