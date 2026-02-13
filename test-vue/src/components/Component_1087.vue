<template>
  <header class="flex items-center justify-between bg-white p-4">
    <img src="https://static.photos/art/300x300/89.webp" alt="Logo" class="h-10">
    <div class="md:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
  </header>
  <main class="flex flex-col items-center justify-center p-5">
    <img src="https://static.photos/art/900x600/90.webp" alt="Interior Design" class="w-full h-64 object-cover">
    <h1 class="text-3xl my-5">Welcome to Our Interior Design Firm</h1>
    <p class="text-lg">
      At our interior design firm, we specialize in creating beautiful, functional spaces that reflect the individuality and style of each client. Our team of experienced designers work closely with clients to understand their needs and preferences, and then create a design that is both aesthetically pleasing and practical. We believe that a well-designed space can enhance a person's comfort, productivity, and overall quality of life.
    </p>
  </main>
  <footer class="bg-white p-4">
    <ul class="flex justify-center">
      <li class="mx-2"><a href="#" class="text-gray-600 hover:text-gray-800">Design Portfolio</a></li>
      <li class="mx-2"><a href="#" class="text-gray-600 hover:text-gray-800">Testimonials</a></li>
    </ul>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>