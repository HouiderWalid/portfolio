<script setup lang="ts">

import TitledSection from "~/components/pageSections/TitledSection.vue";

</script>

<template>
  <TitledSection id="contact" title="CONTACT" sub-title="I'd Love To Hear From You" class="bg-gray-800 text-white">
    <p class="text-xl text-gray-500 max-w-xl text-center">
      Please, feel free to contact me for more information or any custom services you may need.
    </p>
    <div class="flex md:flex-row gap-10 flex-col justify-around max-w-2xl w-full mt-12">
      <div class="flex flex-col items-center gap-4">
        <Icon name="mdi:phone" class="text-white" size="25"/>
        <span class="tracking-widest text-green-400">EMAIL ME AT</span>
        <span class="text-gray-500">houiderwalid@gmail.com</span>
      </div>
      <div class="flex flex-col items-center gap-4">
        <Icon name="mdi:email" class="text-white" size="25"/>
        <span class="tracking-widest text-green-400">CALL ME AT</span>
        <span class="text-gray-500">(+212) 673 904 623</span>
      </div>
    </div>
  </TitledSection>
</template>

<style scoped>

</style>