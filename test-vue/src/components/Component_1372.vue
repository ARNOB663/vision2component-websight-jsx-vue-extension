<template>
  <div class="w-full h-screen bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/technology/1600x900/173.webp)' }">
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">TechCo</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#company" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Company</a>
          <a href="#products" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Products</a>
          <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  </div>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-1/2 p-4 bg-white">
      <p class="text-gray-800">TechCo is a leading provider of cutting-edge technology solutions. We specialize in providing innovative and reliable software solutions to businesses of all sizes. Our team of experienced developers and designers work together to create custom software solutions that meet the unique needs of each client. Whether you're a small business looking to streamline your operations or a large corporation in need of advanced analytics, we're here to help.</p>
    </div>
    <div class="w-full lg:w-1/2 p-4 bg-gray-200">
      <p class="text-gray-800">At TechCo, we believe in the power of technology to transform businesses. That's why we're committed to staying at the forefront of the latest advancements in software development. We regularly update our products and services to ensure that we're providing the most cutting-edge solutions to our clients. Our goal is to help businesses of all sizes leverage the power of technology to achieve their full potential.</p>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any additional styles if needed */
</style>