<template>
  <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-center" :style="{ backgroundImage: 'url(\'https://static.photos/people/1600x900/47.webp\')' }">
    <header class="bg-white shadow">
      <div class="container mx-auto flex items-center justify-between p-6">
        <img src="https://static.photos/people/300x300/48.webp" alt="Logo">
        <nav>
          <a href="#" class="mr-6">Home</a>
          <a href="#" class="mr-6">About</a>
          <a href="#" class="mr-6">Contact</a>
        </nav>
      </div>
    </header>

    <main class="container mx-auto p-6">
      <section class="mb-6">
        <h1 class="text-4xl mb-2">Welcome to Our Nonprofit Organization</h1>
        <p class="text-xl mb-4">We are a community-driven organization dedicated to making a difference in the world.</p>
        <a href="#" class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Donate Now</a>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl mb-2">Our Programs</h2>
        <!-- Add your accordion or tabs here -->
      </section>

      <section class="mb-6">
        <h2 class="text-2xl mb-2">Our Impact</h2>
        <!-- Add your accordion or tabs here -->
      </section>

      <section class="mb-6">
        <h2 class="text-2xl mb-2">Success Stories</h2>
        <!-- Add your accordion or tabs here -->
      </section>
    </main>

    <aside class="container mx-auto p-6">
      <h2 class="text-2xl mb-2">Recent News</h2>
      <!-- Add your news here -->

      <h2 class="text-2xl mb-2">Upcoming Events</h2>
      <!-- Add your events here -->

      <h2 class="text-2xl mb-2">Ways to Help</h2>
      <!-- Add your ways to help here -->
    </aside>

    <footer class="bg-gray-800 text-white p-6">
      <div class="container mx-auto">
        <p>Contact us at info@nonprofit.org</p>
        <a href="#" class="text-pink-300">Donate</a>
        <!-- Add your social media links here -->
      </div>
    </footer>
  </div>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>