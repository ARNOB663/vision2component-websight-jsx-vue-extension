<template>
  <div class="bg-black text-white min-h-screen flex flex-col items-center justify-center">
    <img src="https://static.photos/art/900x600/144.webp" alt="Full Screen Artwork" class="w-full h-full object-cover absolute" />
    <div class="relative z-10 container mx-auto px-4 py-8">
      <h1 class="text-4xl text-center mb-8">Welcome to Our Art Gallery</h1>
      <p class="text-xl mb-8">
        At our art gallery, we are dedicated to showcasing the best of the art world. We have a wide range of artists from around the world, each with their own unique style and perspective. We believe that art is a powerful tool that can inspire, educate, and bring people together. Whether you're looking for a piece to adorn your home, a gift for a friend, or simply a piece to appreciate, we have something for everyone.
      </p>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-white text-black p-4 rounded-lg shadow-md">
          <h2 class="text-2xl mb-4">Featured Artists</h2>
          <p class="mb-4">
            Our featured artists are some of the most talented and influential in the art world. Each artist has their own unique style and approach to art.
          </p>
          <a href="#" class="text-indigo-500 hover:text-indigo-600">View Artists</a>
        </div>
        <div class="bg-white text-black p-4 rounded-lg shadow-md">
          <h2 class="text-2xl mb-4">Upcoming Events</h2>
          <p class="mb-4">
            Check out our upcoming events. We have a variety of events, from art exhibitions to art workshops.
          </p>
          <a href="#" class="text-indigo-500 hover:text-indigo-600">View Events</a>
        </div>
        <div class="bg-white text-black p-4 rounded-lg shadow-md">
          <h2 class="text-2xl mb-4">Online Store</h2>
          <p class="mb-4">
            Browse our online store for a wide selection of art prints, art books, and other art related products.
          </p>
          <a href="#" class="text-indigo-500 hover:text-indigo-600">View Store</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>