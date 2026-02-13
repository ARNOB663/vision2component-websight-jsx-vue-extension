<template>
  <div class="flex flex-col min-h-screen">
    <nav class="bg-white border-b border-gray-200 fixed z-10 w-64 h-full">
      <!-- Diagonal navigation bar goes here -->
    </nav>
    <main class="flex-grow">
      <section class="h-screen bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/travel/1600x900/21.webp)' }">
        <div class="container mx-auto px-6 py-12 h-full">
          <h1 class="text-4xl font-bold mb-4">Welcome to our travel agency</h1>
          <p class="text-xl mb-8">We are a team of passionate travelers who are dedicated to providing you with the best travel experience. We specialize in adventure, luxury, and cultural travel. Whether you're looking for a romantic getaway, a family vacation, or a business trip, we've got you covered.</p>
          <a href="#" class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Book Now</a>
        </div>
      </section>
      <section class="py-12">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold mb-6">Our Destinations</h2>
          <!-- Blog-style layout for destinations goes here -->
        </div>
      </section>
    </main>
    <footer class="bg-white border-t border-gray-200">
      <div class="container mx-auto px-6 py-6">
        <!-- Social media links go here -->
      </div>
    </footer>
  </div>
</template>

<script setup>
// Your script logic goes here
</script>

<style scoped>
/* Your scoped styles go here */
</style>