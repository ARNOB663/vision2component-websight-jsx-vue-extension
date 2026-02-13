<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-cover bg-center h-64" :style="{ backgroundImage: 'url(https://static.photos/travel/1600x900/77.webp)' }">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src="https://static.photos/travel/300x300/78.webp" alt="Logo" class="w-10 h-10">
          <span class="ml-3 text-xl">Travel Agency</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" class="mr-5 hover:text-white">Home</a>
          <a href="/destinations" class="mr-5 hover:text-white">Destinations</a>
          <a href="/booking" class="mr-5 hover:text-white">Booking</a>
        </nav>
      </div>
    </header>
    <main class="flex-grow">
      <section class="container mx-auto px-5 py-24">
        <h1 class="text-3xl mb-4">Welcome to our Travel Agency</h1>
        <p class="mb-8">We are a professional travel agency that offers a wide range of services to meet your travel needs. Whether you're looking for a relaxing beach vacation, an adventurous trek, or a cultural experience, we've got you covered.</p>
        <!-- Add your highlighted travel destinations and booking forms here -->
      </section>
    </main>
    <footer class="bg-gray-800 text-white text-center py-4">
      <p>© 2022 Travel Agency. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// Your script logic can go here if needed
</script>

<style scoped>
/* Your scoped styles can go here */
</style>