<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white text-center">
      <h1 class="text-5xl">Education Center</h1>
      <nav class="flex justify-center">
        <a href="#courses" class="px-3 py-2 text-black">Courses</a>
        <a href="#resources" class="px-3 py-2 text-black">Resources</a>
        <a href="#events" class="px-3 py-2 text-black">Upcoming Events</a>
      </nav>
    </header>

    <main class="flex flex-wrap">
      <section id="courses" class="w-full md:w-1/2 lg:w-1/3 p-4">
        <h2 class="text-3xl">Courses</h2>
        <!-- Course content goes here -->
      </section>

      <section id="resources" class="w-full md:w-1/2 lg:w-1/3 p-4">
        <h2 class="text-3xl">Resources</h2>
        <!-- Resource content goes here -->
      </section>

      <section id="events" class="w-full md:w-1/2 lg:w-1/3 p-4">
        <h2 class="text-3xl">Upcoming Events</h2>
        <!-- Event content goes here -->
      </section>
    </main>

    <footer class="bg-white text-center text-black p-4 absolute bottom-0 w-full">
      <p>© 2022 Education Center. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// Your script logic can go here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>