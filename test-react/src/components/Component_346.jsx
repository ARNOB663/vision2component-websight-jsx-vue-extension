import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <nav className="bg-white px-6 py-4">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-indigo-500 hover:text-indigo-800">Home</a></li>
          <li><a href="#" className="text-indigo-500 hover:text-indigo-800">About</a></li>
          <li><a href="#" className="text-indigo-500 hover:text-indigo-800">Services</a></li>
          <li><a href="#" className="text-indigo-500 hover:text-indigo-800">Contact</a></li>
        </ul>
      </nav>

      <main className="max-w-screen-lg mx-auto p-6">
        <section className="my-8">
          <h1 className="text-3xl font-bold mb-4">Welcome to Our Software Development Firm</h1>
          <p className="text-lg">
            At our firm, we specialize in providing top-notch software development services. We are committed to delivering high-quality, reliable, and scalable solutions that meet the needs of our clients. Our team of experienced developers and designers work together to create innovative and effective software solutions. We are dedicated to staying at the forefront of the latest technologies and trends in the industry, ensuring our clients are always equipped with the most cutting-edge tools and techniques.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-700">
                We specialize in creating custom web applications that are tailored to meet the unique needs of our clients.
              </p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Mobile App Development</h3>
              <p className="text-gray-700">
                We have a strong track record of developing high-quality mobile applications for a variety of platforms.
              </p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Software Consulting</h3>
              <p className="text-gray-700">
                We offer comprehensive software consulting services to help our clients navigate the complexities of software development.
              </p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-700">
                We have a dedicated team of quality assurance professionals who ensure the highest standards of software quality.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;