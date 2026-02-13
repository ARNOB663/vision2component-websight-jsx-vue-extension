import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-black text-white">
      <header className="flex justify-center items-center h-64 bg-black">
        <img src="https://picsum.photos/seed/70/300/300" alt="Law Firm Logo" className="h-32" />
      </header>

      <nav className="flex justify-center items-center h-16 bg-gold">
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-white">Home</a></li>
          <li><a href="#about" className="text-white">About</a></li>
          <li><a href="#services" className="text-white">Services</a></li>
          <li><a href="#contact" className="text-white">Contact</a></li>
        </ul>
      </nav>

      <main>
        <section id="home" className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://picsum.photos/seed/70/1600/900')" }}>
          <h1 className="text-4xl">Welcome to Our Law Firm</h1>
          <p className="text-xl">We are a team of experienced attorneys dedicated to providing the highest level of service to our clients.</p>
        </section>

        <section id="about" className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://picsum.photos/seed/70/1600/900')" }}>
          <h1 className="text-4xl">About Us</h1>
          <p className="text-xl">Our firm was founded in 2005 with the goal of providing quality legal services to our clients. We have a team of experienced attorneys who are dedicated to providing the highest level of service.</p>
        </section>

        <section id="services" className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://picsum.photos/seed/70/1600/900')" }}>
          <h1 className="text-4xl">Our Services</h1>
          <p className="text-xl">We offer a wide range of legal services including criminal defense, personal injury, family law, and more.</p>
        </section>

        <section id="contact" className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://picsum.photos/seed/70/1600/900')" }}>
          <h1 className="text-4xl">Contact Us</h1>
          <p className="text-xl">Phone: 123-456-7890</p>
          <p className="text-xl">Email: info@ourlawfirm.com</p>
        </section>
      </main>

      <footer className="flex justify-center items-center h-16 bg-gold">
        <p className="text-white">© 2022 Our Law Firm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;