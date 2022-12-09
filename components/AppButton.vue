<script setup>
defineProps({
  page: String,
  bgColor: String,
  hoverBg: String,
  hoverTxt: String,
  content: String,
})
</script>

<template>
  <NuxtLink :to="page" class="text-xl border-2 rounded-md p-2" :class="bgColor, hoverBg, hoverTxt">{{ content }}</NuxtLink>
</template>