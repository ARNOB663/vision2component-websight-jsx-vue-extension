<template>
  <header class="w-full h-64 bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/real-estate/1600x900/145.webp)' }"></header>

  <main class="container mx-auto px-4 py-6">
    <h1 class="text-3xl font-bold mb-4">Welcome to Our Real Estate Agency</h1>
    <p class="mb-6">
      At our Real Estate Agency, we are committed to providing our clients with the highest quality of service. We understand that buying or selling a home is a big decision, and we are here to help you every step of the way. Whether you're looking for a luxury home, a starter home, or a vacation home, we have the perfect property for you.
    </p>

    <div class="overflow-y-auto h-64 mb-6">
      <!-- Scrolling list of properties goes here -->
    </div>
  </main>

  <footer class="bg-gray-800 text-white text-center p-4">
    <img src="https://static.photos/real-estate/300x300/146.webp" alt="Logo" class="inline-block mb-2">
    <p>
      123 Main St<br>
      Anytown, USA 12345<br>
      Phone: (123) 456-7890<br>
      Email: info@realestateagency.com
    </p>
  </footer>
</template>

<script setup>
// Your script logic can go here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>