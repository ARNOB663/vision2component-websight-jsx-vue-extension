<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Nonprofit Organization</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#mission" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Mission
        </a>
        <a href="#donate" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Donate
        </a>
        <a href="#volunteer" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Volunteer
        </a>
      </div>
    </div>
  </nav>

  <section id="mission" class="py-8 px-4">
    <h2 class="text-2xl text-center">Our Mission</h2>
    <p class="text-lg text-center mt-4">
      At Nonprofit Organization, we believe in the power of community and strive to make a difference in the world. We are dedicated to providing aid and support to those in need, and we believe that everyone has the power to make a difference. Join us in our mission to create a better world.
    </p>
  </section>

  <section id="donate" class="py-8 px-4">
    <h2 class="text-2xl text-center">Donate</h2>
    <p class="text-lg text-center mt-4">
      We rely on the generosity of our supporters to continue our work. Your donation will help us to provide essential services to those in need.
    </p>
    <!-- Donation form goes here -->
  </section>

  <section id="volunteer" class="py-8 px-4">
    <h2 class="text-2xl text-center">Volunteer</h2>
    <p class="text-lg text-center mt-4">
      We are always looking for volunteers to help us in our mission. Whether you're a professional in a particular field or just a passionate individual, there's a place for you at Nonprofit Organization.
    </p>
    <!-- Volunteer form goes here -->
  </section>
</template>

<script setup>
// No script needed for this example
</script>