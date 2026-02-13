import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="font-serif text-gray-800 bg-yellow-50">
      <header className="bg-brown-500 text-white p-4">
        <h1 className="text-4xl">Education Company</h1>
      </header>

      <main className="p-4">
        <section className="mb-4">
          <h2 className="text-2xl mb-2">Welcome to Education Company</h2>
          <p className="mb-4">
            At Education Company, we believe that education is the key to unlocking a brighter future. Our mission is to provide high-quality, affordable education to all who seek it. We offer a wide range of courses in various subjects, taught by experienced and dedicated faculty.
          </p>
          <img src="https://picsum.photos/seed/64/900/600" alt="Classroom" />
        </section>

        <section className="mb-4">
          <h2 className="text-2xl mb-2">Our Faculty</h2>
          <p className="mb-4">
            Our faculty is composed of some of the most qualified and experienced professionals in their respective fields. They are committed to providing the best possible education to our students.
          </p>
          {/* Faculty bios would go here */}
        </section>

        <section className="mb-4">
          <h2 className="text-2xl mb-2">Our Courses</h2>
          <p className="mb-4">
            We offer a wide range of courses in various subjects. Whether you're interested in science, technology, the arts, or business, we have something for you.
          </p>
          {/* Course modules would go here */}
        </section>
      </main>

      <footer className="bg-brown-500 text-white p-4">
        <p>© 2022 Education Company</p>
      </footer>
    </div>
  );
};

export { GeneratedComponent };