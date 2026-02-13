import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <img src="https://static.photos/education/300x300/16.webp" alt="Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#departments" className="text-gray-600 hover:text-gray-900">Departments</a></li>
            <li><a href="#admissions" className="text-gray-600 hover:text-gray-900">Admissions</a></li>
            <li><a href="#student-resources" className="text-gray-600 hover:text-gray-900">Student Resources</a></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-screen-lg mx-auto p-4">
        <section id="departments" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Departments</h2>
          <p className="text-gray-600">At our institution, we offer a wide range of departments. Our faculty is highly qualified and experienced, and our programs are designed to prepare students for a successful career in their chosen field.</p>
        </section>

        <section id="admissions" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Admissions</h2>
          <p className="text-gray-600">We are committed to providing a high-quality education to our students. We accept students of all backgrounds and abilities, and we offer a variety of admissions packages to fit your needs.</p>
        </section>

        <section id="student-resources" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Student Resources</h2>
          <p className="text-gray-600">We understand the importance of student success. That's why we provide a range of resources to help our students succeed. These resources include academic support, career guidance, and more.</p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;