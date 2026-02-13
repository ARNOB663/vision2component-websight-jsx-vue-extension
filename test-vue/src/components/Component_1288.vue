<template>
  <header class="bg-purple-500 text-white p-4 flex justify-between items-center">
    <img src="https://static.photos/architecture/300x300/90.webp" alt="Logo" class="h-10">
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#services" class="hover:underline">Services</a></li>
        <li><a href="#testimonials" class="hover:underline">Testimonials</a></li>
        <li><a href="#projects" class="hover:underline">Projects</a></li>
        <li><a href="#contact" class="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="max-w-4xl mx-auto my-8 px-4">
    <section id="services" class="mb-8">
      <h2 class="text-2xl mb-4">Our Services</h2>
      <p class="mb-4">We offer a wide range of construction services including design and planning, project management, and construction.</p>
      <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
    </section>

    <section id="projects" class="mb-8">
      <h2 class="text-2xl mb-4">Our Projects</h2>
      <div class="grid grid-cols-2 gap-4">
        <img src="https://static.photos/architecture/900x600/91.webp" alt="Project 1">
        <img src="https://static.photos/architecture/900x600/92.webp" alt="Project 2">
        <img src="https://static.photos/architecture/900x600/93.webp" alt="Project 3">
        <img src="https://static.photos/architecture/900x600/94.webp" alt="Project 4">
      </div>
    </section>
  </main>

  <footer class="bg-purple-500 text-white p-4 text-center">
    <p>Contact us at info@constructioncompany.com</p>
    <p>Follow us on <a href="#" class="text-white hover:underline">Facebook</a> and <a href="#" class="text-white hover:underline">Twitter</a></p>
  </footer>
</template>

<script setup>
// No script needed for this simple example
</script>