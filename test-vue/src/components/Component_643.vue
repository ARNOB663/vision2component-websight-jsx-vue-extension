<template>
  <header class="bg-white p-6 flex justify-center">
    <img src="https://picsum.photos/300/300?image=45" alt="Construction Company Logo" class="h-16">
  </header>

  <section class="py-10">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold mb-6 text-center">Welcome to Our Construction Company</h1>
      <p class="text-lg text-center mb-10">
        We are a professional and industrial design company dedicated to creating unique and innovative structures. Our team of experienced architects, engineers, and designers work together to bring your vision to life. We specialize in a wide range of construction projects, from residential to commercial, industrial, and more. Whether you're looking for a new office building, a renovation of your home, or a custom design for your business, we're here to help.
      </p>
      <div class="flex justify-center">
        <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Contact Us
        </button>
      </div>
    </div>
  </section>

  <section class="py-10">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold mb-6 text-center">Our Projects</h2>
      <div class="flex flex-wrap -mx-2">
        <div class="w-full md:w-1/2 lg:w-1/3 p-2" v-for="(project, index) in projects" :key="index">
          <img :src="`https://picsum.photos/900/600?image=${project.image}`" :alt="project.title" class="w-full">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  { title: 'Project 1', image: '46' },
  // Add more projects as needed
]
</script>