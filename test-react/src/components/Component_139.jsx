import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="bg-center bg-cover bg-no-repeat bg-gray-800 text-white" style={{ backgroundImage: "url('https://picsum.photos/seed/139/1600/900')" }}>
        <div className="container mx-auto flex flex-col px-5 py-5 md:flex-row">
          <div className="flex items-center justify-center md:justify-start">
            <h1 className="font-bold text-xl">Medical Clinic</h1>
          </div>
          <nav className="flex-col flex-grow pt-5 md:pt-0 md:flex-row md:justify-end md:space-x-2">
            <a className="hover:text-purple-200" href="#">Home</a>
            <a className="hover:text-purple-200" href="#">About</a>
            <a className="hover:text-purple-200" href="#">Services</a>
            <a className="hover:text-purple-200" href="#">Contact</a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto flex-1 px-5 py-5">
        <section>
          <h2 className="text-2xl">Welcome to Medical Clinic</h2>
          <p className="py-5">
            At Medical Clinic, we are committed to providing the highest quality of care to our patients. Our team of experienced doctors and staff are dedicated to providing compassionate, professional care that is both effective and efficient. We believe in the power of early detection and prevention, and we are committed to helping our patients maintain their health and well-being.
          </p>
        </section>
        {/* Add more sections as needed */}
      </main>
      <footer className="bg-gray-800 text-white text-center py-5">
        <p>&copy; 2022 Medical Clinic. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;