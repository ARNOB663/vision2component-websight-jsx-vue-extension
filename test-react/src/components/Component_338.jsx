import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      {/* Top Banner */}
      <div className="w-full bg-gray-500 text-white p-4 mb-4">
        <h1 className="text-2xl font-bold">Popular Articles</h1>
        <p className="mt-2">
          Welcome to our online news site, where you can find the latest news, articles, and updates from around the world.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap -mx-4">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/4 px-4 mb-4">
          <div className="bg-white p-4">
            <h2 className="text-xl font-bold mb-2">Categories</h2>
            <ul>
              <li className="mb-1"><a href="#" className="text-gray-500 hover:text-gray-700">Sports</a></li>
              <li className="mb-1"><a href="#" className="text-gray-500 hover:text-gray-700">Politics</a></li>
              <li className="mb-1"><a href="#" className="text-gray-500 hover:text-gray-700">Technology</a></li>
            </ul>
          </div>
        </div>

        {/* Article Area */}
        <div className="w-full md:w-3/4 px-4 mb-4">
          <div className="bg-white p-4">
            <h2 className="text-xl font-bold mb-2">Latest Articles</h2>
            {/* Article 1 */}
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Article Title</h3>
              <p>Article summary goes here.</p>
            </div>
            {/* Article 2 */}
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Article Title</h3>
              <p>Article summary goes here.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-white p-4">
        <h2 className="text-xl font-bold mb-2">Latest News Updates</h2>
        {/* News Update 1 */}
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">News Update Title</h3>
          <p>News update summary goes here.</p>
        </div>
        {/* News Update 2 */}
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">News Update Title</h3>
          <p>News update summary goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;