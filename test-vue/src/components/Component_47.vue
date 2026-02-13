<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-cover bg-center h-64 flex justify-center items-center" :style="{ backgroundImage: 'url(\'https://picsum.photos/seed/47/1600/900\')' }">
      <img src="https://picsum.photos/seed/47/300/300" alt="Logo" class="h-16">
    </header>
    <nav class="bg-pink-500 text-white p-4">
      <ul class="flex space-x-4 justify-center">
        <li><a href="#" class="hover:text-pink-200">Home</a></li>
        <li><a href="#" class="hover:text-pink-200">Services</a></li>
        <li><a href="#" class="hover:text-pink-200">About Us</a></li>
        <li><a href="#" class="hover:text-pink-200">Contact</a></li>
      </ul>
    </nav>
    <main class="flex-grow p-4">
      <section>
        <h2 class="text-2xl mb-4">Welcome to our Health and Wellness Clinic</h2>
        <p class="mb-4">At our clinic, we believe in the power of nature to heal. Our mission is to provide a safe, supportive, and nurturing environment where you can unwind, relax, and rejuvenate. We offer a wide range of services to meet your health and wellness needs.</p>
      </section>
    </main>
    <footer class="bg-pink-500 text-white text-center p-4">
      <p>© 2022 Health and Wellness Clinic. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>