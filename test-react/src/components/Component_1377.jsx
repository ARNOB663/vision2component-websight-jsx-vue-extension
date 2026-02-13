import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans leading-normal tracking-normal">
      <header className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/people/1600x900/178.webp')" }}>
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-between">
            <li><a href="#campaigns" className="text-white">Campaigns</a></li>
            <li><a href="#stories" className="text-white">Stories</a></li>
            <li><a href="#volunteer" className="text-white">Volunteer</a></li>
            <li><a href="#donate" className="text-white">Donate</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-4">
        <section id="campaigns" className="my-8">
          <h2 className="text-2xl">Our Campaigns</h2>
          {/* Campaigns content here */}
        </section>

        <section id="stories" className="my-8">
          <h2 className="text-2xl">Stories</h2>
          <div className="flex justify-between">
            {/* Stories content here */}
          </div>
        </section>

        <section id="volunteer" className="my-8">
          <h2 className="text-2xl">Volunteer Opportunities</h2>
          <div className="flex justify-between">
            {/* Volunteer opportunities content here */}
          </div>
        </section>

        <section id="donate" className="my-8">
          <h2 className="text-2xl">Donate</h2>
          {/* Donate content here */}
        </section>
      </main>

      <footer className="container mx-auto px-6 py-4 bg-gray-800 text-white">
        {/* Footer content here */}
      </footer>
    </div>
  );
};

export default GeneratedComponent;