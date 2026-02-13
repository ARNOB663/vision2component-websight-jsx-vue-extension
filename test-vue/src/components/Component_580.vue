<template>
  <header class="bg-yellow-500 h-96 flex items-center justify-center">
    <h1 class="text-white text-4xl">Welcome to Our Technology Company</h1>
  </header>

  <nav class="bg-yellow-500 text-white p-4">
    <ul class="flex space-x-4 justify-center">
      <li><a href="#">Home</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Solutions</a></li>
      <li><a href="#">Testimonials</a></li>
    </ul>
  </nav>

  <main class="max-w-6xl mx-auto p-4">
    <section class="flex space-x-4">
      <div class="w-1/3 p-4 bg-white rounded shadow">
        <h2 class="text-2xl mb-4">Services</h2>
        <p>We offer a wide range of services including software development, data analysis, and cybersecurity.</p>
      </div>

      <div class="w-1/3 p-4 bg-white rounded shadow">
        <h2 class="text-2xl mb-4">Solutions</h2>
        <p>We provide innovative solutions to meet your business needs. Our solutions are tailored to your specific needs.</p>
      </div>

      <div class="w-1/3 p-4 bg-white rounded shadow">
        <h2 class="text-2xl mb-4">Testimonials</h2>
        <p>See what our customers are saying about our services and solutions.</p>
      </div>
    </section>
  </main>

  <footer class="bg-yellow-500 text-white p-4 text-center">
    <p>© 2022 Our Technology Company. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>