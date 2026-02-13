<template>
  <header class="bg-white">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="https://static.photos/art/300x300/101.webp" alt="Logo">
        <span class="ml-3 text-xl">Creative Agency</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="#section1" class="mr-5 hover:text-gray-900">Section 1</a>
        <a href="#section2" class="mr-5 hover:text-gray-900">Section 2</a>
        <a href="#section3" class="mr-5 hover:text-gray-900">Section 3</a>
      </nav>
    </div>
  </header>

  <main>
    <section id="section1" class="py-20 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-10 text-center">Section 1</h2>
        <!-- Add your content here -->
      </div>
    </section>

    <section id="section2" class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-10 text-center">Section 2</h2>
        <!-- Add your content here -->
      </div>
    </section>

    <section id="section3" class="py-20 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-10 text-center">Section 3</h2>
        <!-- Add your content here -->
      </div>
    </section>
  </main>

  <footer class="bg-white">
    <div class="container mx-auto px-4 pt-10 pb-6">
      <p class="text-sm text-center">© 2022 Creative Agency. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>