<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/business/1600x900/69.webp)' }">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Food Truck Name</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#menu" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Menu</a>
          <a href="#about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">About</a>
          <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">Contact</a>
        </div>
        <div>
          <a href="#order" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Order Now</a>
        </div>
      </div>
    </nav>
  </header>
  <main class="container mx-auto px-4 py-8">
    <section id="menu">
      <h2 class="text-3xl mb-4">Menu</h2>
      <p class="mb-4">Our food truck serves a variety of delicious and nutritious meals. From classic comfort food to unique and creative dishes, we have something for everyone.</p>
      <!-- Add your menu items here -->
    </section>
    <section id="about">
      <h2 class="text-3xl mb-4">About Us</h2>
      <p class="mb-4">We are a family-owned food truck that prides itself on using only the freshest, locally sourced ingredients. Our goal is to provide a fun and enjoyable experience for our customers, while also supporting local businesses.</p>
    </section>
    <section id="contact">
      <h2 class="text-3xl mb-4">Contact Us</h2>
      <p class="mb-4">We'd love to hear from you. Whether you have a question about our menu, want to place an order, or just want to say hi, we're here to help.</p>
      <!-- Add your contact form here -->
    </section>
  </main>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
/* Your scoped styles here */
</style>