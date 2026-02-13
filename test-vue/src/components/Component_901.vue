<template>
  <header class="flex items-center justify-center h-screen bg-cover bg-center" :style="{ backgroundImage: 'url(\'https://static.photos/restaurant/1600x900/102.webp\')' }">
    <nav class="absolute top-0 w-full">
      <ul class="flex justify-center pt-6">
        <li class="px-3"><a href="#menu" class="text-white no-underline hover:text-yellow-300">Menu</a></li>
        <li class="px-3"><a href="#about" class="text-white no-underline hover:text-yellow-300">About</a></li>
        <li class="px-3"><a href="#contact" class="text-white no-underline hover:text-yellow-300">Contact</a></li>
      </ul>
    </nav>
    <div class="flex items-center justify-center h-screen">
      <img src="https://static.photos/restaurant/300x300/103.webp" alt="Restaurant Logo" class="w-1/2">
    </div>
  </header>
  <section id="menu" class="py-10">
    <h2 class="text-4xl text-center">Menu</h2>
    <!-- Add your menu items here -->
  </section>
  <section id="about" class="py-10 bg-gray-200">
    <h2 class="text-4xl text-center">About Us</h2>
    <p class="text-center">
      At our restaurant, we believe in the power of food to bring people together. Our menu is a celebration of the finest ingredients, carefully sourced from around the world. We use only the freshest produce to create delectable dishes that are not only visually appealing but also satisfying to the palate. Our chefs are passionate about their craft and are dedicated to creating a unique dining experience for every guest.
    </p>
  </section>
  <section id="contact" class="py-10">
    <h2 class="text-4xl text-center">Contact Us</h2>
    <!-- Add your contact information here -->
  </section>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>