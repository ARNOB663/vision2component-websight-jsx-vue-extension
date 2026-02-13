<template>
  <div class="bg-yellow-900 text-white">
    <div class="container mx-auto px-4 py-8">
      <header class="mb-8">
        <h1 class="text-4xl font-bold text-green-500">Educational Institution</h1>
      </header>

      <main class="flex flex-wrap">
        <aside class="w-full md:w-1/4 p-4">
          <h2 class="text-2xl font-bold mb-4">Course Information</h2>
          <!-- Course information goes here -->
        </aside>

        <section class="w-full md:w-3/4 p-4">
          <h2 class="text-2xl font-bold mb-4">Classrooms, Teachers, and Students</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="bg-blue-700 rounded-lg overflow-hidden">
              <img src="https://static.photos/education/900x600/117.webp" alt="Classroom" class="w-full h-auto">
            </div>
            <div class="bg-green-700 rounded-lg overflow-hidden">
              <img src="https://static.photos/education/900x600/118.webp" alt="Teacher" class="w-full h-auto">
            </div>
            <div class="bg-blue-700 rounded-lg overflow-hidden">
              <img src="https://static.photos/education/900x600/119.webp" alt="Student" class="w-full h-auto">
            </div>
          </div>
        </section>
      </main>

      <footer class="mt-8">
        <h2 class="text-2xl font-bold mb-4">Contact Information and Upcoming Events</h2>
        <!-- Contact information and upcoming events go here -->
      </footer>
    </div>
  </div>
</template>

<script setup>
// Your script logic goes here
</script>

<style scoped>
/* Add any scoped styles here */
</style>