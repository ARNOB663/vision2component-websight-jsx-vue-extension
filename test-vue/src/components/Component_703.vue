<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="w-full h-64 bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/art/1600x900/104.webp)' }">
      <nav class="bg-gray-800 text-white p-4">
        <ul class="flex space-x-4">
          <li><a href="#">Home</a></li>
          <li><a href="#">Artists</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main class="container mx-auto p-4">
      <h1 class="text-3xl mb-4">Featured Artists</h1>
      <p class="mb-4">
        Art is a diverse range of human activities involving the creation of visual, auditory or performing artifacts, expressing the author's imaginative or technical skill, intended to be appreciated for their beauty or emotional power.
      </p>
      <h1 class="text-3xl mb-4">Featured Works</h1>
      <p class="mb-4">
        The works featured in this gallery are a testament to the creativity and skill of our artists. Each piece is a unique expression of the artist's vision and the beauty of the human spirit.
      </p>
    </main>
    <footer class="bg-gray-800 text-white p-4">
      <p>© 2022 Art Gallery. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this basic structure
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>