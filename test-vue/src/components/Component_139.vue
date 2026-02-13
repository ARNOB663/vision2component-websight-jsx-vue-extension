<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-center bg-cover bg-no-repeat bg-gray-800 text-white" :style="{ backgroundImage: 'url(https://picsum.photos/seed/139/1600/900)' }">
      <div class="container mx-auto flex flex-col px-5 py-5 md:flex-row">
        <div class="flex items-center justify-center md:justify-start">
          <h1 class="font-bold text-xl">Medical Clinic</h1>
        </div>
        <nav class="flex-col flex-grow pt-5 md:pt-0 md:flex-row md:justify-end md:space-x-2">
          <a class="hover:text-purple-200" href="#">Home</a>
          <a class="hover:text-purple-200" href="#">About</a>
          <a class="hover:text-purple-200" href="#">Services</a>
          <a class="hover:text-purple-200" href="#">Contact</a>
        </nav>
      </div>
    </header>
    <main class="container mx-auto flex-1 px-5 py-5">
      <section>
        <h2 class="text-2xl">Welcome to Medical Clinic</h2>
        <p class="py-5">
          At Medical Clinic, we are committed to providing the highest quality of care to our patients. Our team of experienced doctors and staff are dedicated to providing compassionate, professional care that is both effective and efficient. We believe in the power of early detection and prevention, and we are committed to helping our patients maintain their health and well-being.
        </p>
      </section>
      <!-- Add more sections as needed -->
    </main>
    <footer class="bg-gray-800 text-white text-center py-5">
      <p>&copy; 2022 Medical Clinic. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No script setup needed for this example
</script>

<style scoped>
/* Tailwind CSS styles are automatically included via CDN */
</style>