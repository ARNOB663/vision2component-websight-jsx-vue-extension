import React from 'react';

const ImageSlider = () => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md">
      {/* Placeholder for image slider */}
      <img src="https://static.photos/art/300x300/100.webp" alt="Gallery Image" className="w-full h-full object-cover" />
    </div>
  );
};

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <input type="email" id="email" name="email" required className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Email address" />
      <textarea id="message" name="message" rows="4" required className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your message"></textarea>
      <button type="submit" className="w-full bg-blue-500 text-white font-bold py-4 rounded-lg hover:bg-blue-700 focus:outline-none">Send Message</button>
    </form>
  );
};

const SocialMediaLinks = () => {
  return (
    <ul className="flex space-x-4">
      <li><a href="#" className="text-white hover:text-gray-300"><i className="fab fa-facebook-f"></i></a></li>
      <li><a href="#" className="text-white hover:text-gray-300"><i className="fab fa-twitter"></i></a></li>
      <li><a href="#" className="text-white hover:text-gray-300"><i className="fab fa-instagram"></i></a></li>
      <li><a href="#" className="text-white hover:text-gray-300"><i className="fab fa-linkedin-in"></i></a></li>
    </ul>
  );
};

const GeneratedComponent = () => {
  return (
    <div className="bg-black text-white">
      <header className="flex justify-center items-center h-64">
        <img src="https://static.photos/art/300x300/100.webp" alt="Art Gallery Logo" className="h-32" />
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-center mb-8">Welcome to our Art Gallery</h1>
        <p className="text-xl mb-8">
          At our Art Gallery, we specialize in the finest artworks from around the world. Our collection includes paintings, sculptures, and more. We believe that art is a universal language that connects people from all walks of life. We are committed to providing a space where artists can showcase their work and where art lovers can appreciate the beauty of art.
        </p>
        <ImageSlider />
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <ContactForm />
          <SocialMediaLinks className="mt-8" />
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;