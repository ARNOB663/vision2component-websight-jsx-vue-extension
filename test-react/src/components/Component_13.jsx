import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-white">
      <header className="bg-red-500 text-white p-4">
        <h1 className="text-2xl font-bold">Software Development Company</h1>
        <nav className="mt-4">
          <a href="#home" className="mr-4">Home</a>
          <a href="#about" className="mr-4">About</a>
          <a href="#contact" className="mr-4">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="py-10">
          <h2 className="text-3xl font-bold mb-4">Welcome to Our Software Development Company</h2>
          <p className="text-lg mb-4">We specialize in developing innovative software solutions.</p>
          <a href="#contact" className="bg-red-500 text-white px-4 py-2 rounded">Contact Us</a>
        </section>

        <section id="about" className="py-10">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-4">We are a team of experienced software developers.</p>
        </section>

        <section id="contact" className="py-10">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">Get in touch with us today.</p>
          <form>
            <input type="text" placeholder="Your name" className="border p-2 mb-4"/>
            <input type="email" placeholder="Your email" className="border p-2 mb-4"/>
            <textarea placeholder="Your message" className="border p-2 mb-4"/>
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">Send</button>
          </form>
        </section>
      </main>

      <footer className="bg-red-500 text-white p-4 text-center">
        <p>&copy; 2022 Software Development Company</p>
      </footer>
    </div>
  );
};

export { GeneratedComponent };