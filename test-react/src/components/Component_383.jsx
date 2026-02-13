import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-red-500 text-white p-4">
        <img src="https://picsum.photos/seed/383/900/600" alt="Students" className="w-full" />
        <nav className="flex justify-center space-x-4 mt-4">
          <a href="#courses" className="hover:underline">Courses</a>
          <a href="#calendar" className="hover:underline">Academic Calendar</a>
          <a href="#achievements" className="hover:underline">Notable Achievements</a>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <section id="courses" className="my-8">
          <h2 className="text-2xl mb-4">Courses</h2>
          <p className="mb-4">Here is some information about the courses offered at our educational institution.</p>
        </section>
        <section id="calendar" className="my-8">
          <h2 className="text-2xl mb-4">Academic Calendar</h2>
          <p className="mb-4">Here is the academic calendar for our educational institution.</p>
        </section>
        <section id="achievements" className="my-8">
          <h2 className="text-2xl mb-4">Notable Achievements</h2>
          <p className="mb-4">Here are some of the notable achievements of our educational institution.</p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;