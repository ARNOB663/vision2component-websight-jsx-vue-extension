<template>
  <header class="bg-white shadow">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!-- Logo -->
          <div class="flex items-center py-4">
            <img src="https://static.photos/people/300x300/122.webp" alt="Logo" class="h-8">
          </div>
        </div>
        <!-- Navigation -->
        <div class="flex items-center space-x-1">
          <a href="#" class="px-4 py-5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-200 focus:outline-none focus:shadow-outline">Home</a>
          <a href="#" class="px-4 py-5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-200 focus:outline-none focus:shadow-outline">About</a>
          <a href="#" class="px-4 py-5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-200 focus:outline-none focus:shadow-outline">Contact</a>
        </div>
      </div>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-4 py-8">
    <!-- Main content -->
    <div class="flex flex-wrap -mx-2 overflow-hidden">
      <div class="my-2 px-2 w-full md:w-1/2 lg:w-1/3">
        <!-- Latest posts -->
        <h2 class="text-2xl font-bold mb-4">Latest Posts</h2>
        <!-- Posts will go here -->
      </div>
      <div class="my-2 px-2 w-full md:w-1/2 lg:w-1/3">
        <!-- User profiles -->
        <h2 class="text-2xl font-bold mb-4">User Profiles</h2>
        <!-- Profiles will go here -->
      </div>
      <div class="my-2 px-2 w-full md:w-1/2 lg:w-1/3">
        <!-- Trending topics -->
        <h2 class="text-2xl font-bold mb-4">Trending Topics</h2>
        <!-- Topics will go here -->
      </div>
    </div>
  </main>

  <footer class="bg-white shadow">
    <div class="max-w-6xl mx-auto px-4 py-8">
      <!-- Footer content -->
      <div class="flex flex-wrap -mx-2">
        <div class="my-2 px-2 w-full md:w-1/2 lg:w-1/3">
          <!-- Help resources -->
          <h2 class="text-2xl font-bold mb-4">Help Resources</h2>
          <!-- Resources will go here -->
        </div>
        <div class="my-2 px-2 w-full md:w-1/2 lg:w-1/3">
          <!-- Community guidelines -->
          <h2 class="text-2xl font-bold mb-4">Community Guidelines</h2>
          <!-- Guidelines will go here -->
        </div>
        <div class="my-2 px-2 w-full md:w-1/2 lg:w-1/3">
          <!-- Legal information -->
          <h2 class="text-2xl font-bold mb-4">Legal Information</h2>
          <!-- Information will go here -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Your script logic goes here
</script>

<style scoped>
/* Your scoped styles go here */
</style>