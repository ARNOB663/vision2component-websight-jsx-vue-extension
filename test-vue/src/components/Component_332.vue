<template>
  <div class="w-full h-64 bg-center bg-cover" :style="{ backgroundImage: 'url(https://picsum.photos/seed/332/1600/900)' }"></div>
  <nav class="fixed bottom-0 w-full bg-white shadow-md">
    <ul class="flex justify-around py-4">
      <li><a href="#programs" class="text-blue-500 hover:text-blue-700">Programs</a></li>
      <li><a href="#faculty" class="text-blue-500 hover:text-blue-700">Faculty</a></li>
      <li><a href="#student-life" class="text-blue-500 hover:text-blue-700">Student Life</a></li>
      <li><a href="#admissions" class="text-blue-500 hover:text-blue-700">Admissions</a></li>
    </ul>
  </nav>
  <div id="programs" class="p-4">
    <h1 class="text-2xl font-bold mb-4">Programs</h1>
    <p>Our programs are designed to provide students with a comprehensive education in the field of their choice. We offer a variety of programs in various disciplines, including but not limited to, science, technology, engineering, and mathematics.</p>
  </div>
  <div id="faculty" class="p-4">
    <h1 class="text-2xl font-bold mb-4">Faculty</h1>
    <p>Our faculty is composed of highly qualified and experienced professionals who are dedicated to providing the best possible education to our students. Our faculty members are experts in their respective fields and are committed to helping students reach their full potential.</p>
  </div>
  <div id="student-life" class="p-4">
    <h1 class="text-2xl font-bold mb-4">Student Life</h1>
    <p>At our institution, we believe that a well-rounded education is not just about academic excellence, but also about fostering a sense of community and personal growth. We offer a variety of extracurricular activities and events that allow our students to explore their interests and develop their skills.</p>
  </div>
  <div id="admissions" class="p-4">
    <h1 class="text-2xl font-bold mb-4">Admissions</h1>
    <p>We are always looking for talented and motivated students to join our community. If you are interested in learning more about our programs and admissions process, please contact us.</p>
  </div>
</template>

<script setup>
// No script needed for this example
</script>