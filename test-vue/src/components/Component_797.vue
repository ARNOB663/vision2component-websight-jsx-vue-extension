<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/technology/1600x900/198.webp)' }">
    <nav class="flex items-center justify-between flex-wrap bg-transparent p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Software Company</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#features" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Features
          </a>
          <a href="#pricing" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Pricing
          </a>
          <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
          </a>
        </div>
        <div>
          <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Get started</a>
        </div>
      </div>
    </nav>
    <div class="inset-center absolute text-center text-white">
      <h1 class="my-4 text-5xl">Welcome to Software Company</h1>
      <p class="leading-normal text-2xl mb-8">
        At Software Company, we are dedicated to providing the best software solutions for your business needs. Our team of experts is committed to delivering high-quality, reliable software that meets your specific needs and exceeds your expectations.
      </p>
      <button class="mx-auto mt-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get started</button>
    </div>
  </header>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>