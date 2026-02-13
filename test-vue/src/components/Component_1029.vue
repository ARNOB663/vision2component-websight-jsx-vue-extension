<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-none bg-white border-b border-gray-200">
      <div class="container mx-auto px-4 py-2">
        <img src="https://static.photos/architecture/300x300/31.webp" alt="Company Logo" class="h-8">
      </div>
    </div>
    <div class="flex-grow flex">
      <div class="w-1/2 bg-gray-100">
        <img src="https://static.photos/architecture/900x600/32.webp" alt="Architectural Image" class="w-full h-full object-cover">
      </div>
      <div class="w-1/2 bg-white flex flex-col justify-center px-10">
        <h1 class="text-4xl mb-4">Welcome to Our Architecture Firm</h1>
        <p class="text-lg mb-4">
          We are a leading architectural firm specializing in design, construction, and interior design. Our team of experienced architects, interior designers, and engineers work closely with our clients to create unique and functional spaces that reflect their individual needs and preferences.
        </p>
        <h2 class="text-2xl mb-2">Our Services</h2>
        <ul class="list-disc pl-5 mb-4">
          <li>Residential Design</li>
          <li>Commercial Design</li>
          <li>Interior Design</li>
          <li>Construction Management</li>
        </ul>
        <a href="#" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>