<template>
  <div class="bg-gray-100">
    <header class="bg-white p-4 text-center">
      <h1 class="text-3xl font-bold">The Daily News</h1>
    </header>

    <main class="container mx-auto p-4">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-2/3">
          <img src="https://static.photos/animals/900x600/106.webp" alt="News Image" class="w-full">
          <h2 class="text-2xl font-bold my-4">Latest Headlines</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="(article, index) in articles" :key="index" class="bg-white p-4">
              <h3 class="text-xl font-bold">{{ article.title }}</h3>
              <p>{{ article.description }}</p>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/3">
          <h2 class="text-2xl font-bold my-4">Popular Stories</h2>
          <ul class="list-disc pl-4">
            <li v-for="(story, index) in popularStories" :key="index">{{ story }}</li>
          </ul>

          <h2 class="text-2xl font-bold my-4">Category Filters</h2>
          <ul class="list-disc pl-4">
            <li v-for="(category, index) in categories" :key="index">{{ category }}</li>
          </ul>
        </div>
      </div>
    </main>

    <footer class="bg-white p-4 text-center">
      <p>&copy; 2022 The Daily News</p>
    </footer>
  </div>
</template>

<script setup>
const articles = [
  { title: 'Article Title', description: 'Real and long sentences about the business.' },
  // Add more articles as needed
];

const popularStories = [
  'Story 1',
  'Story 2',
  'Story 3',
  // Add more stories as needed
];

const categories = [
  'Category 1',
  'Category 2',
  'Category 3',
  // Add more categories as needed
];
</script>