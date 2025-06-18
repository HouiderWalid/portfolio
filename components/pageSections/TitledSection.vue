<script setup lang="ts">
const {id, title, subTitle} = defineProps(['id', 'title', 'subTitle']);
</script>

<template>
  <section :id="id" class="flex flex-col items-center justify-center py-20 gap-10">
    <h2 class="flex flex-col items-center text-4xl font-bold">
      <span class="text-xl text-green-500 tracking-widest">{{ title }}</span>
      <span v-if="subTitle" class="text-center">{{ subTitle }}</span>
    </h2>
    <slot/>
  </section>
</template>

<style scoped>

</style>