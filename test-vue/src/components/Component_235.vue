<template>
  <div class="container mx-auto px-4 py-8 bg-gray-100">
    <h1 class="text-3xl font-bold mb-4">Welcome to Our Technology News Website</h1>
    <p class="mb-8">
      At our technology news website, we provide the latest news and updates on the latest advancements in technology. We cover a wide range of topics, from the latest hardware and software developments to the latest trends in artificial intelligence and machine learning. Our team of experienced journalists and researchers are dedicated to providing accurate and timely information to our readers. Whether you're a tech enthusiast, a business professional, or just someone who's interested in the latest developments in the tech world, we've got you covered.
    </p>
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/3 px-4 mb-8" v-for="(article, index) in articles" :key="index">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img class="w-full" :src="'https://picsum.photos/seed/235/900/600'" :alt="article.title">
          <div class="p-4">
            <h2 class="text-xl font-bold mb-2">{{ article.title }}</h2>
            <p class="text-gray-700">
              {{ article.summary }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const articles = [
  {
    title: 'Article Title',
    image: 'https://picsum.photos/seed/235/900/600',
    summary: 'Article summary goes here. This should be a brief overview of the article\'s content.'
  },
  // Add more articles as needed
]
</script>