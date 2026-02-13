<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://picsum.photos/seed/217/1600/900)' }">
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Real Estate</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  </header>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-4xl text-center font-bold mb-8">Welcome to Real Estate</h1>
    <p class="text-lg text-justify">
      At Real Estate, we are committed to providing our clients with the best possible service. We understand that buying or selling a property can be a daunting task, which is why we offer a wide range of services to make the process as smooth as possible. From finding the perfect property to negotiating the best terms, we are here to help. Whether you're a first-time homebuyer, a seasoned investor, or a relocating professional, we have the expertise to guide you every step of the way. Our team of experienced real estate professionals is dedicated to providing you with the information and support you need to make the best decision. We believe in transparency and honesty, which is why we always provide you with accurate and up-to-date information about the properties we represent. We are committed to providing our clients with the best possible service and we look forward to serving you.
    </p>
  </main>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>