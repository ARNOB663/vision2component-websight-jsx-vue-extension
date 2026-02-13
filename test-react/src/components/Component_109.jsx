import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://picsum.photos/seed/109/1600/900')" }}>
        <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Healthcare Clinic</span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Services
              </a>
              <a href="#doctors" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Doctors
              </a>
              <a href="#testimonials" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Testimonials
              </a>
            </div>
          </div>
        </nav>
        <div className="text-center pt-20">
          <h1 className="text-4xl text-white font-bold leading-tight">Welcome to Healthcare Clinic</h1>
          <p className="text-2xl text-white">We provide the best healthcare services in the city.</p>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-10">
            Book an Appointment
          </button>
        </div>
      </header>

      <section id="services" className="py-10">
        <h2 className="text-3xl text-center">Our Services</h2>
        {/* Add your services here */}
      </section>

      <section id="doctors" className="py-10">
        <h2 className="text-3xl text-center">Our Doctors</h2>
        {/* Add your doctors here */}
      </section>

      <section id="testimonials" className="py-10">
        <h2 className="text-3xl text-center">Testimonials</h2>
        {/* Add your testimonials here */}
      </section>

      <footer className="bg-gray-800 text-white text-center py-10">
        <p>Contact us: 123-456-7890</p>
        <p>Follow us on social media:</p>
        {/* Add your social media links here */}
      </footer>
    </>
  );
};

export default GeneratedComponent;