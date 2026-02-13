import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Logo</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Programs
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Departments
            </a>
          </div>
        </div>
      </nav>

      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://picsum.photos/seed/153/900/600"/>
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Our Educational Institution</h1>
            <p className="mb-8 leading-relaxed">At our institution, we are committed to providing a high-quality education that prepares students for success in their chosen fields. Our experienced faculty and state-of-the-art facilities ensure that our students receive the best possible education. We offer a wide range of programs and departments, each designed to meet the unique needs of our students.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Apply Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { GeneratedComponent };