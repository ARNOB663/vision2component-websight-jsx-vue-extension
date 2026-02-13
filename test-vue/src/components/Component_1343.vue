<template>
  <div class="bg-red-500 text-white">
    <header class="bg-red-800 p-4">
      <h1 class="text-2xl">Education and Training Institute</h1>
    </header>
    <main class="flex p-4">
      <section class="w-1/2">
        <h2 class="text-xl">About Us</h2>
        <p>
          At our education and training institute, we are committed to providing high-quality education and training to our students. Our experienced and dedicated faculty are committed to helping our students reach their full potential. We offer a wide range of programs and courses, catering to the diverse needs of our students.
        </p>
      </section>
      <aside class="w-1/2">
        <h2 class="text-xl">Our Programs</h2>
        <ul>
          <li>Program 1</li>
          <li>Program 2</li>
          <li>Program 3</li>
        </ul>
      </aside>
    </main>
    <footer class="bg-red-800 p-4">
      <h2 class="text-xl">Contact Us</h2>
      <form @submit.prevent="handleSubmit">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" v-model="formData.name" class="w-full">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="formData.email" class="w-full">
        <label for="message">Message</label>
        <textarea id="message" name="message" v-model="formData.message" class="w-full"></textarea>
        <button type="submit" class="bg-red-500 text-white p-2">Submit</button>
      </form>
    </footer>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const formData = reactive({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  // Handle form submission logic here
};
</script>