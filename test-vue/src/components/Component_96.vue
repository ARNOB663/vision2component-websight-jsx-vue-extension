<template>
  <div class="bg-gray-900 text-white flex">
    <div class="w-64 bg-gray-800 h-screen hidden" id="sidebar">
      <!-- Sidebar content here -->
    </div>
    <div class="flex-1">
      <header class="flex items-center justify-between p-4">
        <h1 class="text-2xl font-bold">Tech Startup</h1>
        <button id="toggleSidebar">
          <!-- Hamburger icon here -->
        </button>
      </header>
      <main class="p-4">
        <img src="https://picsum.photos/seed/96/900/600" alt="Tech image" class="w-full">
        <div class="mt-4">
          <h2 class="text-xl font-bold">Welcome to our tech startup</h2>
          <p class="mt-2">
            At our tech startup, we are committed to providing innovative and efficient solutions to our clients. Our team of experts is dedicated to delivering the best possible service, ensuring that our clients are always satisfied with our work. We believe in the power of technology to transform businesses and improve lives.
          </p>
          <!-- CTA button here -->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const toggleSidebar = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');

  if (toggleSidebar && sidebar) {
    toggleSidebar.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
    });
  }
});
</script>