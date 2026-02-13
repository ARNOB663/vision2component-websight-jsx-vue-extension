import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-maroon text-white">
      <header className="w-full h-96 bg-center bg-cover" style={{ backgroundImage: "url('https://static.photos/business/1600x900/8.webp')" }}>
        {/* Header content goes here */}
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-2xl mb-4">About Us</h2>
            <p className="text-lg">
              At our educational institution, we are committed to providing a high-quality education that prepares students for success in their chosen fields. Our experienced faculty and state-of-the-art facilities ensure that our students receive the best possible education.
            </p>
          </div>

          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-2xl mb-4">Programs</h2>
            <p className="text-lg">
              We offer a wide range of programs to suit the needs of all students. Whether you are interested in a bachelor's degree, a master's degree, or a certificate program, we have something for you. Our programs are designed to provide students with the knowledge and skills they need to succeed in their chosen field.
            </p>
          </div>

          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-2xl mb-4">Faculty</h2>
            <p className="text-lg">
              Our faculty is composed of highly qualified and experienced professionals who are dedicated to providing the best possible education to our students. They are experts in their respective fields and are committed to helping students reach their full potential.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-navy-purple p-4">
        <div className="container mx-auto">
          <h2 className="text-2xl mb-4">Contact Us</h2>
          <form>
            {/* Contact form fields go here */}
          </form>

          <div className="mt-4">
            <h2 className="text-2xl mb-4">Follow Us</h2>
            {/* Social media links go here */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;