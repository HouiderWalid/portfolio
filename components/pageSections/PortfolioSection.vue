<script setup lang="ts">

import TitledSection from "~/components/pageSections/TitledSection.vue";
import SvgIcon from "@jamescoyle/vue-icon/lib/svg-icon.vue";
import {mdiGithub, mdiOpenInNew, mdiEye} from '@mdi/js'
import ImageModal from "~/components/ImageModal.vue";

const isModelOpen = ref(false);
const selectedImage = ref();

const projects = [
  {
    title: 'Excursion Website',
    links: {
      site: 'https://letstravel.houiderwalid.com',
      github: 'https://github.com/HouiderWalid/simo-travel'
    },
    image: {
      original: '/simo-travel.png',
      src: '/simo-travel-368x278.webp',
      alt: 'Excursion And Travel Website'
    },
    skills: [
      {
        name: 'Wordpress'
      },
      {
        name: 'Tailwind'
      }
    ]
  },
  {
    title: 'Seller Platform Dashboard',
    links: {
      site: 'https://dash.maxcom.store',
    },
    image: {
      original: '/maxcom-shop-dash-screenshot.png',
      src: '/maxcom-shop-dash-screenshot-506x256.webp',
      alt: 'Seller Store Platform'
    },
    skills: [
      {
        name: 'VueJs'
      },
      {
        name: 'Tailwind'
      },
      {
        name: 'Vuetify'
      },
      {
        name: 'Laravel'
      }
    ]
  },
  {
    title: 'Seller Platform Front Page',
    links: {
      site: 'https://maxcom.store',
    },
    image: {
      original: '/maxcom-shop-screenshot.png',
      src: '/maxcom-shop-screenshot-508x256.webp',
      alt: 'Seller Store Front Page'
    },
    skills: [
      {
        name: 'Nuxt'
      },
      {
        name: 'Tailwind'
      }
    ]
  }
]

function displayImage(image: string) {
  selectedImage.value = image;
  isModelOpen.value = true;
}

function onModalToggle() {
  if (!isModelOpen.value) {
    selectedImage.value = null;
  }
}
</script>

<template>
  <TitledSection id="portfolio" title="PORTFOLIO" sub-title="Check Out Some of My Work"
                 class="bg-gray-100 text-gray-800">
    <div class="flex flex-wrap gap-8 justify-center max-w-full w-96" style="width: 1000px">
      <div v-for="project in projects"
           class="relative flex bg-gray-800 shadow-xl hover:shadow-gray-800/40 flex-col gap-2 rounded-xl p-2 sm:w-96 w-[340px]">
        <div class="w-full group relative">
          <img class="rounded-lg h-64 w-full object-cover" :src="project.image.src" :alt="project.image.alt"/>
          <div
              class="w-full hidden group-hover:flex justify-center bg-gray-800 bg-opacity-50 items-center h-full absolute top-0">
            <svg-icon @click="displayImage(project.image.original)" :path="mdiEye" class="text-white cursor-pointer"
                      size="25" type="mdi"/>
          </div>
        </div>
        <div class="m-2 flex flex-col gap-4">
          <div class="flex items-center justify-between gap-2">
            <span class="font-bold text-white text-xl">{{ project.title }}</span>
            <div v-if="project.links" class="flex gap-4">
              <a v-if="project.links.github" :href="project.links.github" target="_blank">
                <svg-icon :path="mdiGithub" class="text-white" size="20" type="mdi"/>
              </a>
              <a v-if="project.links.site" :href="project.links.site" target="_blank">
                <svg-icon :path="mdiOpenInNew" class="text-white" size="20" type="mdi"/>
              </a>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-white">Skills</span>
            <div class="flex gap-1">
              <div v-for="skill in project.skills"
                   class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-md border-blue-400">
                {{ skill.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ImageModal v-model="isModelOpen" @update:model-value="onModalToggle" :image="selectedImage"/>
  </TitledSection>
</template>

<style scoped>

</style>