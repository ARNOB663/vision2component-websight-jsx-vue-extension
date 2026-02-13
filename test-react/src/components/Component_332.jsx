import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-full h-64 bg-center bg-cover" style={{ backgroundImage: "url('https://picsum.photos/seed/332/1600/900')" }} />
      <nav className="fixed bottom-0 w-full bg-white shadow-md">
        <ul className="flex justify-around py-4">
          <li><a href="#programs" className="text-blue-500 hover:text-blue-700">Programs</a></li>
          <li><a href="#faculty" className="text-blue-500 hover:text-blue-700">Faculty</a></li>
          <li><a href="#student-life" className="text-blue-500 hover:text-blue-700">Student Life</a></li>
          <li><a href="#admissions" className="text-blue-500 hover:text-blue-700">Admissions</a></li>
        </ul>
      </nav>
      <div id="programs" className="p-4">
        <h1 className="text-2xl font-bold mb-4">Programs</h1>
        <p>Our programs are designed to provide students with a comprehensive education in the field of their choice. We offer a variety of programs in various disciplines, including but not limited to, science, technology, engineering, and mathematics.</p>
      </div>
      <div id="faculty" className="p-4">
        <h1 className="text-2xl font-bold mb-4">Faculty</h1>
        <p>Our faculty is composed of highly qualified and experienced professionals who are dedicated to providing the best possible education to our students. Our faculty members are experts in their respective fields and are committed to helping students reach their full potential.</p>
      </div>
      <div id="student-life" className="p-4">
        <h1 className="text-2xl font-bold mb-4">Student Life</h1>
        <p>At our institution, we believe that a well-rounded education is not just about academic excellence, but also about fostering a sense of community and personal growth. We offer a variety of extracurricular activities and events that allow our students to explore their interests and develop their skills.</p>
      </div>
      <div id="admissions" className="p-4">
        <h1 className="text-2xl font-bold mb-4">Admissions</h1>
        <p>We are always looking for talented and motivated students to join our community. If you are interested in learning more about our programs and admissions process, please contact us.</p>
      </div>
    </div>
  );
};

export { GeneratedComponent };