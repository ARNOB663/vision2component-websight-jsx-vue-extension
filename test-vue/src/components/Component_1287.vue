<template>
  <div class="bg-white font-sans leading-normal tracking-normal">
    <header class="flex items-center justify-between bg-gray-800 text-white p-4">
      <img src="https://static.photos/business/300x300/89.webp" alt="Logo" class="h-10">
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:underline">Home</a></li>
          <li><a href="#" class="hover:underline">About</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="container mx-auto p-4">
      <section>
        <h2 class="text-2xl mb-4">Articles</h2>
        <article class="mb-8">
          <h3 class="text-xl mb-2">Article Title</h3>
          <p>Article content goes here. This is where you would put the actual text of the article.</p>
        </article>
        <!-- More articles... -->
      </section>

      <section>
        <h2 class="text-2xl mb-4">Blog Posts</h2>
        <article class="mb-8">
          <h3 class="text-xl mb-2">Blog Post Title</h3>
          <p>Blog post content goes here. This is where you would put the actual text of the blog post.</p>
        </article>
        <!-- More blog posts... -->
      </section>
    </main>

    <footer class="bg-gray-800 text-white p-4">
      <p>&copy; 2022 Media Company</p>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:underline">Facebook</a></li>
          <li><a href="#" class="hover:underline">Twitter</a></li>
          <li><a href="#" class="hover:underline">Instagram</a></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>