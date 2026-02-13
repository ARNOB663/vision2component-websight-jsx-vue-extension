import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/people/1600x900/47.webp')" }}>
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between p-6">
          <img src="https://static.photos/people/300x300/48.webp" alt="Logo" />
          <nav>
            <a href="#" className="mr-6">Home</a>
            <a href="#" className="mr-6">About</a>
            <a href="#" className="mr-6">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section className="mb-6">
          <h1 className="text-4xl mb-2">Welcome to Our Nonprofit Organization</h1>
          <p className="text-xl mb-4">We are a community-driven organization dedicated to making a difference in the world.</p>
          <a href="#" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Donate Now</a>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl mb-2">Our Programs</h2>
          {/* Add your accordion or tabs here */}
        </section>

        <section className="mb-6">
          <h2 className="text-2xl mb-2">Our Impact</h2>
          {/* Add your accordion or tabs here */}
        </section>

        <section className="mb-6">
          <h2 className="text-2xl mb-2">Success Stories</h2>
          {/* Add your accordion or tabs here */}
        </section>
      </main>

      <aside className="container mx-auto p-6">
        <h2 className="text-2xl mb-2">Recent News</h2>
        {/* Add your news here */}

        <h2 className="text-2xl mb-2">Upcoming Events</h2>
        {/* Add your events here */}

        <h2 className="text-2xl mb-2">Ways to Help</h2>
        {/* Add your ways to help here */}
      </aside>

      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto">
          <p>Contact us at info@nonprofit.org</p>
          <a href="#" className="text-pink-300">Donate</a>
          {/* Add your social media links here */}
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;