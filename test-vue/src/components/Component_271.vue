<template>
  <header class="bg-white text-gray-800">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Travel Agency</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  </header>

  <main class="container mx-auto px-4 py-8">
    <section class="mb-8">
      <h1 class="text-3xl mb-4">Welcome to our travel agency</h1>
      <p class="mb-4">
        We are a team of travel experts who are passionate about helping you plan your next adventure. Whether you're looking for a relaxing beach vacation, an action-packed adventure, or a cultural experience, we're here to make it happen.
      </p>
      <p class="mb-4">
        Our team of travel experts are experts in their field, with a wide range of knowledge and experience. They are passionate about travel and are always ready to help you plan your next adventure.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl mb-4">Our Destinations</h2>
      <!-- Destination boxes go here -->
    </section>
  </main>

  <footer class="bg-white text-gray-800 py-8">
    <div class="container mx-auto px-4">
      <p class="mb-4">
        &copy; 2022 Travel Agency. All rights reserved.
      </p>
      <p class="mb-4">
        <a href="#" class="text-teal-500 hover:text-teal-700">Terms and Conditions</a>
      </p>
      <p class="mb-4">
        <a href="#" class="text-teal-500 hover:text-teal-700">Contact Information</a>
      </p>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS is included via CDN in the template */
</style>