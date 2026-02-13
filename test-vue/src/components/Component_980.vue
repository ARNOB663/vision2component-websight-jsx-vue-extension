<template>
  <div class="bg-white font-sans leading-normal tracking-normal">
    <div class="flex items-center justify-center h-screen">
      <img src="https://static.photos/architecture/300x300/182.webp" alt="Architecture Logo" class="w-1/2">
    </div>
    <div class="container mx-auto px-4">
      <h1 class="text-center text-4xl mb-4">Welcome to Our Architecture Firm</h1>
      <p class="text-center mb-8">
        We are a leading architecture firm specializing in creating unique and innovative designs. Our team of experienced architects and designers work closely with our clients to understand their needs and translate them into beautiful, functional spaces. We believe in the power of design to transform the world around us and we are committed to making that a reality.
      </p>
      <div class="grid grid-cols-3 gap-4">
        <div class="relative">
          <img src="https://static.photos/architecture/900x600/183.webp" alt="Portfolio 1" class="w-full">
          <div class="absolute inset-0 flex items-center justify-center">
            <p class="text-white text-xl">Portfolio 1</p>
          </div>
        </div>
        <div class="relative">
          <img src="https://static.photos/architecture/900x600/184.webp" alt="Portfolio 2" class="w-full">
          <div class="absolute inset-0 flex items-center justify-center">
            <p class="text-white text-xl">Portfolio 2</p>
          </div>
        </div>
        <div class="relative">
          <img src="https://static.photos/architecture/900x600/185.webp" alt="Portfolio 3" class="w-full">
          <div class="absolute inset-0 flex items-center justify-center">
            <p class="text-white text-xl">Portfolio 3</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this simple template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>