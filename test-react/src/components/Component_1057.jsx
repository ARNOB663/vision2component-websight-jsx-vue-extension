import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 flex items-center justify-center">
        <video className="w-3/4" controls>
          <source src="https://static.photos/education/900x600/59.webp" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-3/4">
          <h1 className="text-3xl mb-4">Register for our e-learning platform</h1>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="******************"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
          </form>
          <h2 className="text-2xl mb-4">Course Details</h2>
          <p className="text-gray-700 text-base">
            Our e-learning platform offers a wide range of courses in various fields. From programming languages to data science, our courses are designed to provide you with the knowledge and skills you need to succeed in your career.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;