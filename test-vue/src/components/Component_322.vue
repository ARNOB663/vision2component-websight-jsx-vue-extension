<template>
  <div class="relative bg-black text-white">
    <video class="absolute inset-0 object-cover w-full h-full" autoplay loop muted>
      <source src="https://picsum.photos/seed/322/900/600" type="video/mp4">
    </video>
    <div class="absolute bottom-0 left-0 p-4">
      <img class="h-16" src="https://picsum.photos/seed/322/300/300" alt="Logo">
    </div>
  </div>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-4">Media and Entertainment Company</h1>
    <p class="text-xl mb-4">
      Your long and captivating sentences about the business.
    </p>
    <div class="overflow-x-auto whitespace-nowrap">
      <!-- Add your news or events here -->
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>