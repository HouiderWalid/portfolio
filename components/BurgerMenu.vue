<template>
  <button class="flex items-center text-green-500" @click="openToggler =!openToggler">
    <span class="text-xl">menu</span>
    <span class="flex flex-col justify-center items-center gap-1 m-4">
          <span :class="{'rotate-45 translate-y-1.5': openToggler}"
                class="bg-green-400 transition ease transform duration-300 h-0.5 w-6"/>
    <span :class="{'opacity-0': openToggler}" class="bg-green-400 transition ease transform duration-300 h-0.5 w-6"/>
    <span :class="{'-rotate-45 -translate-y-1.5': openToggler}"
          class="bg-green-400 transition ease transform duration-300 h-0.5 w-6"/>
    </span>
  </button>
</template>

<script>
export default {
  name: "BurgerMenu",
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    openToggler: {
      get() {
        return this.modelValue
      },
      set(v) {
        this.$emit('update:modelValue', v)
      }
    }
  }
}
</script>

<style scoped>

</style>