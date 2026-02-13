<template>
  <div class="bg-gray-100 min-h-screen relative">
    <nav class="absolute w-full bg-white shadow-lg transition-transform duration-300 transform -translate-y-16" :class="{ 'translate-y-0': !isScrolled }">
      <!-- Navigation links go here -->
    </nav>

    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-4">Health and Wellness Site</h1>
      <p class="mb-4">
        Welcome to our Health and Wellness Site, your one-stop destination for all things health and wellness. We are dedicated to providing you with the best information, resources, and support to help you live a healthier, happier life. Whether you're looking for health tips, fitness advice, or mental wellness resources, we've got you covered. Our team of experts is here to help you navigate the complexities of health and wellness, and to provide you with the tools and support you need to achieve your goals.
      </p>
      <div class="bg-gray-100 p-4 mb-4">
        <h2 class="text-2xl font-bold mb-2">Health Tips</h2>
        <p>
          Health tips are a great way to improve your health and wellbeing. They can range from simple habits to complex lifestyle changes. Here are some tips to get you started:
        </p>
      </div>
      <div class="bg-green-100 p-4 mb-4">
        <h2 class="text-2xl font-bold mb-2">Fitness Advice</h2>
        <p>
          Fitness is not just about building muscle. It's about improving your overall health and wellbeing. Here are some tips to get you started:
        </p>
      </div>
      <div class="bg-red-100 p-4 mb-4">
        <h2 class="text-2xl font-bold mb-2">Mental Wellness</h2>
        <p>
          Mental wellness is just as important as physical wellness. Here are some tips to help you:
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>