<template>
  <header class="bg-red-500 text-white p-4">
    <img src="https://picsum.photos/seed/383/900/600" alt="Students" class="w-full">
    <nav class="flex justify-center space-x-4 mt-4">
      <a href="#courses" class="hover:underline">Courses</a>
      <a href="#calendar" class="hover:underline">Academic Calendar</a>
      <a href="#achievements" class="hover:underline">Notable Achievements</a>
    </nav>
  </header>
  <main class="container mx-auto p-4">
    <section id="courses" class="my-8">
      <h2 class="text-2xl mb-4">Courses</h2>
      <p class="mb-4">Here is some information about the courses offered at our educational institution.</p>
    </section>
    <section id="calendar" class="my-8">
      <h2 class="text-2xl mb-4">Academic Calendar</h2>
      <p class="mb-4">Here is the academic calendar for our educational institution.</p>
    </section>
    <section id="achievements" class="my-8">
      <h2 class="text-2xl mb-4">Notable Achievements</h2>
      <p class="mb-4">Here are some of the notable achievements of our educational institution.</p>
    </section>
  </main>
</template>

<script setup>
// No script needed for this example
</script>