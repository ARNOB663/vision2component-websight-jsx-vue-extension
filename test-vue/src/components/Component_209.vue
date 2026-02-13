<template>
  <header class="bg-gray-800 p-4">
    <nav class="flex justify-between items-center">
      <div>
        <a href="#" class="text-xl font-bold">Tech Company</a>
      </div>
      <div class="space-x-4">
        <a href="#" class="hover:text-yellow-400">Home</a>
        <a href="#" class="hover:text-yellow-400">About</a>
        <a href="#" class="hover:text-yellow-400">Products</a>
        <a href="#" class="hover:text-yellow-400">Contact</a>
      </div>
    </nav>
  </header>

  <main class="py-8">
    <section class="flex flex-col items-center justify-center">
      <img src="https://picsum.photos/seed/209/900/600" alt="Hero Image" class="w-full h-64 object-cover">
      <h1 class="text-4xl font-bold my-8">Welcome to Tech Company</h1>
      <p class="text-center max-w-lg">
        At Tech Company, we are dedicated to providing the best technology solutions for your needs. Our team of experts is always ready to help you with any questions or problems you may have.
      </p>
    </section>
  </main>

  <footer class="bg-gray-800 p-4">
    <div class="flex justify-between items-center">
      <div>
        <p>© 2022 Tech Company. All rights reserved.</p>
      </div>
      <div class="space-x-4">
        <a href="#" class="hover:text-yellow-400">Facebook</a>
        <a href="#" class="hover:text-yellow-400">Twitter</a>
        <a href="#" class="hover:text-yellow-400">Instagram</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>