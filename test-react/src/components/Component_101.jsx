import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-center">
        <img src="https://picsum.photos/seed/101/300/300" alt="Logo" className="h-16" />
      </header>

      <nav className="bg-pink-500 text-white p-4">
        <ul className="flex justify-center space-x-8">
          <li><a href="#admissions">Admissions</a></li>
          <li><a href="#academics">Academics</a></li>
          <li><a href="#student-life">Student Life</a></li>
        </ul>
      </nav>

      <main className="p-4">
        <section id="admissions" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Admissions</h2>
          <p className="mb-4">We are committed to providing a safe and supportive environment for all students. Our admissions process is designed to ensure that you are a good fit for our community.</p>
          <img src="https://picsum.photos/seed/101/900/600" alt="Admissions" className="my-4" />
        </section>

        <section id="academics" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Academics</h2>
          <p className="mb-4">At our institution, we offer a wide range of academic programs designed to prepare you for a successful career. Our faculty is highly qualified and experienced, and our curriculum is designed to meet the needs of industry.</p>
          <img src="https://picsum.photos/seed/101/900/600" alt="Academics" className="my-4" />
        </section>

        <section id="student-life" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Student Life</h2>
          <p className="mb-4">At our institution, we believe that a well-rounded education includes not only academic excellence, but also opportunities for personal and social growth. We offer a variety of clubs, organizations, and events to help you explore your interests and develop your skills.</p>
          <img src="https://picsum.photos/seed/101/900/600" alt="Student Life" className="my-4" />
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;