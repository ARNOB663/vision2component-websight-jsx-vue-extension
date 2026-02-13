<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
      <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
        <div class="font-sans font-bold break-normal pt-6 pb-2 text-center">
          <h1 class="text-4xl">Welcome to Our Creative Agency</h1>
        </div>
        <p class="py-6">
          At our creative agency, we are dedicated to helping businesses and individuals create unique and engaging content. Whether you're looking for a new logo, a website, or a video, we've got you covered. We specialize in a wide range of services, from graphic design to video production, and everything in between. Our team of experienced professionals is committed to delivering high-quality work that meets and exceeds your expectations.
        </p>
        <div class="flex items-center justify-between flex-wrap pb-4">
          <div v-for="(service, index) in services" :key="index" class="w-full md:w-1/3 p-3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img class="w-full" :src="'https://picsum.photos/900/600'" :alt="service.title">
              <div class="p-6">
                <h2 class="text-xl font-bold mb-2">{{ service.title }}</h2>
                <p class="text-gray-700 text-base">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    title: 'Graphic Design',
    description: 'We create stunning designs that will help your brand stand out.',
    image: 'https://picsum.photos/900/600'
  },
  // Add more services here
]
</script>