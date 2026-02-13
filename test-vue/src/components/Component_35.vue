<template>
  <div class="flex flex-col items-center justify-center h-screen bg-black text-white">
    <img src="https://picsum.photos/seed/35/300/300" alt="Logo" class="mb-10">
    <h1 class="text-4xl mb-10">Art Gallery</h1>
    <div class="grid grid-cols-3 gap-4">
      <div class="bg-white text-black p-4">
        <img src="https://picsum.photos/seed/35/900/600" alt="Painting">
        <h2 class="text-2xl mb-2">Painting Title</h2>
        <h3 class="text-xl mb-2">Artist Name</h3>
        <p>This is a beautiful painting by the artist. It is a representation of the beauty of nature.</p>
      </div>
      <div class="bg-white text-black p-4">
        <img src="https://picsum.photos/seed/35/900/600" alt="Sculpture">
        <h2 class="text-2xl mb-2">Sculpture Title</h2>
        <h3 class="text-xl mb-2">Artist Name</h3>
        <p>This is a beautiful sculpture by the artist. It is a representation of the beauty of human creativity.</p>
      </div>
      <div class="bg-white text-black p-4">
        <img src="https://picsum.photos/seed/35/900/600" alt="Drawing">
        <h2 class="text-2xl mb-2">Drawing Title</h2>
        <h3 class="text-xl mb-2">Artist Name</h3>
        <p>This is a beautiful drawing by the artist. It is a representation of the beauty of human imagination.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this simple template
</script>