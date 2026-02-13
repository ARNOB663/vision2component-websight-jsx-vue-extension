<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img class="w-full md:w-1/3 p-5" src="https://static.photos/art/900x600/38.webp" alt="Art Gallery">
        <div class="w-full md:w-2/3 p-5">
          <h1 class="text-3xl font-bold">Welcome to our Art Gallery</h1>
          <p class="text-lg">
            At our Art Gallery, we believe that art is a universal language that connects people from all walks of life. Our mission is to provide a space where artists can showcase their work and for art lovers to appreciate and enjoy the beauty of art.
          </p>
        </div>
      </div>
    </header>
    <main class="flex-grow">
      <div class="container mx-auto px-5 py-6 lg:py-12">
        <div class="flex flex-wrap -mx-2 overflow-hidden">
          <div class="my-2 px-2 w-full md:w-1/3">
            <h2 class="text-2xl font-bold">Artist Bios</h2>
            <!-- Artist bios go here -->
          </div>
          <div class="my-2 px-2 w-full md:w-2/3">
            <h2 class="text-2xl font-bold">Upcoming Exhibitions</h2>
            <!-- Upcoming exhibitions go here -->
          </div>
        </div>
      </div>
    </main>
    <footer class="bg-white">
      <div class="container mx-auto px-8">
        <div class="w-full flex flex-col md:flex-row py-6">
          <div class="flex-1 mb-6">
            <h2 class="text-2xl font-bold">Sign up for our newsletter</h2>
            <!-- Newsletter sign-up form goes here -->
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-bold">Follow us on social media</h2>
            <!-- Social media icons go here -->
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Your script logic goes here
</script>

<style scoped>
/* Your scoped styles go here */
</style>