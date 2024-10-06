<template>
  <div style="font-family: 'Protest Guerrilla'">
    <!-- the margin buttom below is for the scroll observer to detect the intersection -->
    <section id="home" class="h-screen w-full flex flex-col justify-center items-center bg-black"
             style="margin-bottom: 1px">
      <img alt="" class="absolute h-full object-cover" src="../public/intro-bg.jpg">
      <div class="absolute w-full h-full bg-black" style="opacity: .5"></div>
      <div class="absolute"></div>
      <div id="header" :class="{'md:bg-transparent': !showDarkBg, 'md:py-10': inViewHeight}"
           class="bg-black fixed top-0 w-full py-4 flex flex-col items-center py-10 sm:justify-center gap-10 text-white z-10">
        <BurgerMenu v-model="isBurgerOpen" class="relative sm:hidden block z-50"/>
        <ul :class="{'hidden sm:flex': !isBurgerOpen}" class="flex sm:flex-row flex-col gap-8 sm:h-10 font-bold">
          <li class="flex items-center justify-center">
            <a :class="{'text-green-400': section === 'home'}" href="#home">Home</a>
          </li>
          <li class="flex items-center justify-center">
            <a :class="{'text-green-400': section === 'about'}" href="#about">About</a>
          </li>
          <li class="flex items-center justify-center">
            <a :class="{'text-green-400': section === 'resume'}" href="#resume">Resume</a>
          </li>
          <li class="flex items-center justify-center">
            <a :class="{'text-green-400': section === 'portfolio'}" href="#portfolio">Portfolio</a>
          </li>
          <li class="flex items-center justify-center">
            <a :class="{'text-green-400': section === 'contact'}" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <section class="flex flex-col text-white gap-10 my-auto" style="z-index: 1">
        <h1 class="text-8xl flex flex-col items-center gap-5">
          <span class="text-2xl font-bold text-green-500">HELLO, I'M</span>
          <span class="text-center">Houider Walid</span>
          <span class="text-xl">FULL-STACK WEB DEVELOPER</span>
        </h1>
        <div class="flex justify-center">
          <a class="border-2 py-3 px-6 hover:border-green-400 transition-colors duration-500" href="#about">
            MORE ABOUT ME
          </a>
        </div>
      </section>
    </section>

    <section id="about" class="flex flex-col items-center justify-center py-20 gap-10 bg-gray-100">
      <h2 class="flex flex-col items-center text-gray-800 text-4xl font-bold">
        <span class="text-xl text-green-500 tracking-widest">ABOUT</span>
        Let me introduce myself.
      </h2>
      <div class="flex flex-col md:flex-row items-center py-6 max-w-3xl gap-9">
        <img alt="" class="w-24 h-24" src="../public/43239991.png" style="border-radius: 50%">
        <p class="text-xl text-gray-500 mx-4 md:mx-0">
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
              <div class="relative h-full bg-gray-700 w-4/5">
                <div
                    class="absolute flex justify-center bg-gray-800 text-xs bottom-0 right-0 rounded-md text-white px-2 py-1 mb-5">
                  80%
                  <div class="absolute border-x-8 border-t-8 border-transparent border-t-gray-800 mt-5 w-0 h-0"/>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="font-bold mb-2 text-gray-800">WORDPRESS</span>
            <div class="h-1.5 bg-gray-400 w-80">
              <div class="relative h-full bg-gray-700 w-2/4">
                <div
                    class="absolute flex justify-center bg-gray-800 text-xs bottom-0 right-0 rounded-md text-white px-2 py-1 mb-5">
                  50%
                  <div class="absolute border-x-8 border-t-8 border-transparent border-t-gray-800 mt-5 w-0 h-0"/>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="font-bold mb-2 text-gray-800">JAVASCRIPT</span>
            <div class="h-1.5 bg-gray-400 w-80">
              <div class="relative h-full bg-gray-700 w-4/5">
                <div
                    class="absolute flex justify-center bg-gray-800 text-xs bottom-0 right-0 rounded-md text-white px-2 py-1 mb-5">
                  80%
                  <div class="absolute border-x-8 border-t-8 border-transparent border-t-gray-800 mt-5 w-0 h-0"/>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="font-bold mb-2 text-gray-800">VUEJS</span>
            <div class="h-1.5 bg-gray-400 w-80">
              <div class="relative h-full bg-gray-700 w-4/6">
                <div
                    class="absolute flex justify-center bg-gray-800 text-xs bottom-0 right-0 rounded-md text-white px-2 py-1 mb-5">
                  70%
                  <div class="absolute border-x-8 border-t-8 border-transparent border-t-gray-800 mt-5 w-0 h-0"/>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col mb-2 text-gray-800">
            <span class="font-bold mb-2">LARAVEL</span>
            <div class="h-1.5 bg-gray-400 w-80">
              <div class="relative h-full bg-gray-700 w-4/5">
                <div
                    class="absolute flex justify-center bg-gray-800 text-xs bottom-0 right-0 rounded-md text-white px-2 py-1 mb-5">
                  80%
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
    </section>

    <section id="resume" class="flex flex-col items-center justify-center py-20 gap-10 bg-gray-200">
      <h2 class="flex flex-col items-center text-gray-800 text-4xl font-bold">
        <span class="text-xl text-green-500 tracking-widest">RESUME</span>
        More of my credentials
      </h2>

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
    </section>

    <section id="portfolio" class="flex flex-col items-center justify-center py-20 gap-10 bg-gray-100">
      <h2 class="flex flex-col items-center text-gray-800 text-4xl text-center font-bold">
        <span class="text-xl text-green-500 tracking-widest">PORTFOLIO</span>
        Check Out Some of My Work
      </h2>
      <div class="my-24 flex flex-col gap-20 px-4">
        <div class="flex flex-col gap-10">
          <h3 class="text-xl text-gray-500 border-b-2 border-b-gray-500">Excursion Website</h3>
          <div class="flex gap-20 md:flex-row flex-col">
            <div class="flex flex-col items-center justify-center gap-8">

              <img alt="" class="w-52 rounded-lg" src="../public/simo_travel.png">
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex flex-col items-center md:items-start">
                <h6 class="text-lg text-gray-500">link</h6>
                <a class="text-md" href="https://letstravel.houiderwalid.com" target="_blank">https://letstravel.houiderwalid.com</a>
              </div>
              <div class="flex flex-col items-center md:items-start">
                <h6 class="text-lg text-gray-500">skills</h6>
                <ul class="text-md md:text-start text-center">
                  <li>Wordpress</li>
                  <li>tailwind</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-10">
          <h3 class="text-xl text-gray-500 border-b-2 border-b-gray-500">Affiliate Network Dashboard</h3>
          <div class="flex gap-20 md:flex-row flex-col">
            <div class="flex flex-col items-center justify-center gap-8">

              <img alt="" class="w-52 rounded-lg" src="../public/dash.maxcom.network.png">
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex flex-col items-center md:items-start">
                <h6 class="text-lg text-gray-500">link</h6>
                <a class="text-md" href="https://dash.maxcom.network" target="_blank">https://dash.maxcom.network</a>
              </div>
              <div class="flex flex-col items-center md:items-start">
                <h6 class="text-lg text-gray-500">skills</h6>
                <ul class="text-md md:text-start text-center">
                  <li>VueJs</li>
                  <li>Bootstrap</li>
                  <li>Vuetify</li>
                  <li>Laravel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-10">
          <h3 class="text-xl text-gray-500 border-b-2 border-b-gray-500">Affiliate Network Front Page</h3>
          <div class="flex gap-20 md:flex-row flex-col">
            <div class="flex flex-col items-center justify-center gap-8">

              <img alt="" class="w-52 rounded-lg" src="../public/maxcom.network.png">
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex flex-col items-center md:items-start">
                <h6 class="text-lg text-gray-500">link</h6>
                <a class="text-md" href="https://maxcom.network" target="_blank">https://maxcom.network</a>
              </div>
              <div class="flex flex-col items-center md:items-start">
                <h6 class="text-lg text-gray-500">skills</h6>
                <ul class="text-md md:text-start text-center">
                  <li>JQuery</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="contact" class="flex flex-col items-center justify-center py-20 gap-10 bg-gray-800">
      <h2 class="flex flex-col items-center text-white text-4xl font-bold">
        <span class="text-xl text-green-500 tracking-widest">CONTACT</span>
        I'd Love To Hear From You
      </h2>
      <p class="text-xl text-gray-500 max-w-xl text-center">
        Please, feel free to contact me for more information or any custom services you may need.
      </p>
      <!--      <div class="max-w-xl w-full px-4 mt-8">
              <div class="relative z-0 w-full mb-5 group">
                <input id="floating_name"
                       class="block py-3 px-0 w-full text-white text-md bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                       name="floating_name"
                       placeholder=" "
                       required type="text"/>
                <label
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    for="floating_name">Name</label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input id="floating_email"
                       class="block py-3 px-0 w-full text-white text-md bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                       name="floating_email"
                       placeholder=" "
                       required type="email"/>
                <label
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    for="floating_email">Email</label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input id="floating_subject"
                       class="block py-3 px-0 w-full text-white text-md bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                       name="floating_subject"
                       placeholder=" "
                       required type="text"/>
                <label
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    for="floating_subject">Subject</label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <textarea id="floating_message"
                          class="block py-3 px-0 text-white w-full text-md bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                          name="floating_message" placeholder=" "
                          required
                          rows="5" type="text"/>
                <label
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    for="floating_message">Message</label>
              </div>
              <button
                  class="w-full mt-16 border-4 border-gray-800 bg-green-500 hover:bg-gray-600 hover:border-gray-600 text-white py-3 w-60 px-6 font-bold">
                SUBMIT
              </button>
            </div>-->
      <div class="flex md:flex-row gap-10 flex-col justify-around max-w-2xl w-full mt-12">
        <div class="flex flex-col items-center gap-4">
          <svg-icon :path="mdiPhone" class="text-white" type="mdi"/>
          <span class="tracking-widest text-green-400">EMAIL ME AT</span>
          <span class="text-gray-500">houiderwalid@gmail.com</span>
        </div>
        <div class="flex flex-col items-center gap-4">
          <svg-icon :path="mdiEmail" class="text-white" type="mdi"/>
          <span class="tracking-widest text-green-400">CALL ME AT</span>
          <span class="text-gray-500">(+212) 673 904 623</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import {mdiSchool, mdiBriefcase, mdiMapMarker, mdiPhone, mdiEmail} from '@mdi/js'
