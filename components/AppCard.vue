<script setup>
defineProps({
  member: Object
});
</script>

<template>
  <AppCardSection>
    <h2 class="text-xl p-4">{{ member.memberName }}</h2>
    <img :src="member.memberImg" :alt="member.memberImgAlt" class=" w-3/6 rounded-full" />
    <p class="text-lg m-4">{{ member.tagLine }}</p>
    <NuxtLink :to="member.memberLink"><Icon name="uil:github" /></NuxtLink>
  </AppCardSection>
</template>