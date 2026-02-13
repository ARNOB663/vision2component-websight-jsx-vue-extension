<template>
  <div class="flex flex-col md:flex-row bg-gray-100 font-sans leading-normal tracking-normal">
    <!-- Left Navigation Menu -->
    <div class="md:w-1/5 bg-white p-4">
      <ul>
        <li><a href="#investments">Investments</a></li>
        <li><a href="#banking">Banking</a></li>
        <li><a href="#retirement">Retirement Planning</a></li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="md:w-4/5 p-4">
      <!-- Investments Section -->
      <section id="investments">
        <h1 class="text-2xl">Investments</h1>
        <p>Your investment section content goes here.</p>
      </section>

      <!-- Banking Section -->
      <section id="banking">
        <h1 class="text-2xl">Banking</h1>
        <p>Your banking section content goes here.</p>
      </section>

      <!-- Retirement Section -->
      <section id="retirement">
        <h1 class="text-2xl">Retirement Planning</h1>
        <p>Your retirement planning section content goes here.</p>
      </section>
    </div>
  </div>
</template>

<script setup>
// Your script logic can go here if needed
</script>

<style scoped>
/* Add any scoped styles here */
</style>