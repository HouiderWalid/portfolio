<template>
  <div>
    <AboutSection/>
    <ResumeSection/>
    <PortfolioSection/>
    <ContactSection/>
  </div>
</template>

<script>
import AboutSection from "~/components/pageSections/AboutSection.vue";
import ResumeSection from "~/components/pageSections/ResumeSection.vue";
import PortfolioSection from "~/components/pageSections/PortfolioSection.vue";
import ContactSection from "~/components/pageSections/ContactSection.vue";

export default {
  name: "index",
  components: {ContactSection, PortfolioSection, ResumeSection, AboutSection}
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>