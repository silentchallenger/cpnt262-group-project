<script setup>
defineProps({
  title: {
    type: String,
    default: "A base title"
  },
  description: {
    type: String,
    default: "A base description"
  },
  price: {
    type: String,
    default: "A base price"
  },
  imagePath: {
    type: String
  }
})
</script>

<template>
  <section class="flex flex-col items-center font-serif p-4 max-w-4xl">
    <h3 class="font-bold text-white text-xl">{{ title }}</h3>
    <p class="text-white text-lg">{{ description }}</p>
    <p class="text-white text-lg pb-4">{{ price }}</p>
    <img :src="imagePath" :alt="title">
    <slot></slot>
  </section>
</template>
<style scoped>
img {
  max-width: 80%;
}
</style>