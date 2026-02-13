<template>
  <div class="bg-gray-100">
    <header class="bg-gray-500 text-white p-4">
      <h1 class="text-2xl font-bold">Sports Team</h1>
    </header>

    <nav class="bg-gray-300 p-4">
      <ul class="flex space-x-4">
        <li><a href="#schedule" class="text-white">Game Schedules</a></li>
        <li><a href="#profiles" class="text-white">Player Profiles</a></li>
        <li><a href="#merchandise" class="text-white">Team Merchandise</a></li>
      </ul>
    </nav>

    <main class="p-4">
      <section id="schedule">
        <h2 class="text-xl font-bold">Game Schedules</h2>
        <p>Here you can find the schedule of our upcoming games.</p>
      </section>

      <section id="profiles">
        <h2 class="text-xl font-bold">Player Profiles</h2>
        <p>Meet the players of our team.</p>
      </section>

      <section id="merchandise">
        <h2 class="text-xl font-bold">Team Merchandise</h2>
        <p>Check out our team merchandise.</p>
      </section>
    </main>

    <footer class="bg-gray-500 text-white p-4">
      <p>© 2022 Sports Team. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this simple example
</script>