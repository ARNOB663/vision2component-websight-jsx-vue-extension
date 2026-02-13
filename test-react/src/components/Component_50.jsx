import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-white">
      <header className="bg-gray-500 text-white p-4 flex justify-center">
        <img src="https://picsum.photos/seed/50/300/300" alt="Logo" />
      </header>
      <nav className="bg-gray-300 p-4 flex justify-center space-x-4">
        <a href="#programs" className="text-white">Programs</a>
        <a href="#faculty" className="text-white">Faculty</a>
        <a href="#research" className="text-white">Research</a>
        <a href="#testimonials" className="text-white">Testimonials</a>
      </nav>
      <main className="p-4">
        <section id="programs" className="my-4">
          <h2 className="text-2xl">Programs</h2>
          <p>We offer a variety of programs designed to meet the needs of our students.</p>
        </section>
        <section id="faculty" className="my-4">
          <h2 className="text-2xl">Faculty</h2>
          <p>Our faculty is composed of experienced and qualified professionals.</p>
        </section>
        <section id="research" className="my-4">
          <h2 className="text-2xl">Research</h2>
          <p>We are committed to conducting cutting-edge research in our field.</p>
        </section>
        <section id="testimonials" className="my-4">
          <h2 className="text-2xl">Testimonials</h2>
          <p>Hear what our students have to say about their experience.</p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;