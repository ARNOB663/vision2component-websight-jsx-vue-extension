import React from 'react';

const GeneratedComponent = () => {
  return (
    <>
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://picsum.photos/seed/123/1600/900')" }}>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Restaurant Name</span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a href="#menu" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Menu
              </a>
              <a href="#reservation" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Reservation
              </a>
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl text-center my-10">Welcome to Restaurant Name</h1>
          <p className="text-center text-lg">
            At Restaurant Name, we believe in the power of great food. Our menu features a variety of dishes made with fresh, locally sourced ingredients. We offer a cozy atmosphere where you can enjoy a meal with family and friends.
          </p>
          <form id="reservation" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl mb-4">Hours of Operation</h2>
              <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-xl mb-4">Contact Information</h2>
              <p>123 Main St, Anytown, USA</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@restaurantname.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GeneratedComponent;