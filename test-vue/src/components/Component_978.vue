<template>
  <header class="bg-pink-500 text-white p-4">
    <div class="container mx-auto flex justify-between">
      <h1 class="text-2xl font-bold">Financial Services Company</h1>
      <nav>
        <ul class="flex">
          <li class="mr-4"><a href="#">Home</a></li>
          <li class="mr-4"><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="container mx-auto p-4">
    <section class="my-8">
      <h2 class="text-3xl font-bold mb-4">Welcome to our Financial Services Company</h2>
      <p class="mb-4">We provide a wide range of financial services to help you achieve your financial goals. Whether you're looking for personal finance advice, investment advice, or tax planning, we're here to help.</p>
      <button class="bg-pink-500 text-white px-4 py-2 rounded">Learn More</button>
    </section>

    <section class="my-8">
      <h2 class="text-3xl font-bold mb-4">Our Services</h2>
      <p class="mb-4">We offer a variety of services including personal finance advice, investment advice, tax planning, and more.</p>
      <button class="bg-pink-500 text-white px-4 py-2 rounded">View Services</button>
    </section>
  </main>

  <footer class="bg-pink-500 text-white p-4">
    <div class="container mx-auto">
      <p class="mb-4">Sign up for our newsletter to stay updated on the latest financial news and services.</p>
      <form @submit.prevent="handleNewsletterSignup">
        <input type="email" v-model="email" placeholder="Enter your email" class="px-4 py-2 mr-2">
        <button class="bg-white text-pink-500 px-4 py-2 rounded">Sign Up</button>
      </form>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const handleNewsletterSignup = () => {
  // Add your newsletter signup logic here
  console.log('Email submitted:', email.value);
};
</script>