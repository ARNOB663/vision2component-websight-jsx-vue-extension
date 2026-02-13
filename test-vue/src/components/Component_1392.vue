<template>
  <div class="font-sans leading-normal tracking-normal">
    <header class="w-full h-64 bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/technology/1600x900/193.webp)' }">
      <nav class="fixed top-0 right-0 p-4">
        <a href="#section1" class="text-white mr-4">Section 1</a>
        <a href="#section2" class="text-white mr-4">Section 2</a>
        <a href="#section3" class="text-white">Section 3</a>
      </nav>
    </header>
    <main class="container mx-auto px-4 py-12">
      <section id="section1" class="mb-12">
        <h2 class="text-3xl mb-4">Section 1</h2>
        <p class="mb-4">At our technology company, we are dedicated to providing innovative and efficient solutions for our clients. Our team of experts is committed to delivering high-quality products and services that meet the needs of our clients.</p>
      </section>
      <section id="section2" class="mb-12">
        <h2 class="text-3xl mb-4">Section 2</h2>
        <p class="mb-4">We are committed to staying at the forefront of technological advancements. Our team of experts is constantly researching and developing new technologies to provide our clients with the most cutting-edge solutions.</p>
      </section>
      <section id="section3">
        <h2 class="text-3xl mb-4">Section 3</h2>
        <p class="mb-4">Our mission is to make technology accessible and understandable to everyone. We believe that technology should be used to improve people's lives, not just to make profits.</p>
      </section>
    </main>
  </div>
</template>

<script setup>
// No script needed for this simple example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>