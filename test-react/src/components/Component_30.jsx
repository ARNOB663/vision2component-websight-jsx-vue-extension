import React from 'react';

const GeneratedComponent = () => (
  <div className="bg-gray-100">
    <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://picsum.photos/seed/30/1600/900')" }}>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Food Restaurant</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#menu" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Menu
            </a>
            <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
    <main className="container mx-auto px-4 py-8">
      <section id="about">
        <h2 className="text-3xl mb-4">About Us</h2>
        <p className="mb-4">
          Welcome to Food Restaurant, where we serve the best food in town. Our dishes are made with the freshest ingredients and cooked to perfection. We are open 24/7, so come on in and enjoy a meal with us.
        </p>
      </section>
      <section id="menu">
        <h2 className="text-3xl mb-4">Menu</h2>
        <p className="mb-4">
          Our menu is constantly evolving to keep up with the latest trends in food. We offer a wide variety of dishes, from classic favorites to unique creations.
        </p>
      </section>
      <section id="contact">
        <h2 className="text-3xl mb-4">Contact Us</h2>
        <p className="mb-4">
          You can find us at 123 Main St, Anytown, USA. Our phone number is 555-123-4567 and our email is info@foodrestaurant.com.
        </p>
      </section>
    </main>
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">Food Restaurant</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#menu" className="mr-5 hover:text-white">Menu</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  </div>
);

export default GeneratedComponent;