<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
      <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
        <div class="font-sans font-bold break-normal pt-6 pb-2 text-gray-900 px-4 md:px-0 text-4xl">
          Art Gallery
        </div>
        <p class="py-6">
          Welcome to our Art Gallery, a unique, artistic design featuring a large, centered gallery image with a filtering sidebar. Our gallery showcases a wide range of artworks from various artists. We also host regular events where you can meet and interact with our artists. Sign up for our newsletter to stay updated about our upcoming events and new artworks.
        </p>
        <div class="py-6">
          <img class="h-64 mx-auto md:max-w-full" src="https://static.photos/art/900x600/167.webp" alt="Art Gallery">
        </div>
        <div class="py-6">
          <h2 class="text-2xl font-bold mb-4">Artists</h2>
          <p>
            Our artists are some of the most talented and innovative in the industry. They bring their unique perspectives and styles to every piece they create.
          </p>
        </div>
        <div class="py-6">
          <h2 class="text-2xl font-bold mb-4">Upcoming Events</h2>
          <p>
            We regularly host events where you can meet and interact with our artists. Check our website or sign up for our newsletter to stay updated about our upcoming events.
          </p>
        </div>
        <div class="py-6">
          <h2 class="text-2xl font-bold mb-4">Newsletter Signup</h2>
          <form @submit.prevent="handleSignup">
            <input class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-4" type="email" v-model="email" placeholder="Enter your email">
            <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const handleSignup = () => {
  // Add your signup logic here
  console.log('Email submitted:', email.value);
};
</script>