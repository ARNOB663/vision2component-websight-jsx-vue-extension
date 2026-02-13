import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white text-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Education Institution</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#degree-programs" className="mr-5 hover:text-gray-900">Degree Programs</a>
            <a href="#student-resources" className="mr-5 hover:text-gray-900">Student Resources</a>
            <a href="#campus-events" className="mr-5 hover:text-gray-900">Campus Events</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <section id="degree-programs" className="w-full md:w-1/2">
          <h2>Degree Programs</h2>
          <p>At our institution, we offer a wide range of degree programs. Our curriculum is designed to prepare students for a career in the 21st century.</p>
        </section>

        <section id="student-resources" className="w-full md:w-1/2">
          <h2>Student Resources</h2>
          <p>We provide a variety of resources to help our students succeed. These resources include tutoring, study guides, and online learning tools.</p>
        </section>

        <section id="campus-events" className="w-full md:w-1/2">
          <h2>Campus Events</h2>
          <p>We host a variety of events throughout the year. These events provide opportunities for students to engage with their peers and learn from industry professionals.</p>
        </section>
      </main>

      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6">
              <a href="#" className="text-gray-500 hover:text-gray-900">Home</a>
            </div>
            <div className="flex-1 mb-6">
              <a href="#" className="text-gray-500 hover:text-gray-900">About</a>
            </div>
            <div className="flex-1 mb-6">
              <a href="#" className="text-gray-500 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { GeneratedComponent };