<template>
  <div class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/art/1600x900/194.webp)' }">
    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center h-full">
      <div class="w-full">
        <h1 class="text-5xl font-bold text-white leading-tight">Photography Studio</h1>
        <p class="text-white text-2xl">We are a photography studio dedicated to capturing the beauty of life. Our passion for photography is reflected in every image we take.</p>
      </div>
    </div>
  </div>

  <!-- Portfolio Modal -->
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <!-- Portfolio Images -->
    </div>
  </div>

  <!-- Testimonials -->
  <div class="container mx-auto px-6 md:px-12 py-12">
    <h2 class="text-3xl font-bold mb-6">Testimonials</h2>
    <!-- Testimonial Cards -->
  </div>

  <!-- Services -->
  <div class="container mx-auto px-6 md:px-12 py-12">
    <h2 class="text-3xl font-bold mb-6">Services</h2>
    <!-- Service Cards -->
  </div>

  <!-- Footer -->
  <footer class="bg-white">
    <div class="container mx-auto px-6 md:px-12 py-6">
      <!-- Social Media Icons -->
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);

// Function to open the portfolio modal
const openModal = () => {
  showModal.value = true;
};

// Function to close the portfolio modal
const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
}
</style>