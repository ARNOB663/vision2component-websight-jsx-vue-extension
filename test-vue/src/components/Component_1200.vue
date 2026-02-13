<template>
  <div class="bg-stone-500 text-stone-900 flex h-screen w-full overflow-hidden">
    <nav class="w-1/6 bg-stone-300 p-4">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <main class="w-5/6 p-4">
      <section id="about" class="mb-4">
        <h1 class="text-3xl mb-2">About Us</h1>
        <p class="mb-2">
          We are a construction company dedicated to creating beautiful, functional spaces that enhance the quality of life for our clients. Our team of experienced professionals uses the latest technology and materials to ensure that every project is completed to the highest standards.
        </p>
        <img src="https://static.photos/architecture/900x600/2.webp" alt="Construction Site" class="mb-2">
      </section>
      <section id="services" class="mb-4">
        <h1 class="text-3xl mb-2">Our Services</h1>
        <p class="mb-2">
          We offer a wide range of services including home renovations, new construction, commercial and industrial projects, and more. We are committed to providing our clients with the best possible service and support throughout the entire process.
        </p>
        <img src="https://static.photos/architecture/900x600/3.webp" alt="Construction Tools" class="mb-2">
      </section>
      <!-- Add more sections as needed -->
    </main>
  </div>
</template>

<script setup>
// No script setup needed for this example
</script>

<style scoped>
/* Additional custom styles can be added here */
</style>