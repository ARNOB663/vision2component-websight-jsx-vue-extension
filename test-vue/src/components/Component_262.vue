<template>
  <div class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <div class="w-full bg-white rounded-lg shadow-lg p-8 mb-8">
        <h1 class="text-3xl font-bold mb-4">Real Estate Agency</h1>
        <p class="mb-8">Welcome to our Real Estate Agency, where we specialize in finding your dream home. With our intuitive property search form and various filters, we make it easy to find the perfect property for you.</p>
        <form class="mb-8">
          <!-- Your search form fields here -->
        </form>
      </div>
      <div class="flex flex-wrap -mx-4">
        <!-- Your property list here -->
        <div class="w-full md:w-1/3 px-4 mb-8">
          <div class="bg-white rounded-lg shadow-lg p-4">
            <img src="https://picsum.photos/seed/262/900/600" alt="Property Image" class="w-full mb-4">
            <h2 class="text-xl font-bold mb-2">Property Title</h2>
            <p class="text-gray-700 mb-2">Property Details</p>
            <!-- Your map location here -->
          </div>
        </div>
        <!-- Repeat the above div for each property -->
      </div>
    </div>
  </div>
</template>

<script setup>
// Your script setup logic here
</script>