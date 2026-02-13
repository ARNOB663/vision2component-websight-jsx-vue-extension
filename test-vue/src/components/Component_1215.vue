<template>
  <div class="parallax" :style="{ backgroundImage: 'url(https://static.photos/travel/1600x900/16.webp)' }">
    <div class="text-center pt-16">
      <h1 class="text-4xl text-white">Welcome to our Travel Agency</h1>
      <p class="text-xl text-white">We are a travel agency that specializes in creating unforgettable experiences for our clients.</p>
    </div>
  </div>

  <div class="flex justify-center mt-8">
    <div class="w-1/2">
      <div v-for="(section, index) in sections" :key="index" class="section">
        <h2 class="text-2xl">{{ section.title }}</h2>
        <p>{{ section.description }}</p>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Call to Action
        </button>
      </div>
    </div>
  </div>

  <div class="flex justify-center mt-8">
    <div class="w-1/2">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const sections = [
  { title: 'Section 1', description: 'This is the first section of our website.' },
  { title: 'Section 2', description: 'This is the second section of our website.' },
  { title: 'Section 3', description: 'This is the third section of our website.' }
]
</script>

<style scoped>
.parallax {
  height: 100vh;
  background-size: cover;
  background-position: center;
}
.section {
  margin-bottom: 2rem;
}
</style>