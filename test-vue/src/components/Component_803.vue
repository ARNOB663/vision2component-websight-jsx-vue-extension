<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Art Gallery</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#artist-bios" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Artist Biographies
        </a>
        <a href="#featured-works" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Featured Works
        </a>
      </div>
    </div>
  </nav>

  <main class="container mx-auto px-4 py-8">
    <section id="artist-bios" class="mb-8">
      <h2 class="text-2xl mb-4">Artist Biographies</h2>
      <p class="mb-4">
        At our Art Gallery, we feature a diverse range of artists from around the world. Each artist brings their unique perspective and style to the table, creating a truly artistically-designed layout.
      </p>
    </section>

    <section id="featured-works">
      <h2 class="text-2xl mb-4">Featured Works</h2>
      <p class="mb-4">
        Our featured works are a curated selection of the best artworks from our artists. Each piece is a testament to the artist's skill and creativity.
      </p>
    </section>
  </main>
</template>

<script setup>
// No script needed for this basic example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>