<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
      <div class="w-full px-4 md:flex md:-mx-4">
        <div class="w-full md:w-1/2 px-4 md:mx-2">
          <img class="w-full" src="https://static.photos/nature/900x600/141.webp" alt="Non-profit Organization">
        </div>
        <div class="w-full md:w-1/2 px-4 md:mx-2">
          <h2 class="my-4 text-2xl font-bold">Sign up for our newsletter</h2>
          <form @submit.prevent="handleSubmit">
            <input v-model="email" class="w-full p-3 mb-2" type="email" placeholder="Your email">
            <button class="w-full p-3 bg-blue-500 text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="w-full px-4 md:flex md:-mx-4 my-4">
        <div class="w-full md:w-1/2 px-4 md:mx-2">
          <h2 class="my-4 text-2xl font-bold">Our Mission</h2>
          <p class="mb-4">
            At our non-profit organization, we are committed to making a positive impact in our community. We believe in the power of collaboration and in the transformative power of ideas. We strive to create a world where everyone has the opportunity to thrive.
          </p>
        </div>
        <div class="w-full md:w-1/2 px-4 md:mx-2">
          <h2 class="my-4 text-2xl font-bold">Our Programs</h2>
          <p class="mb-4">
            We offer a variety of programs to meet the needs of our community. These include educational programs, health and wellness initiatives, and community engagement events. We believe that everyone has the potential to make a difference, and we are dedicated to providing the resources and support they need to do so.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const handleSubmit = () => {
  // Handle form submission logic here
};
</script>