<template>
  <div class="container w-full md:max-w-3xl mx-auto pt-20">
    <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal font-serif" :style="{ backgroundImage: 'url(https://picsum.photos/seed/339/1600/900)' }">
      <div class="font-sans overflow-hidden">
        <div class="w-full md:flex">
          <div class="w-full md:w-2/3 flex-grow md:flex md:flex-wrap p-8 md:p-12 border-t-4 border-orange-600 bg-white">
            <div class="w-full md:w-1/3 p-3 flex-grow flex-wrap">
              <div class="w-full p-2">
                <h1 class="font-bold uppercase text-orange-600 mb-4">Our Programs</h1>
                <p class="leading-loose text-sm">
                  At our educational institution, we offer a variety of programs and courses designed to meet the needs of our students. Whether you're interested in learning a new language, pursuing a career in the arts, or improving your health and fitness, we have a program that's right for you.
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-4 md:p-12 md:border-t-0 border-t-4 border-orange-600 bg-white">
            <div class="p-3">
              <h1 class="font-bold uppercase text-orange-600 mb-4">Quick Links</h1>
              <ul class="leading-loose text-sm">
                <li>About Us</li>
                <li>Programs</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Tailwind CSS is included via CDN in the template */
</style>