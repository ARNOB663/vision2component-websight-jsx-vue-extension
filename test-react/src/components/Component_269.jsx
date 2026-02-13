import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="bg-gray-100">
      <header className="sticky top-0 bg-white shadow">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <img src="https://picsum.photos/seed/269/300/300" alt="Logo" className="h-10" />
          <ul className="flex space-x-4">
            <li><a href="#success-stories" className="text-gray-600 hover:text-gray-900">Success Stories</a></li>
            <li><a href="#events" className="text-gray-600 hover:text-gray-900">Events</a></li>
            <li><a href="#ways-to-help" className="text-gray-600 hover:text-gray-900">Ways to Help</a></li>
          </ul>
        </nav>
      </header>

      <section className="container mx-auto px-6 py-12">
        <img src="https://picsum.photos/seed/269/900/600" alt="Banner Image" className="w-full h-64 object-cover" />
      </section>

      <section id="success-stories" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
        {/* Add your success stories here */}
      </section>

      <section id="events" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Events</h2>
        {/* Add your events here */}
      </section>

      <section id="ways-to-help" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Ways to Help</h2>
        {/* Add your ways to help here */}
      </section>
    </div>
  );
};

export default GeneratedComponent;