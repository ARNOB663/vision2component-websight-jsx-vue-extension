import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <img src="https://picsum.photos/seed/39/300/300" alt="Logo" className="h-10" />
        <input type="text" placeholder="Search for food items" className="border rounded p-2" />
      </header>

      <main className="container mx-auto p-4 flex flex-wrap">
        <section className="w-full md:w-2/3 p-4">
          <h2 className="text-2xl mb-4">Popular Food Categories</h2>
          <p className="mb-4">We offer a wide variety of food categories, from Italian to Indian, from Mexican to Chinese, and many more. Our menu is designed to cater to all tastes and preferences.</p>

          <h2 className="text-2xl mb-4">Current Promotions</h2>
          <p className="mb-4">Check out our current promotions and discounts. We offer discounts on a variety of food items, from appetizers to main courses, and desserts.</p>
        </section>

        <aside className="w-full md:w-1/3 p-4 bg-white">
          <h2 className="text-2xl mb-4">Customer Reviews</h2>
          <p className="mb-4">Read what our customers have to say about our food delivery service. We strive to provide the best service and quality food.</p>

          <h2 className="text-2xl mb-4">Recommended Dishes</h2>
          <p className="mb-4">Check out our recommended dishes. We have a wide variety of dishes that are sure to satisfy your taste buds.</p>
        </aside>
      </main>

      <footer className="bg-white p-4 text-center">
        <h2 className="text-2xl mb-4">About Us</h2>
        <p className="mb-4">We are a food delivery service dedicated to providing the best food to our customers. We strive to provide the best service and quality food.</p>

        <h2 className="text-2xl mb-4">Delivery Areas</h2>
        <p className="mb-4">We currently deliver to a wide variety of areas. Please check our website for more information.</p>

        <h2 className="text-2xl mb-4">Contact Us</h2>
        <p className="mb-4">For any inquiries, please contact us at 123-456-7890 or email us at info@fooddelivery.com.</p>
      </footer>
    </div>
  );
};

export { GeneratedComponent };