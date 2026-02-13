<template>
  <div class="bg-gray-100">
    <header class="flex justify-between items-center p-4 bg-white shadow">
      <img src="https://static.photos/art/300x300/58.webp" alt="Logo" class="h-10">
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="text-gray-600 hover:text-gray-800">Home</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-800">Services</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-800">About</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-800">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="py-16 bg-purple-500 text-white text-center">
        <h1 class="text-4xl font-bold mb-4">Welcome to Our Law Firm</h1>
        <p class="text-xl">We provide professional and serious legal services to help you navigate the legal landscape.</p>
      </section>

      <section class="py-16 text-center">
        <h2 class="text-3xl font-bold mb-4">Our Services</h2>
        <p class="text-xl">We offer a wide range of legal services including but not limited to:</p>
        <ul class="list-disc pl-6 mt-4">
          <li>Criminal Defense</li>
          <li>Family Law</li>
          <li>Personal Injury</li>
          <li>Business Law</li>
        </ul>
      </section>
    </main>

    <footer class="bg-gray-800 text-white text-center p-4">
      <p>&copy; 2022 Our Law Firm. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this simple template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>