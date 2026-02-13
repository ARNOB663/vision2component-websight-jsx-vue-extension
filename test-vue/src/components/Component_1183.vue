<template>
  <div class="relative bg-fixed bg-center bg-cover h-screen" :style="{ backgroundImage: 'url(\'https://static.photos/people/1600x900/184.webp\')' }">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="container relative mx-auto px-4 py-32 text-center text-white">
      <h1 class="text-5xl font-bold">Welcome to Our Nonprofit</h1>
      <p class="text-2xl mt-4">We are a nonprofit organization dedicated to making a difference in the world.</p>
      <button class="mt-8 px-8 py-4 bg-yellow-500 text-white rounded-full">Donate Now</button>
    </div>
  </div>
  <div class="container mx-auto px-4 py-12">
    <h2 class="text-3xl font-bold mb-4">Our Mission</h2>
    <p class="text-lg">Our mission is to provide a platform for individuals and organizations to come together to make a difference in their communities. We believe in the power of collective action and strive to create a world where everyone has the opportunity to thrive.</p>
  </div>
  <div class="container mx-auto px-4 py-12">
    <h2 class="text-3xl font-bold mb-4">Upcoming Events</h2>
    <!-- Add your event details here -->
  </div>
  <div class="container mx-auto px-4 py-12">
    <h2 class="text-3xl font-bold mb-4">Testimonials</h2>
    <!-- Add your testimonials here -->
  </div>
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <h3 class="text-2xl font-bold mb-4">Donate</h3>
          <!-- Add your donation options here -->
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <h3 class="text-2xl font-bold mb-4">Volunteer</h3>
          <!-- Add your volunteer options here -->
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <h3 class="text-2xl font-bold mb-4">Newsletter</h3>
          <!-- Add your newsletter sign-up form here -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Your script setup logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>