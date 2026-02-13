<template>
  <header class="bg-green-500 text-white p-4">
    <nav class="flex justify-between">
      <div>
        <a href="#" class="mr-4">Home</a>
        <a href="#" class="mr-4">News</a>
        <a href="#" class="mr-4">Sports</a>
      </div>
      <div>
        <a href="#" class="mr-4">Login</a>
        <a href="#">Sign Up</a>
      </div>
    </nav>
  </header>

  <section class="w-full h-96 bg-cover bg-center" style="background-image: url('https://picsum.photos/1600/900')"></section>

  <main class="container mx-auto p-4">
    <div class="flex flex-wrap -mx-4">
      <div v-for="(article, index) in articles" :key="index" class="w-full md:w-1/3 p-4">
        <img :src="'https://picsum.photos/900/600'" alt="Article Image" class="mb-4">
        <h2 class="text-xl font-bold mb-2">{{ article.title }}</h2>
        <p class="mb-4">{{ article.summary }}</p>
        <a href="#" class="bg-green-500 text-white px-4 py-2">Read More</a>
      </div>
    </div>
  </main>
</template>

<script setup>
const articles = [
  {
    image: 'https://picsum.photos/900/600',
    title: 'Article Headline',
    summary: 'This is a brief summary of the article. It provides a brief overview of the main points of the article.'
  },
  {
    image: 'https://picsum.photos/900/600',
    title: 'Article Headline',
    summary: 'This is a brief summary of the article. It provides a brief overview of the main points of the article.'
  },
  {
    image: 'https://picsum.photos/900/600',
    title: 'Article Headline',
    summary: 'This is a brief summary of the article. It provides a brief overview of the main points of the article.'
  }
]
</script>