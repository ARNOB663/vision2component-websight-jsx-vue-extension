import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white text-center">
        <h1 className="text-5xl">Charity Organization</h1>
        <p className="text-xl">A warm and welcoming design with a prominent storytelling approach.</p>
      </header>

      <main className="flex flex-wrap">
        <section className="w-full md:w-1/2">
          <img src="https://static.photos/people/900x600/24.webp" alt="Charity Image" />
        </section>

        <section className="w-full md:w-1/2 flex items-center justify-center">
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Donate Now
          </button>
        </section>
      </main>

      <footer className="bg-white text-center">
        <h2 className="text-2xl">Our Mission</h2>
        <p className="text-lg">To provide aid and support to those in need, promoting social responsibility and helping to create a better world.</p>

        <h2 className="text-2xl">Testimonials</h2>
        <p className="text-lg">"Charity Organization has made a significant difference in my life. I couldn't imagine living without their help." - John Doe</p>

        <h2 className="text-2xl">Volunteer Form</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Submit
            </button>
          </div>
        </form>
      </footer>
    </div>
  );
};

export default GeneratedComponent;