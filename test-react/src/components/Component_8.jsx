import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-center">
        <img src="https://picsum.photos/seed/8/300/300" alt="Construction Company Logo" className="h-10" />
      </header>

      <nav className="bg-pink-500 text-white p-4">
        <ul className="flex justify-center space-x-4">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <section className="bg-cover bg-center h-96" style={{ backgroundImage: "url('https://picsum.photos/seed/8/1600/900')" }}>
        {/* Full-width header image of a construction project */}
      </section>

      <footer className="bg-pink-500 text-white p-4">
        <div className="flex justify-between">
          <div>
            <p>Construction Company</p>
            <p>123 Main St, Anytown, USA</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@constructioncompany.com</p>
          </div>
          <div>
            <p>Follow us on:</p>
            {/* Social media icons */}
          </div>
          <div>
            {/* Newsletter sign-up form */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;