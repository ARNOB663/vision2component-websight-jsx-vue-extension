<template>
  <div class="bg-gray-900 text-white">
    <header class="flex justify-between items-center p-4">
      <h1 class="text-2xl">Tech Company</h1>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:text-green-400">Home</a></li>
          <li><a href="#" class="hover:text-green-400">About</a></li>
          <li><a href="#" class="hover:text-green-400">Services</a></li>
          <li><a href="#" class="hover:text-green-400">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="flex p-4">
      <section class="w-2/3">
        <img src="https://static.photos/business/900x600/75.webp" alt="Tech Image" class="w-full">
        <h2 class="text-xl my-4">Welcome to Tech Company</h2>
        <p class="text-lg">
          At Tech Company, we are dedicated to providing the best technology solutions for your business needs. Our team of experts is committed to delivering innovative, reliable, and efficient solutions that help our clients grow and succeed. Whether you're looking for a new website, a custom software solution, or a digital marketing strategy, we're here to help.
        </p>
      </section>

      <aside class="w-1/3 p-4">
        <h3 class="text-lg mb-4">Latest News</h3>
        <article class="mb-4">
          <h4 class="text-green-400">New Product Launch</h4>
          <p>We're excited to announce the launch of our new product. This innovative solution will help you achieve your business goals.</p>
        </article>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </aside>
    </main>

    <footer class="bg-gray-800 p-4 text-center">
      <p>&copy; 2022 Tech Company. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this simple template
</script>