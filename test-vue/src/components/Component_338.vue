<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Top Banner -->
    <div class="w-full bg-gray-500 text-white p-4 mb-4">
      <h1 class="text-2xl font-bold">Popular Articles</h1>
      <p class="mt-2">
        Welcome to our online news site, where you can find the latest news, articles, and updates from around the world.
      </p>
    </div>

    <!-- Main Content -->
    <div class="flex flex-wrap -mx-4">
      <!-- Left Sidebar -->
      <div class="w-full md:w-1/4 px-4 mb-4">
        <div class="bg-white p-4">
          <h2 class="text-xl font-bold mb-2">Categories</h2>
          <ul>
            <li class="mb-1"><a href="#" class="text-gray-500 hover:text-gray-700">Sports</a></li>
            <li class="mb-1"><a href="#" class="text-gray-500 hover:text-gray-700">Politics</a></li>
            <li class="mb-1"><a href="#" class="text-gray-500 hover:text-gray-700">Technology</a></li>
          </ul>
        </div>
      </div>

      <!-- Article Area -->
      <div class="w-full md:w-3/4 px-4 mb-4">
        <div class="bg-white p-4">
          <h2 class="text-xl font-bold mb-2">Latest Articles</h2>
          <!-- Article 1 -->
          <div class="mb-4">
            <h3 class="text-lg font-bold mb-2">Article Title</h3>
            <p>Article summary goes here.</p>
          </div>
          <!-- Article 2 -->
          <div class="mb-4">
            <h3 class="text-lg font-bold mb-2">Article Title</h3>
            <p>Article summary goes here.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="w-full bg-white p-4">
      <h2 class="text-xl font-bold mb-2">Latest News Updates</h2>
      <!-- News Update 1 -->
      <div class="mb-4">
        <h3 class="text-lg font-bold mb-2">News Update Title</h3>
        <p>News update summary goes here.</p>
      </div>
      <!-- News Update 2 -->
      <div class="mb-4">
        <h3 class="text-lg font-bold mb-2">News Update Title</h3>
        <p>News update summary goes here.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* No styles needed for this example */
</style>