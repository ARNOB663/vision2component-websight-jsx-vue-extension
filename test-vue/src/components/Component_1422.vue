<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white text-center p-8">
      <h1 class="text-5xl">Charity Organization</h1>
      <p class="text-xl">A warm and welcoming design with a prominent storytelling approach.</p>
    </header>

    <main class="flex flex-wrap">
      <section class="w-full md:w-1/2 p-4">
        <img src="https://static.photos/people/900x600/24.webp" alt="Charity Image" class="w-full h-auto">
      </section>

      <section class="w-full md:w-1/2 flex items-center justify-center p-4">
        <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" @click="handleDonate">Donate Now</button>
      </section>
    </main>

    <footer class="bg-white text-center p-8">
      <h2 class="text-2xl">Our Mission</h2>
      <p class="text-lg">To provide aid and support to those in need, promoting social responsibility and helping to create a better world.</p>

      <h2 class="text-2xl mt-8">Testimonials</h2>
      <p class="text-lg">"Charity Organization has made a significant difference in my life. I couldn't imagine living without their help." - John Doe</p>

      <h2 class="text-2xl mt-8">Volunteer Form</h2>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" v-model="formData.name" type="text" placeholder="Name" required>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" v-model="formData.email" type="email" placeholder="Email" required>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </footer>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const formData = reactive({
  name: '',
  email: ''
});

const handleDonate = () => {
  alert('Thank you for your donation!');
};

const handleSubmit = () => {
  alert(`Form submitted with name: ${formData.name} and email: ${formData.email}`);
};
</script>