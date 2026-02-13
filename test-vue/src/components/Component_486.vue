<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="flex items-center justify-between bg-white p-4">
      <img src="https://static.photos/art/300x300/88.webp" alt="Logo" class="h-10">
      <nav>
        <ul class="flex">
          <li class="mr-6"><a href="#" class="text-pink-500 hover:text-pink-800">Home</a></li>
          <li class="mr-6"><a href="#" class="text-pink-500 hover:text-pink-800">About</a></li>
          <li><a href="#" class="text-pink-500 hover:text-pink-800">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="container mx-auto p-4">
      <section class="text-center">
        <h1 class="text-4xl mb-4">Welcome to Our Non-Profit Organization</h1>
        <p class="mb-8">We are a dedicated group of individuals who believe in the power of community and the importance of giving back. Our mission is to make a positive impact in the world, one person at a time.</p>
        <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Donate Now</button>
      </section>
    </main>

    <footer class="bg-white p-4 text-center text-gray-500 text-sm">
      <p>Follow us on social media:</p>
      <ul class="flex justify-center">
        <li class="mr-2"><a href="#" class="text-pink-500 hover:text-pink-800">Facebook</a></li>
        <li class="mr-2"><a href="#" class="text-pink-500 hover:text-pink-800">Twitter</a></li>
        <li><a href="#" class="text-pink-500 hover:text-pink-800">Instagram</a></li>
      </ul>
      <p class="mt-4">Donate to our cause:</p>
      <form>
        <input type="text" placeholder="Amount" class="border border-gray-400 p-2 mt-2">
        <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-2">Donate</button>
      </form>
    </footer>
  </div>
</template>

<script setup>
// Your script logic here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>