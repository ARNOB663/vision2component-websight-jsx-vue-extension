import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-purple-500 text-white p-4">
        <img src="https://picsum.photos/seed/224/900/600" alt="Education Image" className="w-full h-48 object-cover" />
        <h1 className="text-4xl font-bold mt-4">Welcome to Our Educational Institution</h1>
        <p className="text-xl mt-2">We provide the best education for your child. Join us today and start your journey to success.</p>
      </header>

      <nav className="bg-purple-600 text-white p-4">
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Courses</a></li>
          <li><a href="#" className="hover:underline">Admission</a></li>
          <li><a href="#" className="hover:underline">Newsletter</a></li>
        </ul>
      </nav>

      <main className="p-4">
        <section>
          <h2 className="text-2xl font-bold mb-2">Course Offerings</h2>
          <p>We offer a wide range of courses in various subjects. Browse through our course offerings and find the one that suits you best.</p>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Admission Information</h2>
          <p>We accept applications for our courses. Please fill out the application form and we will get back to you.</p>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Newsletter Sign-up</h2>
          <p>Sign up for our newsletter to stay updated with our latest news and events.</p>
        </section>
      </main>

      <footer className="bg-purple-700 text-white p-4">
        <p>Contact us: info@educationalinstitution.com</p>
        <p>Follow us on: Facebook, Twitter, Instagram</p>
        <p>Important dates: Application deadline, Open days, etc.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;