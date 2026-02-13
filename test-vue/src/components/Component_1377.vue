<template>
  <header class="w-full h-64 bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/people/1600x900/178.webp)' }">
    <nav class="container mx-auto px-6 py-4">
      <ul class="flex justify-between">
        <li><a href="#campaigns" class="text-white">Campaigns</a></li>
        <li><a href="#stories" class="text-white">Stories</a></li>
        <li><a href="#volunteer" class="text-white">Volunteer</a></li>
        <li><a href="#donate" class="text-white">Donate</a></li>
      </ul>
    </nav>
  </header>

  <main class="container mx-auto px-6 py-4">
    <section id="campaigns" class="my-8">
      <h2 class="text-2xl">Our Campaigns</h2>
      <!-- Campaigns content here -->
    </section>

    <section id="stories" class="my-8">
      <h2 class="text-2xl">Stories</h2>
      <div class="flex justify-between">
        <!-- Stories content here -->
      </div>
    </section>

    <section id="volunteer" class="my-8">
      <h2 class="text-2xl">Volunteer Opportunities</h2>
      <div class="flex justify-between">
        <!-- Volunteer opportunities content here -->
      </div>
    </section>

    <section id="donate" class="my-8">
      <h2 class="text-2xl">Donate</h2>
      <!-- Donate content here -->
    </section>
  </main>

  <footer class="container mx-auto px-6 py-4 bg-gray-800 text-white">
    <!-- Footer content here -->
  </footer>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>