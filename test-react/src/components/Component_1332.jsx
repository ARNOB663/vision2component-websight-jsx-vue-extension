import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://static.photos/education/1600x900/133.webp')" }}>
        <div className="container mx-auto px-6 py-12">
          <img className="mx-auto mb-6" src="https://static.photos/education/300x300/134.webp" alt="Logo" />
          <nav className="flex justify-center">
            <a href="#programs" className="px-4">Programs</a>
            <a href="#faculty" className="px-4">Faculty</a>
            <a href="#testimonials" className="px-4">Testimonials</a>
          </nav>
        </div>
      </div>

      <section id="programs" className="container mx-auto px-6 py-12">
        <h2 className="text-3xl">Programs</h2>
        <p className="my-6">We offer a variety of programs designed to meet the needs of our students. From online courses to in-person classes, we have something for everyone.</p>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Apply Now</button>
      </section>

      <section id="faculty" className="container mx-auto px-6 py-12">
        <h2 className="text-3xl">Faculty</h2>
        <p className="my-6">Our faculty is composed of experienced professionals who are dedicated to providing the best education possible.</p>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Meet Our Faculty</button>
      </section>

      <section id="testimonials" className="container mx-auto px-6 py-12">
        <h2 className="text-3xl">Testimonials</h2>
        <p className="my-6">Hear what our students have to say about their experience at our institute.</p>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Read Testimonials</button>
      </section>
    </>
  );
};

export default GeneratedComponent;