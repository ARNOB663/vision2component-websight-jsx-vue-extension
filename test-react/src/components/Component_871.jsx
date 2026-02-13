import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-white text-center">
        <h1 className="text-5xl p-5">Welcome to Our Educational Institution</h1>
        <p className="text-xl p-5">We are a premier institution dedicated to providing high-quality education to our students.</p>
      </header>

      <nav className="bg-yellow-500 text-white p-4">
        <ul className="flex justify-center space-x-8">
          <li><a href="#">Academic Calendar</a></li>
          <li><a href="#">Student Services</a></li>
          <li>
            <form>
              <input type="text" placeholder="Search..." className="border border-gray-300 px-4 py-2 rounded" />
            </form>
          </li>
        </ul>
      </nav>

      <main className="flex flex-col items-center p-5 space-y-5">
        <section>
          <h2 className="text-3xl">About Us</h2>
          <p className="text-lg">Our institution is committed to providing a rigorous academic experience that prepares students for success in college and beyond.</p>
        </section>

        <section>
          <h2 className="text-3xl">Our Faculty</h2>
          <p className="text-lg">Our faculty is composed of highly qualified and experienced professionals who are dedicated to providing a stimulating and supportive learning environment.</p>
        </section>
      </main>

      <footer className="bg-yellow-500 text-white p-4">
        <ul className="flex justify-center space-x-8">
          <li><a href="#">Tuition Information</a></li>
          <li><a href="#">Newsletter Signup</a></li>
          <li><a href="#">Campus Maps</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default GeneratedComponent;