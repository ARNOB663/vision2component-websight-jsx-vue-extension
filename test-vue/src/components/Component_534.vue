<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white shadow">
      <div class="container mx-auto flex flex-col items-center justify-between p-4 md:flex-row">
        <div class="flex flex-col items-center justify-between">
          <img src="https://static.photos/restaurant/300x300/136.webp" alt="Logo" class="w-12 h-12">
          <p class="text-gray-600">Contact Information</p>
        </div>
      </div>
    </header>
    <main class="flex-grow">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/4 px-4">
            <nav class="bg-white shadow mb-4">
              <ul class="list-reset">
                <li class="border-b border-gray-200">
                  <a href="#" class="block p-4 no-underline hover:bg-gray-200">Category 1</a>
                </li>
                <li class="border-b border-gray-200">
                  <a href="#" class="block p-4 no-underline hover:bg-gray-200">Category 2</a>
                </li>
                <!-- Add more categories as needed -->
              </ul>
            </nav>
          </div>
          <div class="w-full md:w-3/4 px-4">
            <!-- Add your image slider here -->
          </div>
        </div>
      </div>
    </main>
    <footer class="bg-white">
      <div class="container mx-auto px-4 py-8">
        <p class="text-gray-600 text-center">© 2022 Your Restaurant Name. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Add your script logic here if needed
</script>

<style scoped>
/* Add your custom styles here */
</style>