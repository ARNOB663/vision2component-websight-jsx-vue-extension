<template>
  <div class="bg-gray-100">
    <header class="bg-white p-4 flex justify-center">
      <nav class="flex justify-center">
        <ul class="flex space-x-4">
          <li><a href="#" class="text-blue-500 hover:text-blue-800">Home</a></li>
          <li><a href="#" class="text-blue-500 hover:text-blue-800">Shop</a></li>
          <li><a href="#" class="text-blue-500 hover:text-blue-800">About</a></li>
          <li><a href="#" class="text-blue-500 hover:text-blue-800">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="flex p-4">
      <aside class="w-1/4 p-4 bg-white">
        <h2 class="text-lg font-bold mb-4">Categories</h2>
        <ul class="space-y-2">
          <li><a href="#" class="text-blue-500 hover:text-blue-800">Men's Fashion</a></li>
          <li><a href="#" class="text-blue-500 hover:text-blue-800">Women's Fashion</a></li>
          <li><a href="#" class="text-blue-500 hover:text-blue-800">Accessories</a></li>
        </ul>
      </aside>

      <section class="w-3/4 p-4">
        <img src="https://static.photos/fashion/900x600/144.webp" alt="Fashion Item" class="w-full h-64 object-cover mb-4">
        <p class="text-lg font-bold mb-2">Welcome to our fashion store</p>
        <p class="text-gray-700">
          We are a fashion store that specializes in providing the latest and most stylish clothing, accessories, and shoes for men and women. Our mission is to provide our customers with high-quality, stylish, and affordable fashion items. We believe in the power of fashion to express individuality and style, and we strive to make our products not only functional, but also fashionable.
        </p>
      </section>
    </main>

    <footer class="bg-white p-4 text-center">
      <p class="text-gray-700">© 2022 Fashion Store. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this simple template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>