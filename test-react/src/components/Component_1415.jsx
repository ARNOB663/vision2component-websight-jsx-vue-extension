import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Architecture Firm</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#portfolio" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Portfolio
            </a>
            <a href="#biographies" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Biographies
            </a>
          </div>
        </div>
      </nav>

      <section id="portfolio" className="py-8 px-4">
        <h2 className="text-2xl text-center">Portfolio</h2>
        <p className="text-center mt-4">
          At our firm, we specialize in creating unique and innovative designs that push the boundaries of what is possible. Our portfolio showcases a wide range of projects, from residential to commercial, from modern to traditional, and everything in between. Each project is a testament to our passion for design and our commitment to excellence.
        </p>
      </section>

      <section id="biographies" className="py-8 px-4">
        <h2 className="text-2xl text-center">Biographies</h2>
        <p className="text-center mt-4">
          Our team of architects is made up of some of the most talented and experienced professionals in the industry. Each member brings a unique perspective and a wealth of experience to the table, allowing us to create designs that are not only beautiful, but also functional and sustainable.
        </p>
      </section>
    </div>
  );
};

export default GeneratedComponent;