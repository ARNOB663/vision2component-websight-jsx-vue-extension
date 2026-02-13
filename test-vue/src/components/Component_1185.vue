<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="flex justify-between">
      <div>
        <h1 class="text-4xl">News Media Site</h1>
        <p class="text-xl">Your source for the latest news</p>
      </div>
      <div>
        <!-- Social media icons -->
        <a href="#"><i class="fab fa-facebook-square"></i></a>
        <a href="#"><i class="fab fa-twitter-square"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </header>

  <nav class="bg-gray-200 p-4">
    <!-- Quick links -->
    <a href="#" class="mr-4">Home</a>
    <a href="#" class="mr-4">Categories</a>
    <a href="#" class="mr-4">Archives</a>
    <a href="#" class="mr-4">Contact</a>
  </nav>

  <div class="flex">
    <aside class="bg-gray-100 w-1/4 p-4">
      <!-- Categories and archives -->
      <h2 class="text-2xl mb-4">Categories</h2>
      <ul>
        <li><a href="#">Category 1</a></li>
        <li><a href="#">Category 2</a></li>
        <li><a href="#">Category 3</a></li>
      </ul>

      <h2 class="text-2xl mb-4">Archives</h2>
      <ul>
        <li><a href="#">Archive 1</a></li>
        <li><a href="#">Archive 2</a></li>
        <li><a href="#">Archive 3</a></li>
      </ul>
    </aside>

    <main class="w-3/4 p-4">
      <!-- Main content area featuring the latest articles -->
      <h2 class="text-2xl mb-4">Latest Articles</h2>
      <article class="mb-4">
        <h3 class="text-xl mb-2">Article 1</h3>
        <p>This is the first article. It's a great read.</p>
      </article>
      <article class="mb-4">
        <h3 class="text-xl mb-2">Article 2</h3>
        <p>This is the second article. It's also a great read.</p>
      </article>
      <article class="mb-4">
        <h3 class="text-xl mb-2">Article 3</h3>
        <p>This is the third article. It's also a great read.</p>
      </article>
    </main>
  </div>
</template>

<script setup>
// No script needed for this simple template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>