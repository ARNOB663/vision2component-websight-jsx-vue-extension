<template>
  <header class="flex items-center justify-between flex-wrap p-6 bg-white shadow-md">
    <div class="flex items-center flex-shrink-0 mr-6">
      <span class="font-semibold text-xl tracking-tight">Real Estate Agency</span>
    </div>
    <nav class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
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
      <form class="flex items-center">
        <input type="text" placeholder="Search" class="px-4 py-2 mr-2 text-sm placeholder-gray-500 bg-white border border-gray-300 rounded shadow outline-none">
        <button type="submit" class="px-4 py-2 text-sm text-white bg-indigo-500 border-indigo-500 rounded">Search</button>
      </form>
    </nav>
  </header>
  <main class="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
    <h1 class="text-5xl font-bold text-gray-700">Welcome to our Real Estate Agency</h1>
    <p class="mt-3 text-2xl">
      We are a team of dedicated real estate professionals committed to providing you with the best possible service. Whether you're looking for a new home, a rental property, or a commercial space, we're here to help.
    </p>
    <div class="flex flex-wrap justify-center mt-10">
      <div class="w-full lg:w-1/2 p-6">
        <img src="https://picsum.photos/seed/221/900/600" alt="House" class="w-full">
      </div>
      <div class="w-full lg:w-1/2 p-6">
        <h2 class="text-3xl font-bold text-gray-700">Property Listings</h2>
        <!-- Property listings go here -->
      </div>
    </div>
  </main>
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <a href="#responsive-header" class="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">Real Estate Agency</a>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Company</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="#responsive-header" class="no-underline hover:underline text-gray-800 hover:text-orange-500">About</a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="#responsive-header" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Contact</a>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Testimonials</p>
          <!-- Testimonials go here -->
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Contact</p>
          <!-- Contact form goes here -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>