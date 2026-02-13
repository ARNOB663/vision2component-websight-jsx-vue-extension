import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-center">
        <img src="https://static.photos/art/300x300/68.webp" alt="Logo" />
      </header>

      <nav className="bg-gray-500 text-white p-4">
        <ul className="flex justify-center space-x-4">
          <li><a href="#mission">Mission</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#get-involved">Get Involved</a></li>
        </ul>
      </nav>

      <main className="max-w-screen-lg mx-auto p-4">
        <section id="mission" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p>At our non-profit organization, we strive to make a difference in the world. We believe in the power of community and strive to create a world where everyone has the opportunity to thrive. We are committed to using our skills and resources to make a positive impact in our community and beyond.</p>
        </section>

        <section id="projects" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
          <p>We are currently working on several projects. These include:</p>
          <ul className="list-disc ml-8">
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </section>

        <section id="get-involved" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
          <p>We are always looking for volunteers to help us with our projects. If you are interested in getting involved, please contact us.</p>
        </section>
      </main>

      <footer className="bg-gray-500 text-white p-4 text-center">
        <p>© 2022 Non-Profit Organization</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;