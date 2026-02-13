import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-red-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="https://picsum.photos/seed/75/300/300" alt="Logo" />
          <button className="bg-white text-red-500 px-4 py-2 rounded">Donate Now</button>
        </div>
      </header>

      <nav className="bg-red-300 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <a href="#">Mission</a>
          <a href="#">News</a>
          <a href="#">Donate</a>
        </div>
      </nav>

      <main className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <section className="w-full md:w-1/3 p-4">
            <h2 className="text-2xl mb-4">Mission</h2>
            <p>Our mission is to provide a platform for individuals to share their stories and experiences. We believe that every person has a unique story to tell, and we are committed to helping them tell theirs.</p>
          </section>

          <section className="w-full md:w-1/3 p-4">
            <h2 className="text-2xl mb-4">News</h2>
            <p>Stay updated with our latest news. We are always working to improve our platform and provide the best possible service to our users.</p>
          </section>

          <section className="w-full md:w-1/3 p-4">
            <h2 className="text-2xl mb-4">Donate</h2>
            <p>Help us continue our mission. Every donation, no matter how small, makes a difference.</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default GeneratedComponent;