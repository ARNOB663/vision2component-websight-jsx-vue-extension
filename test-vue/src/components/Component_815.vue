<template>
  <nav class="bg-gray-500 text-white p-4">
    <ul class="flex space-x-4">
      <li><a href="#services">Services</a></li>
      <li><a href="#appointments">Appointments</a></li>
      <li><a href="#insurance">Insurance and Fees</a></li>
    </ul>
  </nav>

  <div class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/nature/1600x900/16.webp)' }">
    <div class="text-center pt-40 text-white text-4xl">
      <h1 class="font-bold">Healthcare Provider</h1>
      <p class="font-light">A soothing and calming design with a left-aligned menu and a full-width background image of nature.</p>
    </div>
  </div>

  <div id="services" class="p-4">
    <h2 class="text-2xl font-bold">Services</h2>
    <p>Your services go here.</p>
  </div>

  <div id="appointments" class="p-4">
    <h2 class="text-2xl font-bold">Appointments</h2>
    <p>Your appointments go here.</p>
  </div>

  <div id="insurance" class="p-4">
    <h2 class="text-2xl font-bold">Insurance and Fees</h2>
    <p>Your insurance and fees go here.</p>
  </div>
</template>

<script setup>
// Your script logic goes here
</script>

<style scoped>
/* Your scoped styles go here */
</style>