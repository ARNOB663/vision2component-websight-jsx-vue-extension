import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-cover bg-center h-64" style={{ backgroundImage: "url('https://static.photos/business/1600x900/35.webp')" }}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src="https://static.photos/business/300x300/36.webp" alt="Logo" className="w-10 h-10" />
            <span className="ml-3 text-xl">Food Blog</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#" className="mr-5 text-white">Home</a>
            <a href="#" className="mr-5 text-white">About</a>
            <a href="#" className="mr-5 text-white">Contact</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-5 py-6 flex flex-col md:flex-row">
        <section className="w-full md:w-2/3 flex flex-col items-start">
          <h2 className="text-3xl mb-4">Blog Posts</h2>
          {/* Blog posts go here */}
        </section>
        <aside className="w-full md:w-1/3 flex flex-col items-start mt-6 md:mt-0">
          <h2 className="text-3xl mb-4">Recent News</h2>
          {/* Recent news goes here */}
          <h2 className="text-3xl mb-4 mt-6">Archives</h2>
          {/* Archives go here */}
        </aside>
      </main>
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© 2022 Food Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;