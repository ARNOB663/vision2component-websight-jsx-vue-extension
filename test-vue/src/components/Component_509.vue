<template>
  <div class="container w-full md:w-1/2 xl:w-1/3 p-5 mx-auto">
    <section class="flex flex-col break-words bg-white border border-gray-300 rounded shadow">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg font-semibold">{{ project.title }}</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-600">
          {{ project.description }}
        </p>
      </div>
      <img class="w-full" :src="'https://picsum.photos/900/600'" alt="Project Image">
      <div class="px-4 py-5 sm:px-6">
        <button class="px-4 py-1 text-sm text-purple-600 bg-purple-200 rounded"
                @click="handleCallToAction">
          Call to Action
        </button>
      </div>
      <div class="px-4 py-5 border-t border-gray-300 sm:px-6">
        <ul class="space-y-3">
          <li v-for="(info, index) in project.info" :key="index">
            <h4 class="text-sm font-semibold">{{ info.title }}</h4>
            <p class="text-sm text-gray-600">
              {{ info.description }}
            </p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const project = ref({
  title: 'Project Title',
  description: 'Real and long sentences about the business.',
  image: 'https://picsum.photos/900/600',
  info: [
    {
      title: 'Project Team',
      description: 'Real and long sentences about the project team.'
    },
    {
      title: 'Location',
      description: 'Real and long sentences about the location.'
    },
    {
      title: 'Services Provided',
      description: 'Real and long sentences about the services provided.'
    }
  ]
});

const handleCallToAction = () => {
  // Add your call-to-action logic here
};
</script>

<style scoped>
/* Add any additional styles here */
</style>