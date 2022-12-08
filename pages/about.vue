<script setup>
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
    <p class="text-2xl font-bold text-center">About Page</p>
    <section class="flex justify-evenly gap-8 flex-wrap mt-0 mb-8 mx-6 md:max-w-5xl md:my-8 md:mx-auto">
      <AppCard v-for="member in members" :key="member.id" :memberName="member.memberName" :memberImg="member.memberImg" :memberImgAlt="member.memberImgAlt" :tagLine="member.tagLine" :memberLink="member.memberLink" />
    </section>

  </AppMain>
</template>

<style>

</style>