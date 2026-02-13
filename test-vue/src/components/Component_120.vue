<template>
  <header class="bg-white p-4 flex justify-center">
    <img src="https://picsum.photos/seed/120/300/300" alt="Law Firm Logo" class="h-16">
  </header>

  <section class="bg-red-500 text-white p-16 flex flex-col items-center justify-center">
    <h1 class="text-4xl mb-4">Welcome to Our Law Firm</h1>
    <p class="text-xl mb-8">We provide professional legal services to help you navigate the legal landscape.</p>
    <button class="bg-white text-red-500 px-4 py-2 rounded">Contact Us</button>
  </section>

  <nav class="bg-white p-4">
    <ul class="flex justify-center space-x-8">
      <li><a href="#" class="text-red-500 hover:text-red-700">Home</a></li>
      <li><a href="#" class="text-red-500 hover:text-red-700">Practice Areas</a></li>
      <li><a href="#" class="text-red-500 hover:text-red-700">About Us</a></li>
      <li><a href="#" class="text-red-500 hover:text-red-700">Contact</a></li>
    </ul>
  </nav>

  <main class="p-8">
    <h2 class="text-2xl mb-4">Our Practice Areas</h2>
    <p class="mb-4">We offer a wide range of legal services including:</p>
    <ul class="list-disc pl-8">
      <li>Criminal Law</li>
      <li>Family Law</li>
      <li>Corporate Law</li>
      <li>Immigration Law</li>
    </ul>
  </main>

  <footer class="bg-white p-4 text-center">
    <p>Contact us at:</p>
    <p>123 Main St, Anytown, USA</p>
    <p>Phone: 123-456-7890</p>
    <p>Email: info@ourlawfirm.com</p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>