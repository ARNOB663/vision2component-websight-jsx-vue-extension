<template>
  <div class="bg-black text-white">
    <div class="container mx-auto p-4">
      <h1 class="text-4xl text-center mb-4">Art Gallery</h1>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="(art, index) in arts" :key="index" class="bg-white rounded-lg overflow-hidden shadow-lg">
          <img class="w-full" :src="'https://picsum.photos/seed/344/900/600'" :alt="'Art ' + (index + 1)">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ art.title }}</div>
            <p class="text-gray-700 text-base">{{ art.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const arts = [
  {
    title: 'Art 1',
    description: 'This is a beautiful piece of art. It is a representation of the beauty of nature. The artist has captured the essence of the beauty of the forest in this piece.',
    src: 'https://picsum.photos/seed/344/900/600'
  },
  // Add more art pieces as needed
]
</script>