import BurgerMenu from "../components/BurgerMenu";

export default {
  name: "default",
  components: {BurgerMenu, SvgIcon},
  data() {
    return {
      mdiSchool,
      mdiBriefcase,
      mdiPhone,
      mdiEmail,
      mdiMapMarker,
      section: null,
      isBurgerOpen: false,
      scrollHeight: window?.scrollY ?? 0,
      viewHeight: window.innerHeight
    }
  },
  computed: {
    showDarkBg() {
      return this.scrollHeight > 0
    },
    inViewHeight() {
      return this.viewHeight > this.scrollHeight
    }
  },
  methods: {
    downloadCV() {
      const link = document.createElement('a');
      link.href = 'cv.pdf';  // Replace with your file URL
      link.download = 'cv.pdf';  // The name of the file to download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },
  mounted() {
    if (document) {
      document.addEventListener('scroll', (e) => {
        this.scrollHeight = window.scrollY
      })
    }

    ['home', 'about', 'resume', 'portfolio', 'contact'].forEach(id => {
      let elementTarget = document.getElementById(id)
      let elementObserver = new IntersectionObserver(([entry]) => {

        if (entry.intersectionRatio > 0.5) {
          this.section = entry.target.id
        }

      }, {threshold: 0.5})
      elementObserver.observe(elementTarget)
    })
  },
}
/**/
</script>

<style>
html {
  margin: 0;
  padding: 0;
}
</style>