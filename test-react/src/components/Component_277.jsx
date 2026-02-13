import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-green-500 text-white p-4">
        <h1 className="text-3xl font-bold">Educational Institution</h1>
        <p className="text-lg">We are a leading institution in the field of education.</p>
      </header>

      <nav className="bg-white p-4">
        <ul className="flex space-x-4">
          <li><a href="#programs" className="text-green-500 hover:text-green-700">Programs</a></li>
          <li><a href="#faculty" className="text-green-500 hover:text-green-700">Faculty</a></li>
          <li><a href="#student-life" className="text-green-500 hover:text-green-700">Student Life</a></li>
        </ul>
      </nav>

      <main className="p-4">
        <section id="programs" className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Programs</h2>
          <p>We offer a variety of programs designed to meet the needs of our students.</p>
        </section>

        <section id="faculty" className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Faculty</h2>
          <p>Our faculty is composed of highly qualified and experienced professionals.</p>
        </section>

        <section id="student-life">
          <h2 className="text-2xl font-bold mb-2">Student Life</h2>
          <p>We believe in providing a supportive and engaging environment for our students.</p>
        </section>

        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
          Apply Now
        </button>
      </main>
    </div>
  );
};

export default GeneratedComponent;