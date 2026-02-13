<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="flex items-center justify-between bg-white p-4">
      <img src="https://static.photos/health/300x300/98.webp" alt="Logo">
      <nav>
        <ul class="flex">
          <li class="mr-6"><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="services" class="py-16">
        <h2 class="text-3xl mb-8">Our Services</h2>
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 lg:w-1/3 p-4" v-for="(service, index) in services" :key="index">
            <h3 class="text-2xl mb-4">{{ service.title }}</h3>
            <p class="mb-4">{{ service.description }}</p>
            <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" @click="makeAppointment(service)">
              Make an appointment
            </button>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-white p-4">
      <div id="contact" class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 p-4" v-for="(contact, index) in contacts" :key="index">
          <h3 class="text-2xl mb-4">{{ contact.title }}</h3>
          <p class="mb-4">{{ contact.description }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const services = [
  {
    title: 'Service 1',
    description: 'Real and long sentences about the service 1.'
  },
  // Add more services as needed
];

const contacts = [
  {
    title: 'Contact Information',
    description: 'Real and long sentences about the contact information.'
  },
  // Add more contact information as needed
];

const makeAppointment = (service) => {
  alert(`Make an appointment for ${service.title}`);
};
</script>