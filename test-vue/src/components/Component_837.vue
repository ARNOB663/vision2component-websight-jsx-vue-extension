<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(\'https://static.photos/architecture/1600x900/38.webp\')' }">
    <div class="flex items-center justify-center h-full text-center">
      <div>
        <img class="h-16" src="https://static.photos/architecture/300x300/39.webp" alt="Construction Company Logo">
        <nav class="mt-8">
          <a class="text-white mx-4" href="#services">Services</a>
          <a class="text-white mx-4" href="#projects">Projects</a>
          <a class="text-white mx-4" href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  </header>

  <main>
    <section id="services" class="py-12">
      <h2 class="text-4xl text-center">Our Services</h2>
      <p class="text-xl text-center mt-8">We provide a wide range of construction services including residential, commercial, and industrial projects. Our team of experienced professionals is dedicated to delivering high-quality work on time and within budget.</p>
      <button class="block mx-auto mt-8 px-4 py-2 text-white bg-yellow-500 rounded">Learn More</button>
    </section>

    <section id="projects" class="py-12">
      <h2 class="text-4xl text-center">Our Projects</h2>
      <p class="text-xl text-center mt-8">We have completed numerous projects across the country. From small renovations to large commercial buildings, our team has the skills and experience to deliver successful projects.</p>
      <button class="block mx-auto mt-8 px-4 py-2 text-white bg-yellow-500 rounded">View Projects</button>
    </section>

    <section id="contact" class="py-12">
      <h2 class="text-4xl text-center">Contact Us</h2>
      <p class="text-xl text-center mt-8">Ready to start your next project? Contact us today to discuss your needs and we'll get back to you as soon as possible.</p>
      <button class="block mx-auto mt-8 px-4 py-2 text-white bg-yellow-500 rounded">Get in Touch</button>
    </section>
  </main>
</template>

<script setup>
// No script needed for this simple example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>