import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Education Institution</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#admissions" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Admissions
            </a>
            <a href="#course-offerings" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Course Offerings
            </a>
            <a href="#student-life" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Student Life
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl text-center my-8">Welcome to Education Institution</h1>
        <p className="text-lg text-center">
          At Education Institution, we are committed to providing a high-quality education that prepares students for success in their chosen field. Our experienced faculty, state-of-the-art facilities, and comprehensive curriculum ensure that our students are well-equipped to succeed in the rapidly changing world of technology and business.
        </p>

        <h2 id="admissions" className="text-2xl my-6">Admissions</h2>
        <p className="text-lg">
          We offer a wide range of programs to suit the needs of our students. Whether you are interested in a bachelor's degree, a master's degree, or a certificate program, we have something for you. Our admissions team is here to help you every step of the way.
        </p>

        <h2 id="course-offerings" className="text-2xl my-6">Course Offerings</h2>
        <p className="text-lg">
          At Education Institution, we offer a wide range of courses in various fields. Our faculty are experts in their respective fields and are committed to providing a high-quality education.
        </p>

        <h2 id="student-life" className="text-2xl my-6">Student Life</h2>
        <p className="text-lg">
          At Education Institution, we believe in a holistic education that includes not only academic excellence but also personal and social development. Our campus is vibrant, diverse, and filled with opportunities for students to explore their passions and develop their skills.
        </p>
      </div>
    </div>
  );
};

export default GeneratedComponent;