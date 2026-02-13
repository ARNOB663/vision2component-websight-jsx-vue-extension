import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://picsum.photos/seed/127/1600/900')" }}>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Non-Profit Site</span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a href="#mission" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Mission
              </a>
              <a href="#get-involved" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Get Involved
              </a>
              <a href="#donate" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Donate
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section id="mission" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At our non-profit, we believe in the power of community and strive to make a difference in the world. We are dedicated to providing aid and support to those in need, particularly those who are marginalized or underserved. Our mission is to create a world where everyone has the opportunity to thrive and live their best lives.
          </p>
        </section>
        <section id="get-involved" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
          <p className="text-gray-700">
            We are always looking for volunteers to help us in our mission. Whether you're a professional in a particular field, a student, or just someone who loves to help others, there are many ways to get involved.
          </p>
        </section>
        <section id="donate" className="my-8">
          <h2 className="text-2xl font-bold mb-4">Donate</h2>
          <p className="text-gray-700">
            Your donation will help us to continue our work. Every little bit helps, so please consider donating today.
          </p>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <p className="text-center">
          Follow us on social media:
          <a href="#" className="text-green-400 hover:text-green-300">Facebook</a>,
          <a href="#" className="text-green-400 hover:text-green-300">Twitter</a>,
          <a href="#" className="text-green-400 hover:text-green-300">Instagram</a>
        </p>
      </footer>
    </div>
  );
};

export { GeneratedComponent };