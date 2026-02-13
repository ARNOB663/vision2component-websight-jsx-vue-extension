<template>
  <div class="bg-white min-h-screen">
    <div class="flex flex-col items-center justify-center h-screen">
      <img src="https://static.photos/people/300x300/177.webp" alt="Non-Profit Logo" class="w-1/2">
      <h1 class="text-4xl font-bold text-center">Welcome to Our Non-Profit Organization</h1>
      <p class="text-center w-1/2">We are a non-profit organization dedicated to making a difference in the world. We believe in the power of community and strive to create a better world for all.</p>
    </div>
    <img src="https://static.photos/people/900x600/178.webp" alt="Banner Image" class="w-full">
    <div class="flex flex-col items-center justify-center h-screen">
      <h2 class="text-3xl font-bold text-center">Volunteer Opportunities</h2>
      <p class="text-center w-1/2">We are always looking for volunteers to help us make a difference. Whether you're interested in helping with fundraising, organizing events, or spreading the word about our cause, we'd love to have you.</p>
      <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
        Volunteer Now
      </button>
    </div>
    <div class="flex flex-col items-center justify-center h-screen">
      <h2 class="text-3xl font-bold text-center">Donate</h2>
      <p class="text-center w-1/2">Your donation will help us continue our work. Every little bit helps.</p>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="amount">
            Amount
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="text" placeholder="Amount">
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Donate
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>