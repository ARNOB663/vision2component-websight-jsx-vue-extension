import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Nonprofit Organization</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#donate" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Donate
            </a>
            <a href="#volunteer" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Volunteer
            </a>
            <a href="#get-involved" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Get Involved
            </a>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Nonprofit Organization</h1>
        <p className="mb-4">
          At Nonprofit Organization, we believe in the power of social causes. We are a nonprofit organization dedicated to making a positive impact in our community. We believe in the power of social causes, and we are committed to using our skills and resources to make a difference.
        </p>
        {/* Add your hero image here */}
        <img src="https://picsum.photos/1200/400?random" alt="Hero Image" className="w-full h-auto mb-8" />
        {/* Add your 'Donate', 'Volunteer', and 'Get Involved' sections here */}
        <section id="donate" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Donate</h2>
          <p>Join us in supporting our mission by donating today.</p>
        </section>
        <section id="volunteer" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Volunteer</h2>
          <p>Help us achieve our goals by volunteering your time and skills.</p>
        </section>
        <section id="get-involved" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
          <p>Find out how you can get involved in our community initiatives.</p>
        </section>
      </main>
    </div>
  );
};

export default GeneratedComponent;