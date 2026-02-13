import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style={{ backgroundImage: 'url("https://static.photos/art/1600x900/100.webp")' }}>
      <header className="bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="https://static.photos/art/300x300/101.webp" alt="Logo" />
            <span className="ml-3 text-xl">Creative Agency</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#section1" className="mr-5 hover:text-gray-900">Section 1</a>
            <a href="#section2" className="mr-5 hover:text-gray-900">Section 2</a>
            <a href="#section3" className="mr-5 hover:text-gray-900">Section 3</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="section1" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-10 text-center">Section 1</h2>
            {/* Add your content here */}
          </div>
        </section>

        <section id="section2" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-10 text-center">Section 2</h2>
            {/* Add your content here */}
          </div>
        </section>

        <section id="section3" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-10 text-center">Section 3</h2>
            {/* Add your content here */}
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="container mx-auto px-4 pt-10 pb-6">
          <p className="text-sm text-center">© 2022 Creative Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;