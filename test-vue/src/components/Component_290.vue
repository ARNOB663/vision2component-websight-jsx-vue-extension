<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
      <div class="text-center">
        <img src="https://picsum.photos/seed/290/300/300" alt="Education Platform Logo" class="mx-auto h-12 w-auto">
        <h2 class="text-lg font-medium text-gray-900">Welcome to our Education Platform</h2>
        <p class="mt-2 text-sm text-gray-600">
          We are a leading provider of online education. Our platform offers a wide range of courses in various subjects, from programming to art history. Our courses are designed to provide comprehensive learning experiences, with each course including video lectures, quizzes, and assignments.
        </p>
      </div>
      <div class="mt-8">
        <div class="mt-6">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div class="mt-1">
                <input id="email" v-model="email" name="email" type="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
            </div>
            <div>
              <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Search for courses
              </button>
            </div>
          </form>
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