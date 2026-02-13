<template>
  <header class="bg-white p-4 shadow">
    <nav class="flex justify-between">
      <div>
        <a href="#" class="text-lg font-bold">E-commerce Store</a>
      </div>
      <div>
        <a href="#" class="mr-4">Home</a>
        <a href="#" class="mr-4">Products</a>
        <a href="#" class="mr-4">About</a>
        <a href="#" class="mr-4">Contact</a>
      </div>
    </nav>
  </header>

  <main class="flex p-4">
    <aside class="w-1/4 p-4">
      <h2 class="text-lg font-bold mb-4">Categories</h2>
      <ul>
        <li><a href="#">Category 1</a></li>
        <li><a href="#">Category 2</a></li>
        <li><a href="#">Category 3</a></li>
      </ul>
    </aside>

    <section class="w-2/4 p-4">
      <h1 class="text-2xl font-bold mb-4">Featured Products</h1>
      <!-- Carousel goes here -->
    </section>

    <aside class="w-1/4 p-4">
      <h2 class="text-lg font-bold mb-4">Filter</h2>
      <!-- Filter options go here -->
    </aside>
  </main>

  <footer class="bg-white p-4 shadow flex justify-between">
    <div>
      <p>Follow us on social media:</p>
      <!-- Social media icons go here -->
    </div>
    <div>
      <p>Sign up for our newsletter:</p>
      <!-- Newsletter sign-up form goes here -->
    </div>
  </footer>
</template>

<script setup>
// Your script logic can go here
</script>

<style scoped>
/* Your scoped styles can go here */
</style>