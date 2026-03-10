<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <div class="fixed top-0 left-0 w-64 h-full bg-white border-r border-gray-200 overflow-y-auto z-50">
      <div class="p-4 border-b border-gray-200">
        <h1 class="text-lg font-bold">Vue Components</h1>
        <p class="text-sm text-gray-500">{{ componentIds.length }} components</p>
      </div>

      <!-- Go-to input -->
      <form @submit.prevent="goToComponent" class="p-2 border-b border-gray-200">
        <div class="flex gap-1">
          <input
            v-model="goToInput"
            type="number"
            placeholder="Go to ID..."
            class="flex-1 px-2 py-1 text-sm border border-gray-300 rounded"
          />
          <button
            type="submit"
            class="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Go
          </button>
        </div>
      </form>

      <!-- Pagination controls -->
      <div class="flex items-center justify-between p-2 border-b border-gray-200 text-xs text-gray-500">
        <button
          @click="page = Math.max(0, page - 1)"
          :disabled="page === 0"
          class="px-2 py-1 bg-gray-100 rounded disabled:opacity-30 hover:bg-gray-200"
        >
          ← Prev
        </button>
        <span>Page {{ page + 1 }}/{{ totalPages }}</span>
        <button
          @click="page = Math.min(totalPages - 1, page + 1)"
          :disabled="page >= totalPages - 1"
          class="px-2 py-1 bg-gray-100 rounded disabled:opacity-30 hover:bg-gray-200"
        >
          Next →
        </button>
      </div>

      <nav class="p-2">
        <button
          v-for="id in pageItems"
          :key="id"
          @click="selectedId = id"
          :class="[
            'w-full text-left px-3 py-2 rounded text-sm mb-1',
            selectedId === id
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-100 text-gray-700',
          ]"
        >
          Component #{{ id }}
        </button>
      </nav>
    </div>

    <!-- Main content -->
    <div class="ml-64">
      <template v-if="selectedId !== null">
        <div class="border-b bg-white px-6 py-3 sticky top-0 z-40">
          <span class="text-sm font-medium text-gray-500">
            Viewing: Component #{{ selectedId }}
          </span>
        </div>
        <div v-if="loadError" class="p-8 bg-red-50 border border-red-200 rounded m-4">
          <h2 class="text-red-700 font-bold text-lg mb-2">
            Component #{{ selectedId }} - Load Error
          </h2>
          <pre class="text-red-600 text-sm whitespace-pre-wrap">{{ loadError }}</pre>
        </div>
        <div v-else-if="!loadedComponent" class="p-8 text-gray-400">
          Loading component #{{ selectedId }}...
        </div>
        <component v-else :is="loadedComponent" />
      </template>
      <div v-else class="flex items-center justify-center h-screen text-gray-400">
        Select a component from the sidebar
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, shallowRef } from "vue";
import componentIds from "./components/index.js";

const ITEMS_PER_PAGE = 50;

const selectedId = ref(null);
const page = ref(0);
const goToInput = ref("");
const loadedComponent = shallowRef(null);
const loadError = ref(null);

const totalPages = computed(() => Math.ceil(componentIds.length / ITEMS_PER_PAGE));
const startIdx = computed(() => page.value * ITEMS_PER_PAGE);
const pageItems = computed(() =>
  componentIds.slice(startIdx.value, startIdx.value + ITEMS_PER_PAGE)
);

function goToComponent() {
  const id = parseInt(goToInput.value, 10);
  if (!isNaN(id) && componentIds.includes(id)) {
    selectedId.value = id;
    const idx = componentIds.indexOf(id);
    page.value = Math.floor(idx / ITEMS_PER_PAGE);
  }
}

// Lazy-load component when selectedId changes
watch(selectedId, async (id) => {
  if (id === null) {
    loadedComponent.value = null;
    loadError.value = null;
    return;
  }

  loadedComponent.value = null;
  loadError.value = null;

  try {
    // Use @vite-ignore to prevent Vite from pre-scanning all component files
    const mod = await import(/* @vite-ignore */ `./components/Component_${id}.vue`);
    loadedComponent.value = mod.default;
  } catch (err) {
    loadError.value = String(err?.message || err);
  }
});
</script>
