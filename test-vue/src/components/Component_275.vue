<template>
  <header class="bg-white text-center">
    <img src="https://picsum.photos/seed/275/300/300" alt="Healthcare Logo" class="w-1/3 mx-auto">
    <nav class="container mx-auto px-6 py-4">
      <ul class="flex justify-around">
        <li><a href="#services" class="text-pink-500 hover:text-pink-800">Our Services</a></li>
        <li><a href="#facilities" class="text-pink-500 hover:text-pink-800">Facilities</a></li>
        <li><a href="#testimonials" class="text-pink-500 hover:text-pink-800">Testimonials</a></li>
      </ul>
    </nav>
  </header>

  <main class="container mx-auto px-6 py-4">
    <section id="services" class="my-8">
      <h2 class="text-2xl">Our Services</h2>
      <p class="my-4">We provide a wide range of healthcare services to meet your needs. From primary care to specialty care, we have the expertise to help you.</p>
    </section>

    <section id="facilities" class="my-8">
      <h2 class="text-2xl">Facilities</h2>
      <p class="my-4">Our facilities are state-of-the-art and equipped with the latest technology. We strive to provide a comfortable and safe environment for our patients.</p>
    </section>

    <section id="testimonials" class="my-8">
      <h2 class="text-2xl">Testimonials</h2>
      <!-- Testimonials content goes here -->
    </section>
  </main>

  <footer class="bg-white text-center text-gray-500 p-4 absolute bottom-0 w-full">
    <p>© 2022 Healthcare Services. All rights reserved.</p>
    <!-- Footer links and contact information go here -->
  </footer>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>