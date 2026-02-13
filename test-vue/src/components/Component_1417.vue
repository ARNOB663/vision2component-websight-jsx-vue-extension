<template>
  <div class="bg-gray-200">
    <header class="bg-white p-4 flex justify-center">
      <img src="https://static.photos/art/300x300/19.webp" alt="Logo" class="h-10">
    </header>

    <nav class="bg-white p-4 flex justify-center">
      <ul class="flex space-x-4">
        <li><a href="#practice-areas" class="text-gray-500 hover:text-gray-700">Practice Areas</a></li>
        <li><a href="#attorney-bios" class="text-gray-500 hover:text-gray-700">Attorney Bios</a></li>
        <li><a href="#client-testimonials" class="text-gray-500 hover:text-gray-700">Client Testimonials</a></li>
      </ul>
    </nav>

    <main class="p-4">
      <section id="practice-areas" class="my-8">
        <h2 class="text-2xl font-bold mb-4">Practice Areas</h2>
        <p class="text-gray-700">Our firm provides legal services in various areas including criminal law, civil law, family law, and business law.</p>
      </section>

      <section id="attorney-bios" class="my-8">
        <h2 class="text-2xl font-bold mb-4">Attorney Bios</h2>
        <p class="text-gray-700">Our attorneys bring a wealth of experience to the table. They have worked in top law firms and have a proven track record of success.</p>
      </section>

      <section id="client-testimonials" class="my-8">
        <h2 class="text-2xl font-bold mb-4">Client Testimonials</h2>
        <p class="text-gray-700">Our clients love our services. They often refer us to their friends and family.</p>
      </section>
    </main>
  </div>
</template>

<script setup>
// No script needed for this simple template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>