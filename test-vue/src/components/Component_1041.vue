<template>
  <div class="bg-gradient-to-r from-green-400 to-indigo-500">
    <div class="container mx-auto px-4 py-8">
      <header class="flex justify-center items-center h-64">
        <h1 class="text-4xl text-white">News Media Company</h1>
      </header>
      <main class="flex flex-wrap -mx-4">
        <section class="w-full md:w-1/3 px-4 mb-8">
          <h2 class="text-2xl mb-4">Latest News</h2>
          <article v-for="(article, index) in articles" :key="index" class="bg-white p-4 mb-4">
            <h3 class="text-xl mb-2">{{ article.title }}</h3>
            <p class="text-gray-700">{{ article.content }}</p>
          </article>
        </section>
        <aside class="w-full md:w-1/3 px-4 mb-8">
          <h2 class="text-2xl mb-4">Categories</h2>
          <ul class="bg-white p-4">
            <li v-for="(category, index) in categories" :key="index" class="mb-2">{{ category }}</li>
          </ul>
          <h2 class="text-2xl mb-4">Search</h2>
          <form @submit.prevent="handleSearch" class="bg-white p-4">
            <input type="text" v-model="searchQuery" placeholder="Search..." class="w-full p-2">
            <button type="submit" class="w-full bg-indigo-500 text-white p-2">Search</button>
          </form>
        </aside>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const articles = [
  { title: 'Article Title', content: 'Article content...' },
  // Add more articles...
];

const categories = [
  'Category 1',
  'Category 2',
  // Add more categories...
];

const searchQuery = ref('');

const handleSearch = () => {
  // Handle search logic here
};
</script>