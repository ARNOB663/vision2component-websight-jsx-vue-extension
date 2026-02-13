import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <header className="w-full bg-white p-4">
        <h1 className="text-3xl text-center">Latest News or Feature Article</h1>
      </header>

      <main className="container mx-auto p-4">
        <h2 className="text-2xl text-center">Welcome to Our Media and Publishing Company</h2>
        <p className="text-lg text-justify">
          At our media and publishing company, we are dedicated to providing the best possible service to our clients. We specialize in a wide range of services, including publishing, marketing, and digital media. Our team of experienced professionals is committed to delivering high-quality work that meets and exceeds our clients' expectations.
        </p>
      </main>

      <footer className="w-full bg-white p-4 fixed bottom-0">
        <div className="flex justify-between">
          <div>
            <p>Contact Information</p>
            <p>Email: info@mediapublishing.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div>
            <p>Follow us on social media</p>
            <div className="flex">
              <a href="#"><img src="https://static.photos/business/900x600/96.webp" alt="Facebook"/></a>
              <a href="#"><img src="https://static.photos/business/900x600/97.webp" alt="Twitter"/></a>
              <a href="#"><img src="https://static.photos/business/900x600/98.webp" alt="Instagram"/></a>
            </div>
          </div>
          <div>
            <p>Sign up for our newsletter</p>
            <form>
              <input type="email" placeholder="Enter your email"/>
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GeneratedComponent;