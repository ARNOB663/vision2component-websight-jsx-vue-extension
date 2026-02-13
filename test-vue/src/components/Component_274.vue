<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://picsum.photos/seed/274/1600/900)' }">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Fine Art Gallery</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#artworks" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Artworks
          </a>
          <a href="#events" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Events
          </a>
          <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  </header>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-3xl text-center mb-8">Welcome to our Fine Art Gallery</h1>
    <p class="text-lg mb-8">
      At our Fine Art Gallery, we are dedicated to showcasing the best of modern art. Our collection features a diverse range of artists, from established masters to rising talents, all working in a variety of mediums. We believe that art is not just a painting or a sculpture, but a universal language that can connect people from all walks of life.
    </p>
    <section id="artworks">
      <h2 class="text-2xl text-center mb-8">Our Artworks</h2>
      <!-- Artwork grid will go here -->
    </section>
    <section id="events">
      <h2 class="text-2xl text-center mb-8">Upcoming Events</h2>
      <!-- Event list will go here -->
    </section>
    <section id="contact">
      <h2 class="text-2xl text-center mb-8">Contact Us</h2>
      <!-- Contact form will go here -->
    </section>
  </main>
  <footer class="bg-gray-800 text-white text-center py-8">
    <p>© 2022 Fine Art Gallery. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>