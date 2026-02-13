<template>
  <div class="bg-red-500">
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/3 bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/restaurant/1600x900/14.webp)' }"></div>
      <div class="w-full md:w-2/3 p-4">
        <h1 class="text-4xl text-brown-500">Welcome to Our Restaurant</h1>
        <p class="text-xl text-brown-500">
          At our restaurant, we believe in the power of food to bring people together. Our menu is a celebration of the best ingredients, carefully sourced from around the world, and presented in a modern, yet classic way. We use only the freshest produce, and prepare our dishes with care and attention to detail. Our warm and inviting atmosphere is the perfect backdrop for your dining experience.
        </p>
        <div class="flex flex-wrap">
          <div class="w-1/2 p-4">
            <img src="https://static.photos/restaurant/900x600/15.webp" alt="Food 1" class="w-full">
          </div>
          <div class="w-1/2 p-4">
            <img src="https://static.photos/restaurant/900x600/16.webp" alt="Food 2" class="w-full">
          </div>
          <!-- Add more food images as needed -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script setup needed for this example
</script>