<script setup>
const router = useRouter();

const mainRoutes = computed(() => {
  return router.options.routes.filter(
    (route) => route.path.split("/").length <= 2
  );
});

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

</script>
<template>
  <nav class="bg-slate-300 text-black justify-center flex text-xl font-bold">
    <ul class="flex space-around">
      <li v-for="route in mainRoutes" :key="route.id">
        <NuxtLink :to="route.path" class="block p-4 hover:text-white hover:bg-black">
          {{ capitalize(route.name) }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
  <pre>{{ router }}</pre>
</template>