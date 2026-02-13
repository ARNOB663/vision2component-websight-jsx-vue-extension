import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-orange-500 text-black font-sans">
      <header className="flex justify-center items-center h-64 bg-black">
        <img src="https://static.photos/education/300x300/57.webp" alt="School Logo" className="h-32" />
      </header>

      <nav className="bg-black text-white p-4">
        <ul className="flex justify-center space-x-8">
          <li><a href="#programs">Academic Programs</a></li>
          <li><a href="#admission">Admission Information</a></li>
          <li><a href="#portal">Student Portal</a></li>
        </ul>
      </nav>

      <section id="programs" className="py-8 px-4">
        <h2 className="text-2xl text-center mb-4">Academic Programs</h2>
        <p className="text-center">At our institution, we offer a wide range of academic programs designed to meet the needs of our students. Our programs are designed to prepare students for success in college, the workforce, and life.</p>
      </section>

      <section id="admission" className="py-8 px-4 bg-orange-500 text-black">
        <h2 className="text-2xl text-center mb-4">Admission Information</h2>
        <p className="text-center">We are currently accepting applications for the upcoming academic year. Please visit our admission office for more information.</p>
      </section>

      <section id="portal" className="py-8 px-4">
        <h2 className="text-2xl text-center mb-4">Student Portal</h2>
        <p className="text-center">Our student portal is the hub for all things student-related. From course registration to financial aid, our portal is the go-to for all students.</p>
      </section>
    </div>
  );
};

export default GeneratedComponent;