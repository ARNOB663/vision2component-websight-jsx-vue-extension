<template>
  <div class="bg-yellow-100">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 p-4">
          <img src="https://picsum.photos/900/600?image=38" alt="Food Image" class="w-full">
        </div>
        <div class="w-full md:w-1/2 p-4">
          <h1 class="text-3xl font-bold mb-4">Welcome to our Food Blog</h1>
          <p class="text-lg mb-4">
            We are a food company dedicated to providing the best food in the world. Our mission is to make food accessible and enjoyable for everyone. We believe that food is not just a meal, but a passion.
          </p>
          <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/2 lg:w-1/3 p-4" v-for="(post, index) in blogPosts" :key="index">
          <img :src="'https://picsum.photos/900/600?image=38'" :alt="`Blog Image ${index + 1}`" class="w-full mb-4">
          <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
          <p class="text-gray-700 mb-2">
            Author: {{ post.author }}
          </p>
          <p class="text-gray-700">
            Date: {{ post.date }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const blogPosts = [
  {
    image: 'https://picsum.photos/900/600?image=39',
    title: 'Blog Post Title',
    author: 'John Doe',
    date: '01/01/2020'
  },
  // Add more blog posts as needed
]
</script>