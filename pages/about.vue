<script setup>
defineProps({})
const members = [{
  memberName: "Darryl Becker",
  memberImg: "/img/darryl.jpg",
  memberImgAlt: "Darryl",
  tagLine: "It's not a bug. It's an undocumented feature!",
  memberLink: "https://github.com/darbecker12"
},
{
  memberName: "Rustu Mesut Eser",
  memberImg: "/img/rustu.png",
  memberImgAlt: "Rustu",
  tagLine: "When things are bad, they could always be worse",
  memberLink: "https://github.com/silentchallenger"
}]
</script>
<template>
  <AppMain>
    <h1 class="text-2xl font-bold text-center text-white p-4">About Page</h1>
    <section class="flex justify-around gap-8 flex-wrap mt-0 mb-8 mx-6 md:max-w-5xl md:my-8 md:mx-auto">
      <AppCard v-for="member in members" :key="member.id" :member="member"/>
    </section>
  </AppMain>
</template>

<style>

</style>