import React from 'react';

const GeneratedComponent = () => {
  return (
    <div>
      <div className="parallax" style={{ backgroundImage: "url('https://static.photos/travel/1600x900/16.webp')" }}>
        <div className="text-center pt-16">
          <h1 className="text-4xl text-white">Welcome to our Travel Agency</h1>
          <p className="text-xl text-white">We are a travel agency that specializes in creating unforgettable experiences for our clients.</p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="w-1/2">
          <div className="section">
            <h2 className="text-2xl">Section 1</h2>
            <p>This is the first section of our website.</p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Call to Action
            </button>
          </div>

          <div className="section">
            <h2 className="text-2xl">Section 2</h2>
            <p>This is the second section of our website.</p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Call to Action
            </button>
          </div>

          <div className="section">
            <h2 className="text-2xl">Section 3</h2>
            <p>This is the third section of our website.</p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Call to Action
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="w-1/2">
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
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;