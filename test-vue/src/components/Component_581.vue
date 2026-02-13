<template>
  <header class="bg-green-500 p-4">
    <img src="https://static.photos/real-estate/900x600/183.webp" alt="Real Estate Banner" class="w-full">
    <div class="flex justify-center mt-4">
      <input type="text" placeholder="Search for properties..." class="px-4 py-2 rounded-l">
      <button class="bg-brown-500 text-white px-4 py-2 rounded-r">Search</button>
    </div>
  </header>
  <main class="flex flex-wrap p-4">
    <section class="w-full md:w-1/2 p-4">
      <h2 class="text-2xl mb-4">Listings</h2>
      <!-- Listings go here -->
    </section>
    <section class="w-full md:w-1/2 p-4">
      <h2 class="text-2xl mb-4">Property Information</h2>
      <!-- Property information goes here -->
    </section>
  </main>
  <footer class="bg-green-500 text-white p-4 text-center">
    <h2 class="text-xl mb-2">Contact Us</h2>
    <p>123 Main St<br>Anytown, USA<br>Phone: (123) 456-7890<br>Email: info@realestate.com</p>
  </footer>
</template>

<script setup>
// Your script logic can go here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>