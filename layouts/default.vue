<template>
  <div>
    <!-- the margin buttom below is for the scroll observer to detect the intersection -->
    <div id="home" class="h-screen w-full flex flex-col justify-center items-center bg-black"
         style="margin-bottom: 1px">
      <picture class="w-full h-full flex justify-center">
        <source media="(max-width: 600px)" srcset="../public/main_bg_600x338.webp">
        <source media="(max-width: 900px)" srcset="../public/main_bg_900x506.webp">
        <img alt="Houider Walid Portfolio" class="absolute h-full object-cover" width="1650" height="928"
             src="../public/main_bg_1650x928.webp">
      </picture>
      <div class="absolute w-full h-full bg-black" style="opacity: .5"></div>
      <div class="absolute"></div>
      <nav id="header" :class="{'md:bg-transparent': !showDarkBg, 'md:py-10': inViewHeight}"
           class="bg-black fixed top-0 w-full py-4 z-20 flex flex-col items-center px-10 sm:justify-center gap-10 text-white z-10">
        <BurgerMenu v-model="data.isBurgerOpen" class="relative sm:hidden block z-50"/>
        <ul :class="{'hidden sm:flex': !data.isBurgerOpen}" class="flex sm:flex-row flex-col gap-8 sm:h-10 font-bold">
          <li v-for="item in navItems" class="flex items-center justify-center">
            <a :class="{'text-green-400': data.section === item.id}" @click="closeMenu"
               :href="item.href">{{ item.text }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <HeroSection/>
    <slot/>
  </div>
</template>

<script lang="ts" setup>

import BurgerMenu from "~/components/BurgerMenu.vue";
import HeroSection from "~/components/pageSections/HeroSection.vue";

const navItems = [
  {
    id: 'home',
    href: '#home',
    text: 'Home',
  },
  {
    id: 'about',
    href: '#about',
    text: 'About',
  },
  {
    id: 'resume',
    href: '#resume',
    text: 'Resume',
  },
  {
    id: 'portfolio',
    href: '#portfolio',
    text: 'Portfolio',
  },
  {
    id: 'contact',
    href: '#contact',
    text: 'Contact',
  }
]

const data = reactive({
  section: '',
  isBurgerOpen: false,
  scrollHeight: window?.scrollY ?? 0,
  viewHeight: window.innerHeight
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  title: 'Houider Walid Portfolio',
  meta: [
    {name: 'description', content: 'A portfolio showcasing my web development projects and skills.'},
    {property: 'og:title', content: 'My Web Dev Portfolio'},
    {property: 'og:description', content: 'See the web projects I’ve built using Vue, Nuxt, and more.'},
    {property: 'og:image', content: '../public/houider-walid-image-96x96.webp'},
  ]
})

const showDarkBg = computed(() => data.scrollHeight > 0)
const inViewHeight = computed(() => data.viewHeight > data.scrollHeight)

function closeMenu() {
  data.isBurgerOpen = false
}

onMounted(() => {
  if (document) {
    document.addEventListener('scroll', (e) => {
      data.scrollHeight = window.scrollY
    })
  }

  navItems.forEach(item => {
    let elementTarget = document.getElementById(item.id)

    if (!elementTarget) {
      return;
    }

    let elementObserver = new IntersectionObserver(([entry]) => {

      if (entry.intersectionRatio > 0.5) {
        data.section = entry.target.id
      }

    }, {threshold: 0.5})
    elementObserver.observe(elementTarget)
  })
})

</script>

<style>
html {
  margin: 0;
  padding: 0;
}
</style>