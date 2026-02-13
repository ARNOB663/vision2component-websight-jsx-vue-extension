<template>
  <div class="bg-yellow-500">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl text-center font-bold mb-8">Welcome to our Recipe Blog</h1>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/2 px-4 mb-8">
          <h2 class="text-2xl font-bold mb-4">Highlighted Recipe</h2>
          <img class="mb-4" src="https://static.photos/food/900x600/14.webp" alt="Highlighted Recipe">
          <p class="text-lg">
            This is a highlighted recipe. It's a delicious recipe that you can't miss. It's a perfect blend of spices and ingredients that will make your taste buds dance.
          </p>
        </div>
        <div class="w-full md:w-1/2 px-4 mb-8">
          <h2 class="text-2xl font-bold mb-4">Categories</h2>
          <ul class="list-disc pl-4 mb-4">
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
          </ul>
          <h2 class="text-2xl font-bold mb-4">Recent Blog Posts</h2>
          <ul class="list-disc pl-4">
            <li>Blog Post 1</li>
            <li>Blog Post 2</li>
            <li>Blog Post 3</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this simple template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>