<template>
  <div class="bg-gray-100">
    <header class="bg-white p-4 flex justify-between items-center">
      <img src="https://static.photos/architecture/300x300/21.webp" alt="Logo" class="h-10">
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">About</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Portfolio</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="py-8">
      <section class="container mx-auto">
        <h1 class="text-4xl text-center mb-8">Welcome to Our Architecture Firm</h1>
        <p class="text-center mb-8">
          We are a team of experienced architects dedicated to creating beautiful, functional spaces that reflect the unique needs and aspirations of our clients. Our portfolio showcases a diverse range of projects, from modern residences to traditional homes, from commercial buildings to public spaces. We believe in the power of design to transform the world around us, and we are committed to using our skills and expertise to make a positive impact on the world.
        </p>
      </section>

      <section class="container mx-auto grid grid-cols-3 gap-4">
        <!-- Add your portfolio items here -->
      </section>
    </main>

    <footer class="bg-gray-800 text-white text-center p-4">
      <p>© 2022 Architecture Firm. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>