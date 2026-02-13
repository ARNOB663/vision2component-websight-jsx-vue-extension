<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white">
      <div class="container mx-auto flex justify-between items-center py-4">
        <img src="https://picsum.photos/seed/189/300/300" alt="Logo" class="h-10">
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="text-gray-800 hover:text-indigo-500">Home</a></li>
            <li><a href="#" class="text-gray-800 hover:text-indigo-500">About</a></li>
            <li><a href="#" class="text-gray-800 hover:text-indigo-500">Services</a></li>
            <li><a href="#" class="text-gray-800 hover:text-indigo-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="flex-grow">
      <div class="w-full h-64 bg-cover bg-center" style="background-image: url('https://picsum.photos/seed/189/1600/900')"></div>
      <div class="container mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold mb-4">Welcome to Our Creative Agency</h1>
        <p class="text-lg mb-8">
          At our creative agency, we believe in the power of design to transform businesses and create meaningful connections. We are a full-service creative agency, offering a wide range of services including branding, web design, graphic design, and more. Our team of experienced professionals is dedicated to helping our clients achieve their goals and create a lasting impact.
        </p>
      </div>
    </main>
    <footer class="bg-gray-800 text-white text-center py-4">
      <p>© 2022 Creative Agency. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>