<template>
  <nav class="flex items-center justify-between flex-wrap bg-white p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Fashion Brand</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Home
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Shop
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Contact
        </a>
      </div>
    </div>
  </nav>

  <div class="relative">
    <img src="https://static.photos/fashion/900x600/21.webp" class="w-full" alt="Image">
    <div class="absolute inset-0 flex items-center justify-center">
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Add to Cart
      </button>
    </div>
  </div>

  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">Welcome to Fashion Brand</h1>
    <p class="text-lg mb-4">
      At Fashion Brand, we believe in the power of fashion to express individuality and self-expression. Our mission is to provide our customers with high-quality, stylish clothing that is not only comfortable but also reflects their unique personal style. We offer a wide range of clothing items, from casual wear to formal attire, and everything in between. Our products are made with the highest quality materials and are designed to last. We are committed to providing our customers with the best shopping experience possible, and we hope to see you soon at our store.
    </p>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* No styles needed for this example */
</style>