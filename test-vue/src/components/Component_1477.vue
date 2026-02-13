<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white text-center p-4">
      <img src="https://static.photos/art/300x300/79.webp" alt="Art Gallery Logo" class="w-16 h-16 mx-auto">
      <nav class="mt-4">
        <ul class="flex justify-center space-x-4">
          <li><a href="#exhibitions" class="text-purple-500 hover:text-purple-700">Exhibitions</a></li>
          <li><a href="#artists" class="text-purple-500 hover:text-purple-700">Artists</a></li>
          <li><a href="#contact" class="text-purple-500 hover:text-purple-700">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="container mx-auto p-4">
      <section id="exhibitions" class="mt-8">
        <h2 class="text-2xl mb-4">Exhibitions</h2>
        <p class="text-lg">Discover our forthcoming exhibitions.</p>
      </section>

      <section id="artists" class="mt-8">
        <h2 class="text-2xl mb-4">Artists</h2>
        <p class="text-lg">Meet our talented artists.</p>
      </section>

      <section id="contact" class="mt-8">
        <h2 class="text-2xl mb-4">Contact</h2>
        <p class="text-lg">Get in touch with us.</p>
      </section>
    </main>
  </div>
</template>

<script setup>
// No script needed for this basic template
</script>