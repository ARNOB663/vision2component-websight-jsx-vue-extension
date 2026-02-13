<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
      <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style="font-family: 'Playfair Display', serif;">
        <div class="font-sans font-bold break-normal pt-6 pb-2 text-center border-b border-t border-gray-300">
          <h1 class="text-4xl">Architecture Firm</h1>
        </div>
        <p class="py-6">
          Welcome to our architecture firm, where we specialize in creating unique and innovative designs. Our team of experienced architects and designers work closely with our clients to understand their needs and translate them into stunning, functional spaces. We believe in the power of design to transform the world around us, and we are committed to creating spaces that are not just beautiful, but also practical, sustainable, and meaningful.
        </p>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3" v-for="(image, index) in images" :key="index">
            <div class="h-full border-2 border-gray-800 border-opacity-0 hover:border-opacity-50">
              <a href="#" aria-label="Placeholder" class="block w-full h-full no-underline">
                <img :alt="'Placeholder' + index" :src="'https://picsum.photos/seed/284/900/600'" class="w-full h-full object-cover">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const images = [
  { src: "https://picsum.photos/seed/284/900/600" },
  // Add more images here if needed
];
</script>