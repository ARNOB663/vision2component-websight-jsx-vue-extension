<template>
  <div class="bg-blue-900 text-white min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold mb-4">Welcome to Our Banking and Finance Site</h1>
      <p class="mb-8">
        At our banking and finance site, we are committed to providing you with the best possible service. We understand that trust is a key factor in banking and finance, which is why we have built our site with a strong emphasis on trust and security. Our team of experts is dedicated to providing you with the most accurate and up-to-date information about banking and finance. We strive to make your banking experience as smooth and stress-free as possible.
      </p>
      <div class="w-full max-w-xs mx-auto">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
// Your script logic here if needed
</script>