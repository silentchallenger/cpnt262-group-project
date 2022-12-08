<script setup>
defineProps({
  memberName: {
    type: String,
    default: "Default Name"
  },
  memberImg: {
    type: String,
    default: "Default Image"
  },
  memberImgAlt: {
    type: String,
    default: "Default Alt Name"
  },
  tagLine: {
    type: String,
    default: "Default Tag Line"
  },
  memberLink: {
    type: String,
    default: "Default Link"
  },
});
</script>

<template>
  <section class="text-center w-400 h-425 text-white flex flex-col items-center rounded-2xl border-2 bg-slate-600">
    <h2 class="text-xl p-4">{{ memberName }}</h2>
    <NuxtImg :src="memberImg" :alt="memberImgAlt" class=" w-3/6 rounded-full" />
    <p class="text-lg m-4">{{ tagLine }}</p>
    <NuxtLink :to="memberLink"><Icon name="uil:github" /></NuxtLink>
  </section>
</template>