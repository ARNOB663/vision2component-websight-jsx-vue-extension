<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/business/1600x900/122.webp)' }">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Food Company</span>
      </div>
      <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Order Now</a>
      </div>
    </nav>
  </header>
  <main class="text-center p-10">
    <h1 class="text-5xl mb-4">Welcome to Food Company</h1>
    <p class="text-2xl mb-8">We are a family-owned business dedicated to providing the best food in the world. Our mission is to make people happy by serving delicious meals.</p>
    <img src="https://static.photos/business/900x600/123.webp" alt="Popular Dish" class="mx-auto mb-8">
  </main>
  <footer class="bg-gray-800 text-white text-center p-10">
    <p class="mb-4">Follow us on social media:</p>
    <div class="flex justify-center">
      <a href="#" class="text-2xl mx-2">Facebook</a>
      <a href="#" class="text-2xl mx-2">Twitter</a>
      <a href="#" class="text-2xl mx-2">Instagram</a>
    </div>
    <p class="mt-4">Contact us:</p>
    <p>123 Main St, Anytown, USA</p>
    <p>Phone: (123) 456-7890</p>
    <p>Email: info@foodcompany.com</p>
    <form class="mt-4">
      <input type="text" placeholder="Name" class="p-2 mr-2">
      <input type="email" placeholder="Email" class="p-2 mr-2">
      <button type="submit" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Submit</button>
    </form>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>