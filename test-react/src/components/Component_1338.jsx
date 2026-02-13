import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="py-10">
        <h1 className="text-4xl text-center">Welcome to Our Photography Studio</h1>
        <p className="text-center mt-5">
          We are a full-service photography studio specializing in capturing the most beautiful moments of your life. Our team of professional photographers are dedicated to creating timeless images that you'll cherish for a lifetime. Whether you're looking for a wedding, a family session, or a personal shoot, we're here to help you create the perfect memories.
        </p>
      </header>

      <main className="py-10">
        <h2 className="text-2xl text-center">Our Services</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl mb-2">Wedding Photography</h3>
              <p>
                We offer a wide range of wedding photography services, from pre-wedding shoots to post-wedding editing. Our photographers are experienced in capturing the love and joy of your special day.
              </p>
            </div>
          </div>
          {/* Repeat the above div for each service */}
        </div>
      </main>

      <footer className="py-10 text-center">
        <p>&copy; 2022 Photography Studio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GeneratedComponent;