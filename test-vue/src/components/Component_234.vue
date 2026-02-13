<template>
  <header class="bg-green-500 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <img src="https://picsum.photos/seed/234/300/300" alt="Logo" class="h-10">
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:underline">Home</a></li>
          <li><a href="#" class="hover:underline">Services</a></li>
          <li><a href="#" class="hover:underline">About</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="py-20 text-center">
    <h1 class="text-4xl mb-4">Welcome to Our Financial Services</h1>
    <p class="text-lg mb-8">We provide top-notch financial services to help you achieve your financial goals.</p>
    <button class="bg-green-500 text-white px-4 py-2 rounded">Get Started</button>
  </section>

  <section class="py-20">
    <div class="container mx-auto">
      <h2 class="text-3xl mb-8 text-center">Our Services</h2>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/2 px-4 mb-8">
          <h3 class="text-2xl mb-4">Service 1</h3>
          <p>We provide a wide range of financial services, including but not limited to, investment advice, tax planning, and retirement planning.</p>
        </div>
        <div class="w-full md:w-1/2 px-4 mb-8">
          <h3 class="text-2xl mb-4">Service 2</h3>
          <p>Our team of experienced financial advisors is here to help you navigate the complex world of finance.</p>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-green-500 text-white p-4 text-center">
    <p>&copy; 2022 Financial Services. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>