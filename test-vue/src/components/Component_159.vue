<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-cover bg-center h-64 flex items-center justify-center" :style="{ backgroundImage: 'url(https://picsum.photos/seed/159/1600/900)' }">
      <img src="https://picsum.photos/seed/159/300/300" alt="Logo" class="h-16">
    </header>
    <nav class="bg-indigo-800 text-white p-4">
      <ul class="flex space-x-4 justify-center">
        <li><a href="#" class="hover:underline">Programs</a></li>
        <li><a href="#" class="hover:underline">Initiatives</a></li>
        <li><a href="#" class="hover:underline">About Us</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
      </ul>
    </nav>
    <main class="flex-grow p-4">
      <h1 class="text-4xl text-center my-8">Welcome to our Non-Profit Organization</h1>
      <p class="text-lg text-center">
        We are a community-driven organization dedicated to making a difference in the world. We believe in the power of compassion and love, and we use our resources to support local communities and organizations.
      </p>
      <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mx-auto block mt-8">
        Donate Now
      </button>
    </main>
    <footer class="bg-indigo-800 text-white p-4">
      <div class="flex justify-between">
        <div>
          <p>Follow us on social media:</p>
          <ul>
            <li><a href="#" class="text-indigo-300 hover:text-white">Facebook</a></li>
            <li><a href="#" class="text-indigo-300 hover:text-white">Twitter</a></li>
            <li><a href="#" class="text-indigo-300 hover:text-white">Instagram</a></li>
          </ul>
        </div>
        <div>
          <p>Contact us:</p>
          <p>123 Main St, Anytown, USA</p>
          <p>(123) 456-7890</p>
          <p>info@ourorganization.com</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>