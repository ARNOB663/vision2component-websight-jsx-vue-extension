<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://picsum.photos/seed/144/1600/900)' }">
    <div class="flex items-center justify-center h-full">
      <div class="text-center">
        <h1 class="text-5xl text-white font-bold mb-4">Welcome to Our Education Platform</h1>
        <p class="text-xl text-white mb-6">We offer a wide range of courses to help you reach your educational goals.</p>
        <a href="#" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Enroll Now</a>
      </div>
    </div>
  </header>

  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-3/4 pr-0 lg:pr-4">
        <h2 class="text-3xl font-bold mb-4">Featured Courses</h2>
        <!-- Featured courses go here -->
      </div>

      <div class="w-full lg:w-1/4 pl-0 lg:pl-4">
        <h2 class="text-3xl font-bold mb-4">Course Categories</h2>
        <!-- Course categories go here -->

        <h2 class="text-3xl font-bold mb-4 mt-8">Pricing Information</h2>
        <!-- Pricing information goes here -->
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>