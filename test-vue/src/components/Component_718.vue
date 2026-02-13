<template>
  <nav class="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Law Firm</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Home
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          About
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Contact
        </a>
      </div>
    </div>
  </nav>

  <section class="text-gray-700 p-8">
    <h2 class="text-2xl font-medium mb-2">Our Services</h2>
    <div class="flex flex-wrap -mx-2 overflow-hidden">
      <div v-for="(service, index) in services" :key="index" class="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/3 xl:w-1/4">
        <div class="bg-white rounded-lg overflow-hidden">
          <img class="w-full" :src="'https://picsum.photos/900/600'" :alt="service.title">
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">{{ service.title }}</h3>
            <p class="text-base">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Legal Advice',
    description: 'We provide professional legal advice to help you navigate the legal system. Our team of experienced lawyers can provide advice on a wide range of legal issues.',
    image: 'https://picsum.photos/900/600'
  },
  // Add more services as needed
]
</script>