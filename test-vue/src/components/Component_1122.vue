<template>
  <div class="bg-gray-200 antialiased">
    <header class="bg-white shadow-lg p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-3xl font-bold">Welcome to our Travel Agency</h1>
        <input type="text" placeholder="Search destinations..." class="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
    </header>
    <main class="container mx-auto px-4 py-8">
      <section class="flex flex-wrap gap-4">
        <aside class="w-1/4 bg-white p-4 shadow-md">
          <h2 class="text-xl font-bold mb-4">Pricing & Information</h2>
          <ul class="list-disc pl-6">
            <li>Flight bookings</li>
            <li>Hotel reservations</li>
            <li>Rental car services</li>
            <li>Tour packages</li>
            <li>Travel insurance</li>
          </ul>
        </aside>
        <article class="w-3/4 bg-white p-4 shadow-md">
          <h2 class="text-2xl font-bold mb-4">Our Services</h2>
          <p>We offer a variety of services to make your travel experience as smooth and enjoyable as possible.</p>
          <h2 class="text-2xl font-bold mb-4">Our Team</h2>
          <p>Our team is made up of experienced travel professionals who are passionate about travel and helping our clients create unforgettable memories.</p>
          <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
          <p>If you have any questions or need further information about our services, please don't hesitate to contact us.</p>
        </article>
      </section>
    </main>
    <footer class="bg-white shadow-lg p-4 text-center">
      <div class="container mx-auto">
        <form action="#" class="flex items-center justify-center">
          <input type="email" placeholder="Enter your email" class="px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" class="px-4 py-2 rounded-r-full bg-blue-500 text-white hover:bg-blue-700 focus:outline-none">Subscribe</button>
        </form>
        <nav class="mt-4">
          <a href="#" class="mx-2">FAQs</a>
          <a href="#" class="mx-2">Privacy Policy</a>
          <a href="#" class="mx-2">Terms of Service</a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Your script logic can go here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>