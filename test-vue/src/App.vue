<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <div class="fixed top-0 left-0 w-64 h-full bg-white border-r border-gray-200 overflow-y-auto z-50">
      <div class="p-4 border-b border-gray-200">
        <h1 class="text-lg font-bold">Vue Components</h1>
        <p class="text-sm text-gray-500">{{ components.length }} components</p>
      </div>
      <nav class="p-2">
        <button
          v-for="c in components"
          :key="c.id"
          @click="selectedId = c.id"
          :class="[
            'w-full text-left px-3 py-2 rounded text-sm mb-1',
            selectedId === c.id
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-100 text-gray-700',
          ]"
        >
          Component #{{ c.id }}
        </button>
      </nav>
    </div>

    <!-- Main content -->
    <div class="ml-64">
      <template v-if="selected">
        <div class="border-b bg-white px-6 py-3 sticky top-0 z-40">
          <span class="text-sm font-medium text-gray-500">
            Viewing: Component #{{ selectedId }}
          </span>
        </div>
        <component :is="selected.component" />
      </template>
      <div v-else class="flex items-center justify-center h-screen text-gray-400">
        Select a component from the sidebar
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import components from "./components/index.js";

const selectedId = ref(null);
const selected = computed(() => components.find((c) => c.id === selectedId.value));
</script>
