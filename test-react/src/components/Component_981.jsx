import React from 'react';

const GeneratedComponent = () => {
  return (
    <div>
      <header className="fixed w-full bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Art Gallery</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">Artists</a></li>
              <li><a href="#" className="hover:text-gray-400">Exhibitions</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto pt-32 pb-10">
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Welcome to our Art Gallery</h2>
          <p className="text-lg">
            At our Art Gallery, we celebrate the beauty of art and the diverse range of artists who create it. We believe that art is a universal language that connects people from all walks of life, and we are committed to showcasing the best of this diverse range of art.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Our Artists</h2>
          <p className="text-lg">
            Our artists come from all walks of life and all corners of the globe. They bring their unique perspectives and styles to our gallery, creating a vibrant and diverse collection of art.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-5">Upcoming Exhibitions</h2>
          <p className="text-lg">
            We regularly host exhibitions featuring the best of our collection. Check our website or social media for updates on our current and upcoming exhibitions.
          </p>
        </section>
      </main>

      <footer className="bg-gray-900 p-4 text-center">
        <p>&copy; 2022 Art Gallery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;