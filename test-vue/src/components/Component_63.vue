<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-1/4 p-4">
      <!-- Sidebar content -->
      <h2 class="text-lg font-bold">Contact Information</h2>
      <p>Phone: 123-456-7890</p>
      <p>Email: info@constructioncompany.com</p>
      <h2 class="text-lg font-bold">Services</h2>
      <p>Residential construction</p>
      <p>Commercial construction</p>
    </div>
    <div class="w-full lg:w-3/4 p-4">
      <!-- Main content -->
      <h1 class="text-2xl font-bold">Welcome to Our Construction Company</h1>
      <p>We are a leading construction company specializing in residential and commercial construction. Our team of experienced professionals is dedicated to delivering high-quality, reliable construction services. We pride ourselves on our attention to detail and our commitment to safety.</p>
      <!-- Portfolio grid -->
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-white p-4">
          <h2 class="text-lg font-bold">Project 1</h2>
          <img src="https://picsum.photos/seed/63/900/600" alt="Project 1">
        </div>
        <div class="bg-white p-4">
          <h2 class="text-lg font-bold">Project 2</h2>
          <img src="https://picsum.photos/seed/63/900/600" alt="Project 2">
        </div>
        <!-- Add more projects as needed -->
      </div>
    </div>
  </div>
</template>

<script setup>
// No script setup needed for this example
</script>

<style scoped>
/* Tailwind CSS styles are automatically included via CDN link */
</style>