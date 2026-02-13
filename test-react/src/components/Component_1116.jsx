import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-purple-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Education Institute</h1>
        <button className="bg-white text-purple-500 px-4 py-2 rounded">Apply Now</button>
      </header>

      <nav className="bg-white p-4">
        <ul className="flex space-x-4">
          <li><a href="#programs" className="text-purple-500 hover:underline">Programs</a></li>
          <li><a href="#deadlines" className="text-purple-500 hover:underline">Application Deadlines</a></li>
          <li><a href="#resources" className="text-purple-500 hover:underline">Student Resources</a></li>
        </ul>
      </nav>

      <main className="p-4">
        <section id="programs">
          <h2 className="text-xl font-bold mb-2">Our Programs</h2>
          <p className="mb-4">At our education institute, we offer a variety of programs designed to meet the needs of our students. Whether you're interested in a bachelor's degree, a master's degree, or a certificate program, we have something for you.</p>
          <img src="https://static.photos/education/900x600/118.webp" alt="Education"/>
        </section>

        <section id="deadlines">
          <h2 className="text-xl font-bold mb-2">Application Deadlines</h2>
          <p className="mb-4">We understand the importance of deadlines, which is why we provide you with all the necessary information about our application deadlines.</p>
          <img src="https://static.photos/education/900x600/119.webp" alt="Deadline"/>
        </section>

        <section id="resources">
          <h2 className="text-xl font-bold mb-2">Student Resources</h2>
          <p className="mb-4">We provide a variety of resources to help our students succeed. These resources include study materials, tutoring services, and more.</p>
          <img src="https://static.photos/education/900x600/120.webp" alt="Study"/>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;