<template>
  <header class="relative">
    <img src="https://static.photos/business/900x600/64.webp" alt="Food Image" class="w-full">
    <nav class="absolute inset-0 flex items-center justify-center">
      <ul class="flex text-white">
        <li class="px-4">Menu</li>
        <li class="px-4">About</li>
        <li class="px-4">Contact</li>
      </ul>
    </nav>
  </header>

  <main class="container mx-auto p-4">
    <div class="flex flex-col items-center justify-center">
      <img src="https://static.photos/business/300x300/65.webp" alt="Logo" class="w-1/4">
      <h1 class="text-2xl text-center">Welcome to our food business</h1>
      <p class="text-center">We are a family-owned business dedicated to providing the best food in the city. Our menu features a variety of dishes, from classic favorites to unique creations. We use only the freshest ingredients to ensure that every dish is made with love. Come visit us and taste the difference.</p>
    </div>
  </main>

  <footer class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between">
      <div>
        <h3>Locations</h3>
        <ul>
          <li>123 Main St</li>
          <li>456 Second Ave</li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li>Phone: 123-456-7890</li>
          <li>Email: info@foodbusiness.com</li>
        </ul>
      </div>
      <div>
        <h3>Ordering</h3>
        <ul>
          <li>Dine-in</li>
          <li>Take-out</li>
          <li>Delivery</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>