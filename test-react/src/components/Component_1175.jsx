import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <img src="https://static.photos/people/300x300/177.webp" alt="Non-Profit Logo" className="w-1/2" />
        <h1 className="text-4xl font-bold text-center">Welcome to Our Non-Profit Organization</h1>
        <p className="text-center w-1/2">We are a non-profit organization dedicated to making a difference in the world. We believe in the power of community and strive to create a better world for all.</p>
      </div>
      <img src="https://static.photos/people/900x600/178.webp" alt="Banner Image" className="w-full" />
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <h2 className="text-3xl font-bold text-center">Volunteer Opportunities</h2>
        <p className="text-center w-1/2">We are always looking for volunteers to help us make a difference. Whether you're interested in helping with fundraising, organizing events, or spreading the word about our cause, we'd love to have you.</p>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Volunteer Now
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <h2 className="text-3xl font-bold text-center">Donate</h2>
        <p className="text-center w-1/2">Your donation will help us continue our work. Every little bit helps.</p>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
              Amount
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="text" placeholder="Amount" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Donate
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GeneratedComponent;