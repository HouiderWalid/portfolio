<script setup lang="ts">

import TitledSection from "~/components/pageSections/TitledSection.vue";

function downloadCV() {
  const link = document.createElement('a');
  link.href = 'cv.pdf';
  link.download = 'cv.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

</script>

<template>
  <TitledSection id="about" title="ABOUT" sub-title="Let me introduce myself." class="bg-gray-100 text-gray-800">
    <div class="flex flex-col md:flex-row items-center py-6 max-w-3xl gap-9">
      <img alt="Houider Walid Image" width="96" height="96" src="../../public/houider-walid-image-96x96.webp"
           style="border-radius: 50%">
      <p class="text-xl text-gray-500 md:text-start text-center mx-4 md:mx-0">
        I'm a full stack web developer, with 4 years of experience, I'm mostly good at laravel/php and vueJs,
        but i have good knowledge on several languages/frameworks, so don't hesitate to contact me about anything.
        what i do like in my projects is clarity and simplicity.
      </p>
    </div>
    <div class="max-w-3xl flex w-full flex-col md:flex-row justify-between gap-20">
      <div class="flex flex-col gap-5 w-full text-center md:text-start">
        <div class="flex flex-col text-gray-500">
          <span class="font-bold text-gray-800">FULLNAME:</span>
          Houider Walid
        </div>
        <div class="flex flex-col text-gray-500">
          <span class="font-bold text-gray-800">BIRTH DATE:</span>
          June 17,1993
        </div>
        <div class="flex flex-col text-gray-500">
          <span class="font-bold text-gray-800">JOB:</span>
          Freelancer, Full Stack Web Developer
        </div>
        <div class="flex flex-col text-gray-500">
          <span class="font-bold text-gray-800">WEBSITE:</span>
          www.houiderwalid.com
        </div>
        <div class="flex flex-col text-gray-500">
          <span class="font-bold text-gray-800">EMAIL:</span>
          houiderwalid@gmail.com
        </div>

      </div>
      <div class="flex flex-col gap-7 w-full items-center">
        <div class="flex flex-col">
          <span class="font-bold mb-2 text-gray-800">PHP</span>
          <div class="h-1.5 bg-gray-400 w-80">
            <div class="relative h-full bg-gray-700 w-[95%]">
              <div
                  class="absolute flex justify-center bg-gray-800 text-xs bottom-0 right-0 rounded-md text-white px-2 py-1 mb-5">
                95%
                <div class="absolute border-x-8 border-t-8 border-transparent border-t-gray-800 mt-5 w-0 h-0"/>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="font-bold mb-2 text-gray-800">WORDPRESS</span>
          <div class="h-1.5 bg-gray-400 w-80">
            <div class="relative h-full bg-gray-700 w-[70%]">
              <div
                  class="absolute flex justify-center bg-gray-800 text-xs bottom-0 right-0 rounded-md text-white px-2 py-1 mb-5">
                70%
                <div class="absolute border-x-8 border-t-8 border-transparent border-t-gray-800 mt-5 w-0 h-0"/>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="font-bold mb-2 text-gray-800">JAVASCRIPT</span>
          <div class="h-1.5 bg-gray-400 w-80">
            <div class="relative h-full bg-gray-700 w-[95%]">
              <div
                  class="absolute flex justify-center bg-gray-800 text-xs bottom-0 right-0 rounded-md text-white px-2 py-1 mb-5">
                95%
                <div class="absolute border-x-8 border-t-8 border-transparent border-t-gray-800 mt-5 w-0 h-0"/>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="font-bold mb-2 text-gray-800">VUEJS</span>
          <div class="h-1.5 bg-gray-400 w-80">
            <div class="relative h-full bg-gray-700 w-[90%]">
              <div
                  class="absolute flex justify-center bg-gray-800 text-xs bottom-0 right-0 rounded-md text-white px-2 py-1 mb-5">
                90%
                <div class="absolute border-x-8 border-t-8 border-transparent border-t-gray-800 mt-5 w-0 h-0"/>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col mb-2 text-gray-800">
          <span class="font-bold mb-2">LARAVEL</span>
          <div class="h-1.5 bg-gray-400 w-80">
            <div class="relative h-full bg-gray-700 w-[95%]">
              <div
                  class="absolute flex justify-center bg-gray-800 text-xs bottom-0 right-0 rounded-md text-white px-2 py-1 mb-5">
                95%
                <div class="absolute border-x-8 border-t-8 border-transparent border-t-gray-800 mt-5 w-0 h-0"/>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="flex gap-10 mt-16 flex-col sm:flex-row">
      <!--        <div class="flex justify-end">
                <a href="#contact" class="flex justify-center border-4 border-gray-800 hover:text-gray-600 hover:border-gray-600 py-3 w-60 px-6 font-bold">
                  HIRE ME
                </a>
              </div>-->
      <div class="flex">
        <button
            class="border-4 border-gray-800 bg-gray-800 hover:bg-gray-600 hover:border-gray-600 text-white py-3 w-60 px-6 font-bold"
            @click="downloadCV">
          DOWNLOAD CV
        </button>
      </div>
    </div>
  </TitledSection>
</template>

<style scoped>

</style>