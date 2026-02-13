<template>
  <header class="bg-white p-4 flex items-center justify-between">
    <img src="https://picsum.photos/seed/41/300/300" alt="Logo" class="h-10">
    <form>
      <input type="text" placeholder="Search articles..." class="border p-2 rounded">
    </form>
  </header>

  <main class="container mx-auto p-4 flex">
    <div class="w-3/4">
      <h2 class="text-2xl mb-4">Trending Articles</h2>
      <div class="grid grid-cols-2 gap-4">
        <article class="bg-white p-4">
          <h3 class="text-xl mb-2">Article Title</h3>
          <p>Article summary goes here. This should be a brief summary of the article.</p>
        </article>
        <!-- More articles here -->
      </div>
    </div>

    <aside class="w-1/4 ml-4">
      <h2 class="text-2xl mb-4">Categories</h2>
      <ul>
        <li>Category 1</li>
        <li>Category 2</li>
        <!-- More categories here -->
      </ul>
    </aside>
  </main>

  <footer class="bg-white p-4 text-center">
    <p>Advertising information goes here.</p>
    <a href="/contact" class="block mt-2">Contact Us</a>
    <div class="mt-2">
      <a href="#">Facebook</a>
      <a href="#" class="ml-2">Twitter</a>
      <a href="#" class="ml-2">Instagram</a>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>