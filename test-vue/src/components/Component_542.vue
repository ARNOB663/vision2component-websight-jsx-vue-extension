<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="#" class="text-lg font-bold">Tech Company</a>
        <div>
          <a href="#" class="mr-4">Home</a>
          <a href="#" class="mr-4">Products</a>
          <a href="#">About</a>
        </div>
      </div>
    </nav>
    <main class="flex-grow container mx-auto px-4 py-6">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-2/3 p-4">
          <h1 class="text-3xl font-bold mb-4">Welcome to Tech Company</h1>
          <p class="mb-4">
            At Tech Company, we are dedicated to providing the latest and greatest technology gadgets to our customers. Our mission is to make technology accessible and affordable for everyone.
          </p>
          <p>
            We believe in the power of technology to transform the world. That's why we're committed to creating innovative products that push the boundaries of what's possible. Whether you're a tech enthusiast, a business professional, or just someone who loves the latest gadgets, we've got something for you.
          </p>
        </div>
        <div class="md:w-1/3 p-4">
          <h2 class="text-2xl font-bold mb-4">Featured Products</h2>
          <!-- Add your featured products here -->
        </div>
      </div>
    </main>
    <footer class="bg-white shadow-inner">
      <div class="container mx-auto px-4 py-2 text-center">
        <p>© 2022 Tech Company. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Your script setup logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>