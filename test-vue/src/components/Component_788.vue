<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/art/1600x900/189.webp)' }">
    <nav class="container mx-auto px-6 py-4">
      <ul class="flex items-center justify-between">
        <li><a href="#" class="text-white hover:text-gray-200">Home</a></li>
        <li><a href="#" class="text-white hover:text-gray-200">About</a></li>
        <li><a href="#" class="text-white hover:text-gray-200">Portfolio</a></li>
        <li><a href="#" class="text-white hover:text-gray-200">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main class="container mx-auto px-6 py-4">
    <h1 class="text-4xl text-center">Welcome to Our Interior Design Studio</h1>
    <p class="text-center my-8">
      At our Interior Design Studio, we specialize in creating visually stimulating spaces that are both functional and beautiful. Our team of experienced designers work closely with you to understand your vision and bring it to life. We believe that a well-designed space can transform the way you feel and interact with your environment. Whether you're looking for a fresh coat of paint or a complete makeover, we're here to help.
    </p>
    <div class="grid grid-cols-3 gap-4 my-8">
      <img src="https://static.photos/art/900x600/190.webp" alt="Kitchen">
      <img src="https://static.photos/art/900x600/191.webp" alt="Bedroom">
      <img src="https://static.photos/art/900x600/192.webp" alt="Living Room">
    </div>
  </main>
</template>

<script setup>
// No script needed for this simple example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>