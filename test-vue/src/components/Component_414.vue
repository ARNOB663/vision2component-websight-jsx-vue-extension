<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white p-4 shadow">
      <nav class="flex justify-between">
        <div>
          <a href="#" class="text-gray-900 hover:text-yellow-500">Home</a>
          <a href="#" class="ml-4 text-gray-900 hover:text-yellow-500">Artists</a>
          <a href="#" class="ml-4 text-gray-900 hover:text-yellow-500">Exhibitions</a>
        </div>
        <div>
          <a href="#" class="text-gray-900 hover:text-yellow-500">Login</a>
          <a href="#" class="ml-4 text-gray-900 hover:text-yellow-500">Sign Up</a>
        </div>
      </nav>
    </header>

    <main class="container mx-auto p-4">
      <section class="my-8">
        <h1 class="text-3xl font-bold">Welcome to Our Art Gallery</h1>
        <p class="my-4">
          We are a premier art gallery dedicated to showcasing the best of contemporary art. Our collection features a diverse range of artists, from established masters to rising talents, all working in a variety of mediums.
        </p>
        <p class="my-4">
          We believe in the power of art to inspire, educate, and connect people. Our mission is to provide a space where artists can exhibit their work, and where the public can appreciate and enjoy the art.
        </p>
      </section>

      <!-- Add your slider and other sections here -->
      <section class="mt-8">
        <h2 class="text-2xl font-bold mb-4">Featured Artists</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="artist in artists" :key="artist.id" class="bg-white rounded-lg overflow-hidden shadow-md">
            <img :src="'https://static.photos/art/900x600/16.webp'" alt="Artist Image" class="w-full h-48 object-cover">
            <div class="px-4 py-2">
              <h3 class="text-xl font-semibold">{{ artist.name }}</h3>
              <p class="text-gray-700">{{ artist.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-8">
        <h2 class="text-2xl font-bold mb-4">Upcoming Exhibitions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="exhibition in exhibitions" :key="exhibition.id" class="bg-white rounded-lg overflow-hidden shadow-md">
            <img :src="'https://static.photos/art/900x600/17.webp'" alt="Exhibition Image" class="w-full h-48 object-cover">
            <div class="px-4 py-2">
              <h3 class="text-xl font-semibold">{{ exhibition.title }}</h3>
              <p class="text-gray-700">{{ exhibition.date }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-white p-4 shadow">
      <p class="text-center text-gray-900">
        &copy; 2022 Art Gallery. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<script setup>
const artists = [
  { id: 1, name: 'John Doe', description: 'A renowned painter known for his abstract works.' },
  { id: 2, name: 'Jane Smith', description: 'An emerging sculptor whose pieces challenge traditional forms.' }
];

const exhibitions = [
  { id: 1, title: 'Modern Masters', date: 'September 1 - October 30' },
  { id: 2, title: 'Rising Talents', date: 'October 15 - November 15' }
];
</script>