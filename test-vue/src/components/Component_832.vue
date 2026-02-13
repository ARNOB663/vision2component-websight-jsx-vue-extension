<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: `url('${headerImage}')` }">
    <div class="container mx-auto px-6 md:flex md:items-center md:justify-between py-4">
      <div class="text-center text-white">
        <h1 class="font-bold uppercase text-5xl pt-20 md:text-6xl">{{ title }}</h1>
        <p class="text-2xl pt-10">{{ subtitle }}</p>
        <button class="bg-white text-green-800 font-bold rounded-full mt-10 px-4 py-3">{{ buttonText }}</button>
      </div>
    </div>
  </header>
  <section class="container mx-auto px-6 py-20">
    <div class="flex flex-wrap -mx-2">
      <div class="w-full md:w-1/3 px-2 mb-5">
        <h2 class="text-3xl font-bold mb-5">{{ featureTitle }}</h2>
        <p>{{ featureDescription }}</p>
      </div>
      <div class="w-full md:w-1/3 px-2 mb-5">
        <h2 class="text-3xl font-bold mb-5">{{ serviceTitle }}</h2>
        <p>{{ serviceDescription }}</p>
      </div>
      <div class="w-full md:w-1/3 px-2 mb-5">
        <h2 class="text-3xl font-bold mb-5">{{ solutionTitle }}</h2>
        <p>{{ solutionDescription }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const headerImage = 'https://static.photos/technology/1600x900/33.webp';
const title = 'Welcome to our Technology Company';
const subtitle = 'We are a leading provider of cutting-edge technology solutions. Our mission is to empower businesses with the tools they need to succeed in the digital age.';
const buttonText = 'Learn More';

const featureTitle = 'Features';
const featureDescription = 'Our products are designed to meet the needs of businesses of all sizes. We offer a wide range of features to help you streamline your operations and stay ahead of the competition.';

const serviceTitle = 'Services';
const serviceDescription = 'We offer a comprehensive suite of services to help you get the most out of your technology investments. Our team of experts is available to provide you with the support you need.';

const solutionTitle = 'Solutions';
const solutionDescription = 'We understand that every business is unique, which is why we offer a variety of solutions to fit your specific needs. Whether you\'re a small startup or a large corporation, we have the right solution for you.';
</script>