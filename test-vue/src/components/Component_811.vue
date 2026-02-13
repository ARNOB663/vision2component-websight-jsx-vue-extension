<template>
  <div class="bg-gray-100">
    <nav class="flex items-center justify-between flex-wrap bg-white p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Real Estate Site</span>
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
        <div>
          <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign Up</a>
        </div>
      </div>
    </nav>
    <div class="w-full mb-6">
      <div class="h-64 bg-cover bg-center" style="background-image: url('https://static.photos/real-estate/1600x900/12.webp')">
      </div>
    </div>
    <div class="flex flex-wrap -mx-2 overflow-hidden">
      <div class="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <h2 class="text-2xl font-bold mb-2">Property Listings</h2>
        <p class="text-gray-700">
          Welcome to our real estate site, where we specialize in finding your dream home. We have a wide selection of properties for sale and rent in your area. Whether you're looking for a luxury condo, a cozy townhouse, or a spacious vacation home, we've got you covered.
        </p>
      </div>
      <div class="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        <h2 class="text-2xl font-bold mb-2">Property Details</h2>
        <p class="text-gray-700">
          At our real estate site, we pride ourselves on providing detailed property information. From the number of bedrooms and bathrooms to the square footage and location, we strive to provide all the information you need to make an informed decision.
        </p>
      </div>
    </div>
    <footer class="bg-white">
      <div class="container mx-auto px-8">
        <div class="w-full flex flex-col md:flex-row py-6">
          <div class="flex-1 mb-6">
            <a class="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">Real Estate Site</a>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Contact</p>
            <a class="text-gray-600 hover:text-gray-800" href="#">123 Main St, Anytown, USA</a>
            <a class="text-gray-600 hover:text-gray-800" href="#">(123) 456-7890</a>
            <a class="text-gray-600 hover:text-gray-800" href="#">info@realestatesite.com</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>