import React from 'react';

const HeroSection = () => (
  <div className="pt-24">
    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <h1 className="my-4 text-5xl font-bold leading-tight">Welcome to our restaurant</h1>
        <p className="leading-normal text-2xl mb-8">
          We are a family-owned restaurant dedicated to providing the best food in the city. Our menu features a variety of mouth-watering dishes, prepared with the freshest ingredients. Whether you're in the mood for a hearty meal or a light snack, we've got you covered.
        </p>
      </div>
      <div className="w-full md:w-3/5 py-6 text-center">
        <img className="w-full md:w-4/5 z-50 mx-auto" src="https://static.photos/restaurant/900x600/53.webp" alt="hero image"/>
      </div>
    </div>
  </div>
);

const MenuSection = () => (
  <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
      <h2 className="my-4 text-5xl font-bold leading-tight">Menu</h2>
      <p className="leading-normal text-2xl mb-8">
        Check out our wide variety of dishes. From appetizers to main courses, desserts, and drinks, we have something for everyone.
      </p>
    </div>
    <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
      {/* Placeholder content */}
      <p className="leading-normal text-2xl mb-8">
        More details will be added soon.
      </p>
    </div>
  </div>
);

const ReservationsSection = () => (
  <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
      <h2 className="my-4 text-5xl font-bold leading-tight">Reservations</h2>
      <p className="leading-normal text-2xl mb-8">
        Make a reservation for your next visit. We're open for reservations for parties of up to 10 people.
      </p>
    </div>
    <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
      {/* Placeholder content */}
      <p className="leading-normal text-2xl mb-8">
        More details will be added soon.
      </p>
    </div>
  </div>
);

const ReviewsSection = () => (
  <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
      <h2 className="my-4 text-5xl font-bold leading-tight">Reviews</h2>
      <p className="leading-normal text-2xl mb-8">
        Read what our customers have to say about our food and service. We strive to provide the best possible experience for all of our guests.
      </p>
    </div>
    <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
      {/* Placeholder content */}
      <p className="leading-normal text-2xl mb-8">
        More details will be added soon.
      </p>
    </div>
  </div>
);

const ContactUsSection = () => (
  <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
      <h2 className="my-4 text-5xl font-bold leading-tight">Contact Us</h2>
      <p className="leading-normal text-2xl mb-8">
        Get in touch with us for any questions or concerns you may have. We're always here to help.
      </p>
    </div>
    <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
      {/* Placeholder content */}
      <p className="leading-normal text-2xl mb-8">
        More details will be added soon.
      </p>
    </div>
  </div>
);

const GeneratedComponent = () => (
  <div>
    <HeroSection />
    <MenuSection />
    <ReservationsSection />
    <ReviewsSection />
    <ContactUsSection />
  </div>
);

export default GeneratedComponent;