import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-purple-700 text-white p-4">
        <h1 className="text-2xl font-bold">Hospital Name</h1>
      </header>
      <main className="flex flex-col md:flex-row">
        <aside className="bg-purple-200 w-full md:w-1/4 p-4">
          <nav>
            <ul>
              <li><a href="#" className="text-purple-700 hover:text-purple-900">Department 1</a></li>
              <li><a href="#" className="text-purple-700 hover:text-purple-900">Department 2</a></li>
              <li><a href="#" className="text-purple-700 hover:text-purple-900">Department 3</a></li>
            </ul>
          </nav>
        </aside>
        <section className="flex-1 p-4">
          <h2 className="text-xl font-bold">Welcome to our Hospital</h2>
          <p className="my-4">
            At our hospital, we are committed to providing the highest quality of care to our patients. Our experienced and compassionate staff are dedicated to ensuring that you receive the best possible treatment, no matter what your condition. We offer a wide range of services, from emergency care to specialty care, and everything in between. Our state-of-the-art facilities and advanced technology ensure that we can meet the needs of our patients, no matter where they are located.
          </p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Book an Appointment
          </button>
        </section>
      </main>
      <footer className="bg-purple-700 text-white p-4">
        <p>© 2022 Hospital Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;