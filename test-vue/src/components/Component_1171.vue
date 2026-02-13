<template>
  <div class="relative bg-green-900 text-white">
    <video class="w-full" autoplay loop muted>
      <source src="https://static.photos/fitness/900x600/172.webp" type="video/mp4">
    </video>
    <div class="absolute inset-0 flex items-center justify-center">
      <button class="bg-white text-green-900 px-4 py-2 rounded">Join Now</button>
    </div>
  </div>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl text-center mb-4">Welcome to Our Fitness Club</h1>
    <p class="text-center mb-4">
      At our fitness club, we believe that fitness is not just about building a body, it's about building a life. We offer a wide range of classes and memberships to help you achieve your fitness goals. Whether you're a beginner or a seasoned athlete, we have something for everyone.
    </p>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 p-4">
        <h2 class="text-2xl mb-2">Membership Details</h2>
        <p>
          Our membership options are designed to fit your lifestyle and budget. We offer monthly, quarterly, and annual memberships. All memberships include access to our state-of-the-art fitness facilities and a variety of classes.
        </p>
      </div>
      <div class="w-full md:w-1/2 p-4">
        <h2 class="text-2xl mb-2">Class Schedules</h2>
        <p>
          Our class schedules are designed to fit your schedule. We offer a variety of classes, from yoga and pilates to boxing and kickboxing. All classes are led by experienced instructors and are designed to help you reach your fitness goals.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>