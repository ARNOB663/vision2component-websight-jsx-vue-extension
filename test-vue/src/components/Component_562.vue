<template>
  <header class="bg-cover bg-center h-screen flex items-center justify-center" :style="{ backgroundImage: 'url(\'https://static.photos/business/1600x900/163.webp\')' }">
    <nav class="absolute top-0 w-full">
      <ul class="flex justify-end p-4">
        <li class="px-4"><a href="#">Home</a></li>
        <li class="px-4"><a href="#">Products</a></li>
        <li class="px-4"><a href="#">Testimonials</a></li>
        <li class="px-4"><a href="#">News</a></li>
      </ul>
    </nav>
  </header>

  <main class="container mx-auto px-4 py-12">
    <section class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/3 px-4 mb-8">
        <h2 class="text-2xl mb-4">Featured Products</h2>
        <p>Our products are designed to meet the needs of modern businesses. We offer a wide range of high-quality, reliable products that are perfect for any tech-savvy business.</p>
      </div>
      <div class="w-full md:w-1/3 px-4 mb-8">
        <h2 class="text-2xl mb-4">Customer Testimonials</h2>
        <p>We're proud of our satisfied customers. Here's what they have to say about our products and services.</p>
      </div>
      <div class="w-full md:w-1/3 px-4 mb-8">
        <h2 class="text-2xl mb-4">Company News</h2>
        <p>Stay up-to-date with the latest news from our company. We're always working to improve our products and services.</p>
      </div>
    </section>
  </main>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>