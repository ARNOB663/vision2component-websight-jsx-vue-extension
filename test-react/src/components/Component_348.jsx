import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <header className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/348/1600/900')" }}>
        <nav className="flex items-center justify-between flex-wrap bg-green-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Construction Company</span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Services
              </a>
              <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div className="flex flex-wrap">
        <aside className="w-full lg:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-2">123 Main St</p>
          <p className="mb-2">Anytown, USA 12345</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p className="mb-2">Email: info@constructioncompany.com</p>
        </aside>

        <main className="w-full lg:w-2/3 p-4">
          <h1 className="text-3xl font-bold mb-4">Welcome to Construction Company</h1>
          <p className="mb-4">
            At Construction Company, we are committed to providing our clients with the highest quality construction services. Our team of experienced professionals is dedicated to ensuring that every project is completed on time, within budget, and to the highest standards of safety and quality.
          </p>
          <p className="mb-4">
            We specialize in a wide range of construction projects, including residential, commercial, and industrial. Whether you are looking for a new home, a commercial building, or industrial facilities, we have the expertise and resources to get the job done right.
          </p>
          <p className="mb-4">
            We believe in building relationships with our clients, and we strive to provide exceptional service that exceeds their expectations. Whether you are a seasoned contractor or a first-time client, we are here to help you every step of the way.
          </p>
        </main>
      </div>
    </>
  );
};

export default GeneratedComponent;