<template>
  <div class="bg-fuchsia-200">
    <div class="container mx-auto px-4">
      <header class="py-4">
        <h1 class="text-4xl text-pink-800 text-center">Welcome to our Children's Toys Store</h1>
        <p class="text-center text-pink-800">We offer a wide range of toys for your children. From educational games to interactive dolls, we have everything you need to brighten up your child's day.</p>
      </header>

      <div class="relative">
        <div class="w-full overflow-x-auto whitespace-nowrap">
          <img class="inline-block w-1/3" src="https://static.photos/fashion/900x600/119.webp" alt="Toy Image">
          <img class="inline-block w-1/3" src="https://static.photos/fashion/900x600/120.webp" alt="Toy Image">
          <img class="inline-block w-1/3" src="https://static.photos/fashion/900x600/121.webp" alt="Toy Image">
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/3 p-4">
          <h2 class="text-2xl text-pink-800">Product Categories</h2>
          <ul class="list-disc list-inside">
            <li>Educational Toys</li>
            <li>Interactive Dolls</li>
            <li>Outdoor Toys</li>
          </ul>
        </div>

        <div class="w-full lg:w-2/3 p-4">
          <h2 class="text-2xl text-pink-800">Featured Toys</h2>
          <!-- Add your product grid here -->
        </div>
      </div>

      <footer class="py-4">
        <p class="text-center">Follow us on social media:</p>
        <div class="flex justify-center">
          <a href="#" class="px-2">Facebook</a>
          <a href="#" class="px-2">Twitter</a>
          <a href="#" class="px-2">Instagram</a>
        </div>
        <div class="flex justify-center">
          <a href="#" class="px-2">FAQ</a>
          <a href="#" class="px-2">Contact Us</a>
          <a href="#" class="px-2">Shipping Policy</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>