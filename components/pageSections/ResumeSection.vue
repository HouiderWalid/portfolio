<script setup lang="ts">

import TitledSection from "~/components/pageSections/TitledSection.vue";
import SvgIcon from "@jamescoyle/vue-icon/lib/svg-icon.vue";
import {mdiSchool, mdiBriefcase} from '@mdi/js'
</script>

<template>
  <TitledSection id="resume" title="RESUME" sub-title="More of my credentials" class="bg-gray-200 text-gray-800">
    <h3 class="my-8 text-2xl text-green-500">Education</h3>
    <table>
      <tr>
        <td class="border-e-2 border-e-gray-400 align-top relative">
          <div class="flex flex-col py-4 px-8 gap-1">
            <div class="absolute right-0 p-3 rounded-full bg-gray-800" style="margin-inline-end: -24px">
              <svg-icon :path="mdiSchool" class="text-white" type="mdi"></svg-icon>
            </div>
            <h4 class="text-end text-xl">Master</h4>
            <p class="text-end mb-0 text-md text-gray-500">October 2016 - June 2019</p>
          </div>
        </td>
        <td>
          <div class="flex flex-col max-w-xl py-4 px-8 gap-4">
            <h3 class="text-lg border-b-2 pb-4 border-b-gray-400">Master in Computer Engineering</h3>
            <p class="text-md text-gray-500">
              In this period the studies were generaly focused on PHP and J2EE, a basic knowledge of some JS
              frameworks like Angular, and also we had to build an android app using android studio.
            </p>
          </div>
        </td>
      </tr>
      <tr>
        <td class="relative border-e-2 border-e-gray-400 align-top">
          <div class="flex flex-col py-4 px-8 gap-1">
            <div class="absolute right-0 p-3 rounded-full bg-gray-800" style="margin-inline-end: -24px">
              <svg-icon :path="mdiSchool" class="text-white" type="mdi"></svg-icon>
            </div>
            <h4 class="text-end text-xl">Pre-Master Degree</h4>
            <p class="text-end mb-0 text-md text-gray-500">October 2013 - June 2016</p>
          </div>
        </td>
        <td>
          <div class="flex flex-col max-w-xl py-4 px-8 gap-4">
            <h3 class="text-lg border-b-2 pb-4 border-b-gray-400">Computer Engineering Degree</h3>
            <p class="text-md text-gray-500">
              This degree was about all the basics of html css and javascript, and creating a basic non dynamic web
              pages.
            </p>
          </div>
        </td>
      </tr>
      <tr>
        <td class="relative border-e-2 border-e-gray-400 align-top">
          <div class="flex flex-col py-4 px-8 gap-1">
            <div class="absolute right-0 p-3 rounded-full bg-gray-800" style="margin-inline-end: -24px">
              <svg-icon :path="mdiSchool" class="text-white" type="mdi"></svg-icon>
            </div>
            <h4 class="text-end text-xl">Bachelor</h4>
            <p class="text-end mb-0 text-md text-gray-500">September 2012 - June 2013</p>
          </div>
        </td>
        <td>
          <div class="flex flex-col max-w-xl py-4 px-8 gap-4">
            <h3 class="text-lg border-b-2 pb-4 border-b-gray-400">Bachelor of Electrical Technologies</h3>
            <p class="text-md text-gray-500">
              In this Bachelor period we learned all about the binary system and coding algorithms
            </p>
          </div>
        </td>
      </tr>

      <tr>
        <td colspan="2">
          <h3 class="my-16 text-2xl text-center text-green-500">Work Experience</h3>
        </td>
      </tr>

      <tr>
        <td class="relative border-e-2 border-e-gray-400 align-top">
          <div class="flex flex-col py-4 px-8 gap-1">
            <div class="absolute right-0 p-3 rounded-full bg-gray-800" style="margin-inline-end: -24px">
              <svg-icon :path="mdiBriefcase" class="text-white" type="mdi"></svg-icon>
            </div>
            <h4 class="text-end text-xl">Full Stack Web Dev</h4>
            <p class="text-end mb-0 text-md text-gray-500">Since May 2021</p>
          </div>
        </td>
        <td>
          <div class="flex flex-col max-w-xl py-4 px-8 gap-4">
            <h3 class="text-lg border-b-2 pb-4 border-b-gray-400">Creation of an Affiliate Network</h3>
            <ul class="text-md text-gray-500">
              <li>Creation of dynamic sale page using Nuxt</li>
              <li>Creation of a dashboard to manage users (affiliates, sellers...) using VueJs</li>
              <li>Creation of the back-end using Laravel</li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td class="relative border-e-2 border-e-gray-400 align-top">
          <div class="flex flex-col py-4 px-8 gap-1">
            <div class="absolute right-0 p-3 rounded-full bg-gray-800" style="margin-inline-end: -24px">
              <svg-icon :path="mdiBriefcase" class="text-white" type="mdi"></svg-icon>
            </div>
            <h4 class="text-end text-xl">Web and mobile Developer</h4>
            <p class="text-end mb-0 text-md text-gray-500">May 2019 - February 2020</p>
          </div>
        </td>
        <td>
          <div class="flex flex-col max-w-xl py-4 px-8 gap-4">
            <h3 class="text-lg border-b-2 pb-4 border-b-gray-400">Create a mobile and desktop application</h3>
            <ul class="text-md text-gray-500">
              <li>Create an application desktop of stock management (J2EE)</li>
              <li>Create an android application of delivery (Java)</li>
              <li></li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td class="relative border-e-2 border-e-gray-400 align-top">
          <div class="flex flex-col py-4 px-8 gap-1">
            <div class="absolute right-0 p-3 rounded-full bg-gray-800" style="margin-inline-end: -24px">
              <svg-icon :path="mdiBriefcase" class="text-white" type="mdi"></svg-icon>
            </div>
            <h4 class="text-end text-xl">Project of end of education</h4>
            <p class="text-end mb-0 text-md text-gray-500">September 2018 - December 2018</p>
          </div>
        </td>
        <td>
          <div class="flex flex-col max-w-xl py-4 px-8 gap-4">
            <h3 class="text-lg border-b-2 pb-4 border-b-gray-400">e-commerce web and mobile application</h3>
            <p class="text-md text-gray-500">
              Create a small e-commerce web and mobile application using symfony 4.
            </p>
          </div>
        </td>
      </tr>
    </table>
  </TitledSection>
</template>

<style scoped>

</style>