import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white shadow">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="https://picsum.photos/seed/161/300/300" alt="Logo" className="w-10 h-10" />
            <span className="ml-3 text-xl">Media Company</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#" className="mr-5 hover:text-gray-900">News</a>
            <a href="#" className="mr-5 hover:text-gray-900">Videos</a>
            <a href="#" className="mr-5 hover:text-gray-900">About</a>
            <a href="#" className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto px-5 py-24">
          <h1 className="text-3xl font-bold mb-4">Latest News and Videos</h1>
          {/* Add your news and video content here */}
        </div>
      </main>
      <footer className="bg-white">
        <div className="container mx-auto px-5 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2022 Media Company</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900">Facebook</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { GeneratedComponent };