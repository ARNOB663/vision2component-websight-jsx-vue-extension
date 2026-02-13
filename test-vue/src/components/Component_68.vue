<template>
  <header class="bg-white p-4 flex justify-between items-center">
    <div>
      <img src="https://picsum.photos/seed/68/300/300" alt="Logo">
    </div>
    <div>
      <input type="text" placeholder="Search..." class="border rounded p-2">
    </div>
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="flex p-4">
    <section class="w-3/4">
      <!-- Masonry layout here -->
    </section>

    <aside class="w-1/4 p-4 bg-white">
      <!-- Sidebar content here -->
    </aside>
  </main>

  <footer class="bg-white p-4 text-center">
    <p>© 2022 Food Company. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>