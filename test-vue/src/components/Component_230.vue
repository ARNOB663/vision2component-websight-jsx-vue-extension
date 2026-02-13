<template>
  <header class="w-full">
    <img src="https://picsum.photos/seed/230/900/600" alt="Header Image" class="w-full">
  </header>

  <nav class="bg-white p-4 shadow">
    <ul class="flex space-x-4">
      <li><a href="#" class="text-pink-500 hover:text-pink-700">Home</a></li>
      <li><a href="#" class="text-pink-500 hover:text-pink-700">Services</a></li>
      <li><a href="#" class="text-pink-500 hover:text-pink-700">Accommodation</a></li>
      <li><a href="#" class="text-pink-500 hover:text-pink-700">Dining</a></li>
      <li><a href="#" class="text-pink-500 hover:text-pink-700">Contact</a></li>
    </ul>
  </nav>

  <section class="py-8 px-4">
    <h2 class="text-2xl font-bold mb-4">Featured Services and Promotions</h2>
    <p class="text-gray-700">
      At our hospitality company, we offer a wide range of services and promotions to make your stay more enjoyable. From our delicious dining options to our comfortable accommodations, we have something for everyone.
    </p>
  </section>

  <section class="py-8 px-4">
    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <div class="w-full md:w-1/2">
        <h2 class="text-2xl font-bold mb-4">Accommodation</h2>
        <p class="text-gray-700">
          Our accommodations are designed to provide a comfortable and relaxing environment for our guests. We offer a variety of room types, from standard rooms to suites, each with its own unique charm.
        </p>
      </div>
      <div class="w-full md:w-1/2">
        <h2 class="text-2xl font-bold mb-4">Dining</h2>
        <p class="text-gray-700">
          At our hospitality company, we pride ourselves on our delicious dining options. From our breakfast menu to our extensive lunch and dinner menus, we have something for everyone. Our chefs use only the freshest ingredients to ensure that every dish is a true taste of our hospitality company.
        </p>
      </div>
    </div>
  </section>

  <footer class="bg-white p-4 shadow">
    <div class="flex space-x-4">
      <a href="#" class="text-pink-500 hover:text-pink-700">Facebook</a>
      <a href="#" class="text-pink-500 hover:text-pink-700">Twitter</a>
      <a href="#" class="text-pink-500 hover:text-pink-700">Instagram</a>
    </div>
    <p class="text-gray-700 mt-4">
      Contact us at: info@hospitalitycompany.com
    </p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>