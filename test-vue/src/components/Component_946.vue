<template>
  <header class="w-full h-64 bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/architecture/1600x900/147.webp)' }"></header>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-wrap -mx-4">
      <main class="w-full md:w-3/4 px-4">
        <h1 class="text-4xl font-bold mb-4">About Our Firm</h1>
        <p class="mb-4">
          We are a dynamic and innovative architecture firm, dedicated to creating unique and sustainable designs. Our team of experienced architects, engineers, and designers work closely with our clients to understand their needs and translate them into stunning architectural designs. We believe in the power of design to transform spaces, communities, and cities. Our firm is committed to creating a better world, one building at a time.
        </p>
      </main>
      <aside class="w-full md:w-1/4 px-4">
        <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
        <form class="mb-4">
          <input class="block w-full mb-2" type="text" placeholder="Name">
          <input class="block w-full mb-2" type="email" placeholder="Email">
          <textarea class="block w-full mb-2" placeholder="Message"></textarea>
          <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
        <h2 class="text-2xl font-bold mb-4">Featured Projects</h2>
        <!-- Featured projects go here -->
      </aside>
    </div>
  </div>
</template>

<script setup>
// Your script setup logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>