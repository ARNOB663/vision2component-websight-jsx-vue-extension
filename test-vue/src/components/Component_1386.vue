<template>
  <header class="relative">
    <img src="https://picsum.photos/900/600?image=188" alt="Header Image" class="w-full">
    <div class="absolute inset-0 flex items-center justify-center">
      <img src="https://picsum.photos/300/300?image=189" alt="Logo" class="h-16">
    </div>
  </header>

  <nav class="container mx-auto px-4 py-4">
    <ul class="flex justify-center space-x-8">
      <li><a href="#" class="text-gray-800 hover:text-gray-600">Home</a></li>
      <li><a href="#" class="text-gray-800 hover:text-gray-600">About</a></li>
      <li><a href="#" class="text-gray-800 hover:text-gray-600">Projects</a></li>
      <li><a href="#" class="text-gray-800 hover:text-gray-600">Contact</a></li>
    </ul>
  </nav>

  <section class="container mx-auto px-4 py-8">
    <h2 class="text-3xl text-center mb-8">Welcome to Our Architecture Firm</h2>
    <p class="text-lg text-center mb-8">
      We are a professional architecture firm dedicated to creating unique and innovative designs. Our team of experienced architects and designers work closely with our clients to understand their needs and translate them into stunning, functional designs. We believe in the power of design to transform spaces and create lasting impressions. Whether you're looking for a new home, a commercial building, or a renovation project, we're here to help.
    </p>
  </section>

  <section class="container mx-auto px-4 py-8">
    <h2 class="text-3xl text-center mb-8">Our Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(project, index) in projects" :key="index" class="bg-white p-4">
        <img :src="`https://picsum.photos/900/600?image=${project.image}`" :alt="project.title" class="w-full">
        <h3 class="text-xl mt-2">{{ project.title }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  { title: 'Project 1', image: '190' },
  // Add more projects as needed
]
</script>