import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://picsum.photos/1600/900')" }}>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Non-Profit Organization</span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a href="#mission" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Mission
              </a>
              <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="mission" className="my-8">
          <h2 className="text-3xl">Our Mission</h2>
          <p className="my-4">
            At Non-Profit Organization, we believe in the power of love and kindness. We are a community of people who are dedicated to helping each other. We believe that everyone deserves a chance to live a happy and fulfilling life, and we are here to make that a reality.
          </p>
          <a href="#donate" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            Donate Now
          </a>
        </section>
      </main>

      <footer id="contact" className="bg-gray-800 text-white p-6">
        <p>
          Non-Profit Organization<br />
          123 Main St<br />
          City, State 12345<br />
          Phone: (123) 456-7890<br />
          Email: info@nonprofit.org
        </p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;