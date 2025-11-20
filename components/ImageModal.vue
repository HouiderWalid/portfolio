<script setup lang="ts">
const {modelValue, image} = defineProps(['modelValue', 'image']);
const emit = defineEmits(['update:modelValue'])
const isOpen = computed({
  get() {
    return modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

function onOverlayClick() {
  isOpen.value = false
}

function close() {
  isOpen.value = false
}
</script>

<template>
  <div @click="onOverlayClick" tabindex="-1" aria-hidden="true" :class="modelValue ? 'flex' : 'hidden'"
       class="bg-opacity-50 bg-gray-800 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center md:inset-0 h-screen max-h-full">
    <div class="relative p-4 max-w-6xl max-h-full flex" @click.stop>

      <div class="relative group bg-white rounded-lg shadow-sm w-fit">
        <img :src="image" alt="Image Display" class="rounded-lg">
        <div @click="close" class="absolute cursor-pointer bg-gray-800 rounded-full justify-center items-center top-0 group-hover:flex hidden right-0 m-2 p-1">
          <Icon name="mdi:close" class="text-white" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>