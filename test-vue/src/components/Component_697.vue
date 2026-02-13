<template>
  <header class="w-full h-screen bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/business/1600x900/98.webp)' }">
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Fashion Company</span>
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
    <h1 class="text-3xl font-bold mb-4">Welcome to Fashion Company</h1>
    <p class="mb-4">
      At Fashion Company, we are passionate about fashion and style. We believe that fashion is not just about what you wear, but how you wear it. We strive to create a unique and modern look for every individual, no matter their size, shape, or personality. Our mission is to provide our customers with the latest fashion trends, from the hottest street style to the most comfortable and trendy formal wear.
    </p>
    <p class="mb-4">
      We are committed to providing high-quality, stylish, and comfortable clothing that is not only fashionable but also functional. We understand that fashion should not only be about what you wear, but also how you feel when you wear it. That's why we offer a wide range of clothing items, from casual wear to formal wear, and everything in between.
    </p>
  </main>
  <footer class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex flex-wrap px-2 pt-4 pb-2">
      <div class="w-full md:w-1/2">
        <p>Follow us on social media</p>
        <a href="#" class="text-pink-400">Facebook</a>
        <a href="#" class="text-pink-400">Twitter</a>
        <a href="#" class="text-pink-400">Instagram</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this simple example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>