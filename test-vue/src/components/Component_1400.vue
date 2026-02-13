<template>
  <div class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <header class="mb-8">
        <img src="https://static.photos/business/900x600/2.webp" alt="Header Image" class="w-full h-auto">
      </header>
      <nav class="flex items-center justify-between mb-8">
        <img src="https://static.photos/business/900x600/3.webp" alt="Logo" class="w-40">
        <ul class="flex space-x-4">
          <li><a href="#" class="text-blue-500 hover:text-blue-700">Menu</a></li>
          <li><a href="#" class="text-blue-500 hover:text-blue-700">About Us</a></li>
          <li><a href="#" class="text-blue-500 hover:text-blue-700">Contact</a></li>
        </ul>
      </nav>
      <main>
        <h1 class="text-4xl font-bold text-center mb-8">Welcome to Our Food Company</h1>
        <p class="text-lg text-justify">
          At Our Food Company, we are committed to providing our customers with the best quality food. We source our ingredients from local farms and markets to ensure that our food is not only delicious, but also healthy and nutritious. Our menu offers a variety of dishes, from classic comfort foods to unique and innovative dishes. We believe that food is not just about taste, but also about the experience. That's why we strive to create a warm and inviting atmosphere for our customers.
        </p>
      </main>
      <footer class="mt-8">
        <form action="#" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm">
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm">
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm"></textarea>
          </div>
          <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send Message</button>
        </form>
        <div class="mt-4 flex items-center space-x-4">
          <a href="#" class="text-gray-500 hover:text-gray-700"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-gray-500 hover:text-gray-700"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-gray-500 hover:text-gray-700"><i class="fab fa-instagram"></i></a>
        </div>
        <p class="mt-4 text-gray-500">
          &copy; 2023 Our Food Company. All rights reserved.
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
// Your script logic here
</script>