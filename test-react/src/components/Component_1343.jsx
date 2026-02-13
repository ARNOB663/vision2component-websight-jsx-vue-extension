import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-red-500 text-white">
      <header className="bg-red-800 p-4">
        <h1 className="text-2xl">Education and Training Institute</h1>
      </header>
      <main className="flex p-4">
        <section className="w-1/2">
          <h2 className="text-xl">About Us</h2>
          <p>
            At our education and training institute, we are committed to providing high-quality education and training to our students. Our experienced and dedicated faculty are committed to helping our students reach their full potential. We offer a wide range of programs and courses, catering to the diverse needs of our students.
          </p>
        </section>
        <aside className="w-1/2">
          <h2 className="text-xl">Our Programs</h2>
          <ul>
            <li>Program 1</li>
            <li>Program 2</li>
            <li>Program 3</li>
          </ul>
        </aside>
      </main>
      <footer className="bg-red-800 p-4">
        <h2 className="text-xl">Contact Us</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="w-full" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="w-full" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" className="w-full" />
          <button type="submit" className="bg-red-500 text-white p-2">Submit</button>
        </form>
      </footer>
    </div>
  );
};

export default GeneratedComponent;