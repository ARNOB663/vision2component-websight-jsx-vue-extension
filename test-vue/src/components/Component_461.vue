<template>
  <div class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 p-4">
          <h1 class="text-3xl font-bold mb-4">Latest Blog Post</h1>
          <img src="https://static.photos/business/900x600/63.webp" alt="Food Image" class="mb-4">
          <p class="text-lg">
            Welcome to our blog about food. We are passionate about food and we want to share our knowledge and experiences with you. We believe that food is not just a meal, but a way of life. We love to explore new flavors, cuisines, and ingredients. We hope you enjoy our blog and find inspiration in our posts.
          </p>
        </div>
        <div class="w-full md:w-1/2 p-4">
          <h2 class="text-2xl font-bold mb-4">Popular Posts</h2>
          <ul>
            <li class="mb-2"><a href="#" class="text-green-500 hover:text-green-700">Post Title 1</a></li>
            <li class="mb-2"><a href="#" class="text-green-500 hover:text-green-700">Post Title 2</a></li>
            <li class="mb-2"><a href="#" class="text-green-500 hover:text-green-700">Post Title 3</a></li>
          </ul>
        </div>
      </div>
      <footer class="mt-8 p-4 bg-gray-800 text-white">
        <p class="text-center">© 2022 Food Company. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
// No script needed for this simple example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>