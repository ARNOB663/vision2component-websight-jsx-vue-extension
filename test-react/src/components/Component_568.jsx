import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-white p-4">
        <img src="https://static.photos/education/300x300/170.webp" alt="Logo" className="h-8" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#programs" className="text-green-500 hover:text-green-700">Programs</a></li>
            <li><a href="#admissions" className="text-green-500 hover:text-green-700">Admissions</a></li>
            <li><a href="#contact" className="text-green-500 hover:text-green-700">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <section className="relative">
        <img src="https://static.photos/education/900x600/171.webp" alt="Campus" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl text-white">Welcome to Our Education Institution</h1>
        </div>
      </section>

      <main className="container mx-auto p-4">
        <section id="programs" className="my-8">
          <h2 className="text-2xl">Programs</h2>
          <p className="my-4">At our institution, we offer a wide range of programs designed to meet the needs of our students. Our programs are flexible and can be tailored to meet the individual needs of each student.</p>
        </section>

        <section id="admissions" className="my-8">
          <h2 className="text-2xl">Admissions</h2>
          <p className="my-4">We are currently accepting applications for the upcoming academic year. Please visit our admissions page for more information and to apply.</p>
        </section>

        <section id="contact" className="my-8">
          <h2 className="text-2xl">Contact Us</h2>
          <p className="my-4">We would love to hear from you. Please use our contact form to get in touch with us.</p>
        </section>
      </main>
    </>
  );
};

export default GeneratedComponent;