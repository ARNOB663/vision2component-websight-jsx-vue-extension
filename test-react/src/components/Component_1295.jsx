import React from 'react';

const ImageGallery = () => (
  <div className="grid grid-cols-2 gap-4">
    {/* Add your image gallery items here */}
    <img src="https://static.photos/real-estate/300x300/97.webp" alt="Property 1" />
    <img src="https://static.photos/real-estate/300x300/98.webp" alt="Property 2" />
    {/* Add more images as needed */}
  </div>
);

const PropertyListings = () => (
  <ul className="list-disc pl-4">
    {/* Add your property listing items here */}
    <li>Property 1 - $120,000</li>
    <li>Property 2 - $150,000</li>
    {/* Add more properties as needed */}
  </ul>
);

const SocialMediaLinks = () => (
  <ul className="list-none flex justify-center space-x-4">
    <li><a href="#">Facebook</a></li>
    <li><a href="#">Twitter</a></li>
    <li><a href="#">Instagram</a></li>
    {/* Add more social media links as needed */}
  </ul>
);

const GeneratedComponent = () => (
  <div className="bg-gray-100 container mx-auto px-4 py-8">
    <header className="flex justify-center items-center h-32">
      <img src="https://static.photos/real-estate/300x300/97.webp" alt="Logo" className="h-full" />
    </header>
    <main className="flex flex-row -mx-4 mt-8">
      <section className="w-1/2 px-4">
        <h2 className="text-2xl mb-4">Image Gallery</h2>
        <ImageGallery />
      </section>
      <section className="w-1/2 px-4">
        <h2 className="text-2xl mb-4">Property Listings</h2>
        <PropertyListings />
      </section>
    </main>
    <footer className="mt-8 py-4 text-center">
      <p className="mb-2">Contact Information:</p>
      <p className="mb-2">Phone: 123-456-7890</p>
      <p className="mb-2">Email: info@realestateagency.com</p>
      <p className="mb-2">Address: 123 Real Estate St, City, State, Zip</p>
      <p className="mt-4">Follow us on social media:</p>
      <SocialMediaLinks />
    </footer>
  </div>
);

export default GeneratedComponent;