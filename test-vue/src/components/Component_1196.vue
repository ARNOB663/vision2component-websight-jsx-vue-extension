<template>
  <nav class="fixed w-full bg-white shadow-md">
    <div class="container mx-auto px-4 py-2">
      <h1 class="text-lg font-bold">E-learning Site for Professionals</h1>
    </div>
  </nav>

  <main class="container mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold mb-4">Welcome to our e-learning site</h2>
    <p class="mb-4">
      At our e-learning site, we offer a wide range of courses designed to help professionals enhance their skills and knowledge. Whether you're looking to advance your career, learn a new skill, or simply expand your knowledge, we have a course for you.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(course, index) in courses" :key="index" class="bg-white shadow-md rounded-lg overflow-hidden">
        <img :src="'https://static.photos.business/900x600/198.webp'" :alt="course.title" class="w-full">
        <div class="p-4">
          <h3 class="text-lg font-bold mb-2">{{ course.title }}</h3>
          <p class="text-gray-700">{{ course.description }}</p>
          <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Start Learning</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const courses = [
  {
    title: "Business Course",
    description: "This course is designed to help professionals enhance their knowledge and skills in the field of business.",
    image: "https://static.photos.business/900x600/198.webp"
  },
  // Add more courses as needed
]
</script>