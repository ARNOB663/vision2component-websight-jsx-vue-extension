<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img src="https://static.photos/business/300x300/74.webp" alt="Logo" class="mr-2">
      <span class="font-semibold text-xl tracking-tight">Food Delivery Service</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#menu" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Menu
        </a>
        <a href="#about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          About Us
        </a>
        <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Contact
        </a>
      </div>
    </div>
  </nav>

  <header class="bg-white text-gray-800">
    <img src="https://static.photos/business/900x600/75.webp" alt="Food Image" class="w-full">
  </header>

  <section class="text-gray-700 p-8">
    <h1 class="text-2xl font-medium mb-2">Welcome to our Food Delivery Service</h1>
    <p class="leading-relaxed">
      At our Food Delivery Service, we believe in the power of great food to bring people together. Our menu features a wide variety of mouth-watering dishes, carefully crafted by our expert chefs. From classic favorites to innovative creations, we have something for everyone.
    </p>
    <button class="mt-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
      Order Now
    </button>
  </section>
</template>

<script setup>
// No script needed for this example
</script>